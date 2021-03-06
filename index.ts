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

  const sortedData = [...data].sort();
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

  const min = Math.min(...data), max = Math.max(...data);

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
 * @returns {object} An object containing the Q1 median, Q3 median and interquartile range
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

  const sortedData = [...data].sort();
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
