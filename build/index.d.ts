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
 * @returns {object} An object containing the Q1 median, Q3 median and interquartile range
 */
export declare function iqr(data: number[]): {
    q1?: number;
    q2?: number;
    q3?: number;
    range: number;
};
