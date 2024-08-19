import {
  minArray,
  maxArray,
  mean,
  median,
  mode,
  range,
  variance,
  standardDeviation,
  iqr,
  histogram,
} from '../index';

describe('minArray', () => {
  it('should return the minimum value of an array of numbers', () => {
    expect(minArray([1, 2, 3])).toBe(1);
    expect(minArray([3, 2, 1])).toBe(1);
    expect(minArray([2, 3, 1])).toBe(1);
  });

  it('it should work with a huge array', () => {
    const data = Array.from({ length: 1000000 }, (_, i) => i === 1234 ? 5 : 6);

    expect(minArray(data)).toBe(5);
  });
});

describe('maxArray', () => {
  it('should return the maximum value from an array of numbers', () => {
    expect(maxArray([1, 2, 3])).toBe(3);
    expect(maxArray([3, 2, 1])).toBe(3);
    expect(maxArray([2, 3, 1])).toBe(3);
  });

  it('should work with a huge array', () => {
    const data = Array.from({ length: 1000000 }, (_, i) => i === 1234 ? 6 : 5);

    expect(maxArray(data)).toBe(6);
  });
});

describe('mean', () => {
  it('should return 0 when given an empty dataset', () => {
    expect(mean([])).toBe(0);
  });

  it('should return the only number when given a dataset containing a single number', () => {
    expect(mean([0])).toBe(0);
    expect(mean([4])).toBe(4);
    expect(mean([3.14])).toBeCloseTo(3.14);
  });

  it('should return the mean of a dataset when given multiple numbers', () => {
    expect(mean([1, 2, 3])).toBe(2);
    expect(mean([13, 18, 13, 14, 13, 16, 14, 21, 13])).toBe(15);
    expect(mean([13, 18, 13, 14, 13, 16, 14, 21])).toBeCloseTo(15.25);
  });
});

describe('median', () => {
  it('should return 0 when given an empty dataset', () => {
    expect(median([])).toBe(0);
  });

  it('should return the only number when given a dataset containing a single number', () => {
    expect(median([0])).toBe(0);
    expect(median([4])).toBe(4);
    expect(median([3.14])).toBeCloseTo(3.14);
  });

  it('should return the median of a dataset when given multiple numbers', () => {
    expect(median([1, 2, 3])).toBe(2);
    expect(median([13, 18, 13, 14, 13, 16, 14, 21, 13])).toBe(14);
    expect(median([13, 18, 13, 15, 13, 16, 14, 21])).toBeCloseTo(14.5);
  });
});

describe('mode', () => {
  it('should return 0 when given an empty dataset', () => {
    expect(mode([])).toBe(0);
  });

  it('should return the only number when given a dataset containing a single number', () => {
    expect(mode([0])).toBe(0);
    expect(mode([4])).toBe(4);
    expect(mode([3.14])).toBeCloseTo(3.14);
  });

  it('should return the first mode of a dataset when some items occur with equal frequency', () => {
    expect(mode([1, 2, 3])).toBe(1);
    expect(mode([1, 2, 2, 3, 3])).toBe(2);
  });

  it('should return the mode of a dataset when given multiple numbers', () => {
    expect(mode([13, 18, 13, 14, 13, 16, 14, 21, 13])).toBe(13);
    expect(mode([13, 18, 15, 15, 13, 15, 14, 21, 12, 16, 15, 15, 18])).toBe(15);
  });
});

describe('range', () => {
  it('should return a range of 0 when given an empty dataset', () => {
    expect(range([])).toStrictEqual({
      min: 0,
      max: 0,
      range: 0,
    });
  });

  it('should return a range of 0 when given a dataset containing a single number', () => {
    expect(range([0])).toStrictEqual({
      min: 0,
      max: 0,
      range: 0,
    });
    expect(range([4])).toStrictEqual({
      min: 4,
      max: 4,
      range: 0,
    });
    expect(range([3.14])).toStrictEqual({
      min: 3.14,
      max: 3.14,
      range: 0,
    });
  });

  it('should return the range of a dataset when given multiple numbers', () => {
    expect(range([1, 2, 3])).toStrictEqual({
      min: 1,
      max: 3,
      range: 2,
    });
    expect(range([13, 18, 13, 14, 13, 16, 14, 21, 13])).toStrictEqual({
      min: 13,
      max: 21,
      range: 8,
    });
  });
});

describe('variance', () => {
  it('should return a variance of 0 when given an empty dataset', () => {
    expect(variance([])).toBe(0);
  });

  it('should return a variance of 0 when given a dataset containing a single value', () => {
    expect(variance([1])).toBe(0);
  });

  it('should return a sample variance of 0 when given a dataset containing a single value', () => {
    expect(variance([1], true)).toBe(0);
  });

  it('should return the variance of a dataset', () => {
    expect(variance([206, 76, -224, 36, -94])).toBe(21704);
  });

  it('should return the sample variance of a dataset', () => {
    expect(variance([206, 76, -224, 36, -94], true)).toBe(27130);
  });
});

describe('standardDeviation', () => {
  it('should return a standard deviation of 0 when given an empty dataset', () => {
    expect(standardDeviation([])).toBe(0);
  });

  it('should return a standard deviation of 0 when given a dataset containing a single value', () => {
    expect(standardDeviation([1])).toBe(0);
  });

  it('should return the standard deviation of a dataset', () => {
    expect(standardDeviation([206, 76, -224, 36, -94])).toBeCloseTo(147, 0);
  });
});

describe('iqr', () => {
  it('should return an iqr of 0 when given a dataset containing fewer than 4 numbers', () => {
    expect(iqr([])).toStrictEqual({
      range: 0,
    });
    expect(iqr([1, 2, 3])).toStrictEqual({
      range: 0,
    });
  });

  it('should return the iqr of a dataset', () => {
    expect(iqr([77, 64, 72, 76, 57, 48, 81, 52, 85, 88])).toStrictEqual({
      q1: 57,
      q2: 74,
      q3: 81,
      range: 24,
    });
  });
});

describe('histogram', () => {
  it('should return an empty list of buckets when the dataset is empty', () => {
    expect(histogram([])).toStrictEqual([]);
  });

  it('should return a list of buckets containing datapoint frequencies', () => {
    expect(histogram([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([
      { min: 1, max: 2, frequency: 1 },
      { min: 2, max: 3, frequency: 1 },
      { min: 3, max: 4, frequency: 1 },
      { min: 4, max: 5, frequency: 1 },
      { min: 5, max: 6, frequency: 1 },
      { min: 6, max: 7, frequency: 1 },
      { min: 7, max: 8, frequency: 1 },
      { min: 8, max: 9, frequency: 1 },
      { min: 9, max: 10, frequency: 1 },
      { min: 10, max: 11, frequency: 1 },
    ]);

    expect(histogram([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5])).toStrictEqual([
      { min: 1, max: 2, frequency: 2 },
      { min: 2, max: 3, frequency: 2 },
      { min: 3, max: 4, frequency: 2 },
      { min: 4, max: 5, frequency: 2 },
      { min: 5, max: 6, frequency: 2 },
      { min: 6, max: 7, frequency: 1 },
      { min: 7, max: 8, frequency: 1 },
      { min: 8, max: 9, frequency: 1 },
      { min: 9, max: 10, frequency: 1 },
      { min: 10, max: 11, frequency: 1 },
    ]);

    expect(histogram([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual([
      { min: 1, max: 2, frequency: 10 },
    ]);

    expect(histogram([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2])).toStrictEqual([
      { min: 1, max: 2, frequency: 10 },
      { min: 2, max: 3, frequency: 5 },
    ]);

    expect(histogram([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5], 3)).toStrictEqual([
      { min: 1, max: 4, frequency: 6 },
      { min: 4, max: 7, frequency: 5 },
      { min: 7, max: 10, frequency: 3 },
      { min: 10, max: 13, frequency: 1 },
    ]);
  });
});
