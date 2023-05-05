"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iqr = exports.standardDeviation = exports.variance = exports.range = exports.mode = exports.median = exports.mean = exports.maxArray = exports.minArray = void 0;
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
 * @returns {object} An object containing the Q1 median, Q3 median and interquartile range
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLENBQVc7SUFDbEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN0QixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7SUFFbkIsT0FBTyxNQUFNLEVBQUUsRUFBRTtRQUNmLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUN6QztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQVJELDRCQVFDO0FBRUQ7Ozs7Ozs7Ozs7R0FVRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxDQUFXO0lBQ2xDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFFcEIsT0FBTyxNQUFNLEVBQUUsRUFBRTtRQUNmLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUN6QztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQVJELDRCQVFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLElBQUksQ0FBQyxJQUFjO0lBQ2pDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBRTNCLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDTixPQUFPLENBQUMsQ0FBQztLQUNWO0lBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQVJELG9CQVFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLE1BQU0sQ0FBQyxJQUFjO0lBQ25DLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBRTNCLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDTixPQUFPLENBQUMsQ0FBQztLQUNWO0lBRUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6RDtJQUVELE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFiRCx3QkFhQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixJQUFJLENBQUMsSUFBYztJQUNqQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztJQUUzQixJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ04sT0FBTyxDQUFDLENBQUM7S0FDVjtJQUVELE1BQU0sSUFBSSxHQUEyQixFQUFFLENBQUM7SUFDeEMsSUFBSSxHQUFHLEdBQVcsQ0FBQyxFQUFFLEtBQUssR0FBVyxDQUFDLENBQUM7SUFFdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTs7UUFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsbUNBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRTtZQUNuQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ1IsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBbkJELG9CQW1CQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixLQUFLLENBQUMsSUFBYztJQUtsQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztJQUUzQixJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ04sT0FBTztZQUNMLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLENBQUM7WUFDTixLQUFLLEVBQUUsQ0FBQztTQUNULENBQUM7S0FDSDtJQUVELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWpELE9BQU87UUFDTCxHQUFHO1FBQ0gsR0FBRztRQUNILEtBQUssRUFBRSxHQUFHLEdBQUcsR0FBRztLQUNqQixDQUFDO0FBQ0osQ0FBQztBQXRCRCxzQkFzQkM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxJQUFjLEVBQUUsU0FBa0IsS0FBSztJQUM5RCxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztJQUUzQixJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ04sT0FBTyxDQUFDLENBQUM7S0FDVjtJQUVELElBQUksTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDckIsT0FBTyxDQUFDLENBQUM7S0FDVjtJQUVELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV0QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQ3JFLE1BQU07UUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUMsQ0FDTixDQUFDO0FBQ0osQ0FBQztBQWxCRCw0QkFrQkM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQWdCLGlCQUFpQixDQUFDLElBQWMsRUFBRSxTQUFrQixLQUFLO0lBQ3ZFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUZELDhDQUVDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLEdBQUcsQ0FBQyxJQUFjO0lBTWhDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzNCLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1QsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztLQUNyQjtJQUVELE1BQU0sVUFBVSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkQsSUFBSSxFQUFFLEdBQVcsQ0FBQyxFQUFFLEVBQUUsR0FBVyxDQUFDLENBQUM7SUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNmLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2QyxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO1NBQU07UUFDTCxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xEO0lBRUQsT0FBTztRQUNMLEVBQUU7UUFDRixFQUFFLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN0QixFQUFFO1FBQ0YsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFO0tBQ2YsQ0FBQztBQUNKLENBQUM7QUE3QkQsa0JBNkJDIn0=