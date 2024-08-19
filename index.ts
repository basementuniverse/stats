/**
 * Safe version of `Math.min`
 *
 * Native `Math.min` throws:
 * ```
 * `Uncaught RangeError: Maximum call stack size exceeded`
 * ```
 * when passing in a huge number of arguments (>~100k).
 * @param {number[]} a An array of numbers
 * @returns {number} The minimum number from the array
 */
export function minArray(a: number[]): number {
  let length = a.length;
  let min = Infinity;

  while (length--) {
    min = a[length] < min ? a[length] : min;
  }
  return min;
}

/**
 * Safe version of `Math.max`
 *
 * Native `Math.max` throws:
 * ```
 * `Uncaught RangeError: Maximum call stack size exceeded`
 * ```
 * when passing in a huge number of arguments (>~100k).
 * @param {number[]} a An array of numbers
 * @returns {number} The maximum number from the array
 */
export function maxArray(a: number[]): number {
  let length = a.length;
  let max = -Infinity;

  while (length--) {
    max = a[length] > max ? a[length] : max;
  }
  return max;
}

/**
 * Find the mean of a list of numbers
 * @param {number[]} data An array of numbers
 * @returns {number} The mean of a list of numbers
 */
export function mean(data: number[]): number {
  const { length: n } = data;

  if (!n) {
    return 0;
  }

  return data.reduce((a, c) => a + c, 0) / n;
}

/**
 * Find the median of a list of numbers
 * @param {number[]} data An array of numbers
 * @returns {number} The median of a list of numbers
 */
export function median(data: number[]): number {
  const { length: n } = data;

  if (!n) {
    return 0;
  }

  const sortedData = [...data].sort((a, b) => a - b);
  if (n % 2 === 0) {
    return mean([sortedData[n / 2 - 1], sortedData[n / 2]]);
  }

  return sortedData[(n - 1) / 2];
}

/**
 * Find the mode of a list of numbers
 * @param {number[]} data An array of numbers
 * @returns {number} The mode of a list of numbers
 */
export function mode(data: number[]): number {
  const { length: n } = data;

  if (!n) {
    return 0;
  }

  const mode: Record<number, number> = {};
  let max: number = 0, count: number = 0;

  data.forEach(v => {
    mode[v] = (mode[v] ?? 0) + 1;
    if (mode[v] > count) {
      max = v;
      count = mode[v];
    }
  });

  return max;
}

/**
 * Find the range of a list of numbers
 * @param {number[]} data An array of numbers
 * @returns {object} An object containing the min, max and range
 * @example Returned format:
 * ```
 * {
 *   min: 1,
 *   max: 5,
 *   range: 4
 * }
 * ```
 */
export function range(data: number[]): {
  min: number;
  max: number;
  range: number;
} {
  const { length: n } = data;

  if (!n) {
    return {
      min: 0,
      max: 0,
      range: 0,
    };
  }

  const min = minArray(data), max = maxArray(data);

  return {
    min,
    max,
    range: max - min,
  };
}

/**
 * Calculate the variance of a list of numbers
 * @param {number[]} data An array of numbers
 * @param {boolean} sample True if the dataset is a sample
 * @returns {number} The variance of a list of numbers
 */
export function variance(data: number[], sample: boolean = false): number {
  const { length: n } = data;

  if (!n) {
    return 0;
  }

  if (sample && n === 1) {
    return 0;
  }

  const mu = mean(data);

  return data.map(n => Math.pow(n - mu, 2)).reduce((a, c) => a + c, 0) / (
    sample
      ? (n - 1)
      : n
  );
}

/**
 * Calculate the standard deviation of a list of numbers
 * @param {number[]} data An array of numbers
 * @param {boolean} sample True if the dataset is a sample
 * @returns {number} The standard deviation of a list of numbers
 */
export function standardDeviation(data: number[], sample: boolean = false): number {
  return Math.sqrt(variance(data, sample));
}

/**
 * Calculate the (exclusive) interquartile range of a list of numbers
 * @param {number[]} data An array of numbers
 * @returns {object} An object containing the Q1, Q2 and Q3 medians and interquartile range
 * @example Returned format:
 * ```
 * {
 *   q1: 1,
 *   q2: 3,
 *   q3: 5,
 *   range: 4
 * }
 * ```
 */
export function iqr(data: number[]): {
  q1?: number;
  q2?: number;
  q3?: number;
  range: number;
} {
  const { length: n } = data;
  const half = n / 2;

  if (n < 4) {
    return { range: 0 };
  }

  const sortedData = [...data].sort((a, b) => a - b);
  let q1: number = 0, q3: number = 0;
  if (n % 2 === 0) {
    q1 = median(sortedData.slice(0, half));
    q3 = median(sortedData.slice(-half));
  } else {
    q1 = median(sortedData.slice(0, Math.floor(half)));
    q3 = median(sortedData.slice(-Math.floor(half)));
  }

  return {
    q1,
    q2: median(sortedData),
    q3,
    range: q3 - q1,
  };
}

export type Bucket = {
  min: number;
  max: number;
  frequency: number;
};

/**
 * Generate a histogram by splitting data into buckets of the specified size
 * and counting the frequency of items in each bucket
 *
 * Within each bucket, min is inclusive and max is exclusive
 *
 * @param {number[]} data An array of numbers
 * @param {number} bucketWidth The width of each bucket
 * @returns {Bucket[]} An array of buckets
 * @example Returned format:
 * ```
 * [
 *   {
 *     min: 1,
 *     max: 3,
 *     frequency: 4
 *   }
 * ]
 * ```
 */
export function histogram(
  data: number[],
  bucketWidth: number = 1
): Bucket[] {
  const min = minArray(data);
  const max = maxArray(data);

  const buckets: Bucket[] = [];
  for (let i = min; i <= max; i += bucketWidth) {
    buckets.push({
      min: i,
      max: i + bucketWidth,
      frequency: 0,
    });
  }

  data.forEach(v => {
    const bucket = Math.floor((v - min) / bucketWidth);
    buckets[bucket].frequency++;
  });

  return buckets;
}
