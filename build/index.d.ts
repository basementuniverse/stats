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
export declare function minArray(a: number[]): number;
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
export declare function maxArray(a: number[]): number;
/**
 * Find the mean of a list of numbers
 * @param {number[]} data An array of numbers
 * @returns {number} The mean of a list of numbers
 */
export declare function mean(data: number[]): number;
/**
 * Find the median of a list of numbers
 * @param {number[]} data An array of numbers
 * @returns {number} The median of a list of numbers
 */
export declare function median(data: number[]): number;
/**
 * Find the mode of a list of numbers
 * @param {number[]} data An array of numbers
 * @returns {number} The mode of a list of numbers
 */
export declare function mode(data: number[]): number;
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
export declare function range(data: number[]): {
    min: number;
    max: number;
    range: number;
};
/**
 * Calculate the variance of a list of numbers
 * @param {number[]} data An array of numbers
 * @param {boolean} sample True if the dataset is a sample
 * @returns {number} The variance of a list of numbers
 */
export declare function variance(data: number[], sample?: boolean): number;
/**
 * Calculate the standard deviation of a list of numbers
 * @param {number[]} data An array of numbers
 * @param {boolean} sample True if the dataset is a sample
 * @returns {number} The standard deviation of a list of numbers
 */
export declare function standardDeviation(data: number[], sample?: boolean): number;
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
export declare function iqr(data: number[]): {
    q1?: number;
    q2?: number;
    q3?: number;
    range: number;
};
export declare type Bucket = {
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
export declare function histogram(data: number[], bucketWidth?: number): Bucket[];
