# Stats

Basic stats functions

## Installation

```
npm install @basementuniverse/stats
```

## Usage

Node:

```javascript
const {
  mean,
  median,
  mode,
  range,
  variance,
  standardDeviation,
  iqr,
  outliers,
  histogram,
} = require('@basementuniverse/stats');
```

Typescript:

```typescript
import {
  mean,
  median,
  mode,
  range,
  variance,
  standardDeviation,
  iqr,
  outliers,
  histogram,
} from '@basementuniverse/stats';
```

## Docs

## Functions

<dl>
<dt><a href="#minArray">minArray(a)</a> ⇒ <code>number</code></dt>
<dd><p>Safe version of <code>Math.min</code></p>
<p>Native <code>Math.min</code> throws:</p>
<pre><code>`Uncaught RangeError: Maximum call stack size exceeded`
</code></pre>
<p>when passing in a huge number of arguments (&gt;~100k).</p>
</dd>
<dt><a href="#maxArray">maxArray(a)</a> ⇒ <code>number</code></dt>
<dd><p>Safe version of <code>Math.max</code></p>
<p>Native <code>Math.max</code> throws:</p>
<pre><code>`Uncaught RangeError: Maximum call stack size exceeded`
</code></pre>
<p>when passing in a huge number of arguments (&gt;~100k).</p>
</dd>
<dt><a href="#mean">mean(data)</a> ⇒ <code>number</code></dt>
<dd><p>Find the mean of a list of numbers</p>
</dd>
<dt><a href="#median">median(data)</a> ⇒ <code>number</code></dt>
<dd><p>Find the median of a list of numbers</p>
</dd>
<dt><a href="#mode">mode(data)</a> ⇒ <code>number</code></dt>
<dd><p>Find the mode of a list of numbers</p>
</dd>
<dt><a href="#range">range(data)</a> ⇒ <code>object</code></dt>
<dd><p>Find the range of a list of numbers</p>
</dd>
<dt><a href="#variance">variance(data, sample)</a> ⇒ <code>number</code></dt>
<dd><p>Calculate the variance of a list of numbers</p>
</dd>
<dt><a href="#standardDeviation">standardDeviation(data, sample)</a> ⇒ <code>number</code></dt>
<dd><p>Calculate the standard deviation of a list of numbers</p>
</dd>
<dt><a href="#iqr">iqr(data)</a> ⇒ <code>object</code></dt>
<dd><p>Calculate the (exclusive) interquartile range of a list of numbers</p>
</dd>
<dt><a href="#outliers">outliers(data)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd><p>Find outliers in a list of numbers using the IQR method</p>
</dd>
<dt><a href="#histogram">histogram(data, bucketWidth)</a> ⇒ <code>Array.&lt;Bucket&gt;</code></dt>
<dd><p>Generate a histogram by splitting data into buckets of the specified size
and counting the frequency of items in each bucket</p>
<p>Within each bucket, min is inclusive and max is exclusive</p>
</dd>
</dl>

<a name="minArray"></a>

## minArray(a) ⇒ <code>number</code>
Safe version of `Math.min`

Native `Math.min` throws:
```
`Uncaught RangeError: Maximum call stack size exceeded`
```
when passing in a huge number of arguments (>~100k).

**Kind**: global function  
**Returns**: <code>number</code> - The minimum number from the array  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array.&lt;number&gt;</code> | An array of numbers |

<a name="maxArray"></a>

## maxArray(a) ⇒ <code>number</code>
Safe version of `Math.max`

Native `Math.max` throws:
```
`Uncaught RangeError: Maximum call stack size exceeded`
```
when passing in a huge number of arguments (>~100k).

**Kind**: global function  
**Returns**: <code>number</code> - The maximum number from the array  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array.&lt;number&gt;</code> | An array of numbers |

<a name="mean"></a>

## mean(data) ⇒ <code>number</code>
Find the mean of a list of numbers

**Kind**: global function  
**Returns**: <code>number</code> - The mean of a list of numbers  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;number&gt;</code> | An array of numbers |

<a name="median"></a>

## median(data) ⇒ <code>number</code>
Find the median of a list of numbers

**Kind**: global function  
**Returns**: <code>number</code> - The median of a list of numbers  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;number&gt;</code> | An array of numbers |

<a name="mode"></a>

## mode(data) ⇒ <code>number</code>
Find the mode of a list of numbers

**Kind**: global function  
**Returns**: <code>number</code> - The mode of a list of numbers  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;number&gt;</code> | An array of numbers |

<a name="range"></a>

## range(data) ⇒ <code>object</code>
Find the range of a list of numbers

**Kind**: global function  
**Returns**: <code>object</code> - An object containing the min, max and range  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;number&gt;</code> | An array of numbers |

**Example**  
Returned format:
```
{
  min: 1,
  max: 5,
  range: 4
}
```
<a name="variance"></a>

## variance(data, sample) ⇒ <code>number</code>
Calculate the variance of a list of numbers

**Kind**: global function  
**Returns**: <code>number</code> - The variance of a list of numbers  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Array.&lt;number&gt;</code> |  | An array of numbers |
| sample | <code>boolean</code> | <code>false</code> | True if the dataset is a sample |

<a name="standardDeviation"></a>

## standardDeviation(data, sample) ⇒ <code>number</code>
Calculate the standard deviation of a list of numbers

**Kind**: global function  
**Returns**: <code>number</code> - The standard deviation of a list of numbers  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Array.&lt;number&gt;</code> |  | An array of numbers |
| sample | <code>boolean</code> | <code>false</code> | True if the dataset is a sample |

<a name="iqr"></a>

## iqr(data) ⇒ <code>object</code>
Calculate the (exclusive) interquartile range of a list of numbers

**Kind**: global function  
**Returns**: <code>object</code> - An object containing the Q1, Q2 and Q3 medians and interquartile range  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;number&gt;</code> | An array of numbers |

**Example**  
Returned format:
```
{
  q1: 1,
  q2: 3,
  q3: 5,
  range: 4
}
```
<a name="outliers"></a>

## outliers(data) ⇒ <code>Array.&lt;number&gt;</code>
Find outliers in a list of numbers using the IQR method

**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - An array of indexes for the outliers  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;number&gt;</code> | An array of numbers |

<a name="histogram"></a>

## histogram(data, bucketWidth) ⇒ <code>Array.&lt;Bucket&gt;</code>
Generate a histogram by splitting data into buckets of the specified size
and counting the frequency of items in each bucket

Within each bucket, min is inclusive and max is exclusive

**Kind**: global function  
**Returns**: <code>Array.&lt;Bucket&gt;</code> - An array of buckets  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Array.&lt;number&gt;</code> |  | An array of numbers |
| bucketWidth | <code>number</code> | <code>1</code> | The width of each bucket |

**Example**  
Returned format:
```
[
  {
    min: 1,
    max: 3,
    frequency: 4
  }
]
```
