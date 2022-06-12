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
} from '@basementuniverse/stats';
```

## Docs

## Functions

<dl>
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
</dl>

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
**Returns**: <code>object</code> - An object containing the Q1 median, Q3 median and interquartile range  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;number&gt;</code> | An array of numbers |

