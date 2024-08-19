"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.histogram = exports.iqr = exports.standardDeviation = exports.variance = exports.range = exports.mode = exports.median = exports.mean = exports.maxArray = exports.minArray = void 0;
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
function minArray(a) {
    let length = a.length;
    let min = Infinity;
    while (length--) {
        min = a[length] < min ? a[length] : min;
    }
    return min;
}
exports.minArray = minArray;
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
function maxArray(a) {
    let length = a.length;
    let max = -Infinity;
    while (length--) {
        max = a[length] > max ? a[length] : max;
    }
    return max;
}
exports.maxArray = maxArray;
/**
 * Find the mean of a list of numbers
 * @param {number[]} data An array of numbers
 * @returns {number} The mean of a list of numbers
 */
function mean(data) {
    const { length: n } = data;
    if (!n) {
        return 0;
    }
    return data.reduce((a, c) => a + c, 0) / n;
}
exports.mean = mean;
/**
 * Find the median of a list of numbers
 * @param {number[]} data An array of numbers
 * @returns {number} The median of a list of numbers
 */
function median(data) {
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
exports.median = median;
/**
 * Find the mode of a list of numbers
 * @param {number[]} data An array of numbers
 * @returns {number} The mode of a list of numbers
 */
function mode(data) {
    const { length: n } = data;
    if (!n) {
        return 0;
    }
    const mode = {};
    let max = 0, count = 0;
    data.forEach(v => {
        var _a;
        mode[v] = ((_a = mode[v]) !== null && _a !== void 0 ? _a : 0) + 1;
        if (mode[v] > count) {
            max = v;
            count = mode[v];
        }
    });
    return max;
}
exports.mode = mode;
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
function range(data) {
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
exports.range = range;
/**
 * Calculate the variance of a list of numbers
 * @param {number[]} data An array of numbers
 * @param {boolean} sample True if the dataset is a sample
 * @returns {number} The variance of a list of numbers
 */
function variance(data, sample = false) {
    const { length: n } = data;
    if (!n) {
        return 0;
    }
    if (sample && n === 1) {
        return 0;
    }
    const mu = mean(data);
    return data.map(n => Math.pow(n - mu, 2)).reduce((a, c) => a + c, 0) / (sample
        ? (n - 1)
        : n);
}
exports.variance = variance;
/**
 * Calculate the standard deviation of a list of numbers
 * @param {number[]} data An array of numbers
 * @param {boolean} sample True if the dataset is a sample
 * @returns {number} The standard deviation of a list of numbers
 */
function standardDeviation(data, sample = false) {
    return Math.sqrt(variance(data, sample));
}
exports.standardDeviation = standardDeviation;
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
function iqr(data) {
    const { length: n } = data;
    const half = n / 2;
    if (n < 4) {
        return { range: 0 };
    }
    const sortedData = [...data].sort((a, b) => a - b);
    let q1 = 0, q3 = 0;
    if (n % 2 === 0) {
        q1 = median(sortedData.slice(0, half));
        q3 = median(sortedData.slice(-half));
    }
    else {
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
exports.iqr = iqr;
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
function histogram(data, bucketWidth = 1) {
    const min = minArray(data);
    const max = maxArray(data);
    const buckets = [];
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
exports.histogram = histogram;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLENBQVc7SUFDbEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN0QixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7SUFFbkIsT0FBTyxNQUFNLEVBQUUsRUFBRTtRQUNmLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUN6QztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQVJELDRCQVFDO0FBRUQ7Ozs7Ozs7Ozs7R0FVRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxDQUFXO0lBQ2xDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFFcEIsT0FBTyxNQUFNLEVBQUUsRUFBRTtRQUNmLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUN6QztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQVJELDRCQVFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLElBQUksQ0FBQyxJQUFjO0lBQ2pDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBRTNCLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDTixPQUFPLENBQUMsQ0FBQztLQUNWO0lBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMs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