"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iqr = exports.standardDeviation = exports.variance = exports.range = exports.mode = exports.median = exports.mean = void 0;
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
    const sortedData = [...data].sort();
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
    const min = Math.min(...data), max = Math.max(...data);
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
 * @returns {object} An object containing the Q1 median, Q3 median and interquartile range
 */
function iqr(data) {
    const { length: n } = data;
    const half = n / 2;
    if (n < 4) {
        return { range: 0 };
    }
    const sortedData = [...data].sort();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7OztHQUlHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFDLElBQWM7SUFDakMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFFM0IsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNOLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7SUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBUkQsb0JBUUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLElBQWM7SUFDbkMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFFM0IsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNOLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7SUFFRCxNQUFNLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNmLE9BQU8sSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDekQ7SUFFRCxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBYkQsd0JBYUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFDLElBQWM7SUFDakMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FB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