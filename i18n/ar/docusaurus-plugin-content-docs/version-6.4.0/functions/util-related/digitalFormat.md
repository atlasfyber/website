---
title: '$digitalFormat'
description: '$digitalFormat will return a digital formatted time converted from ms.'
id: digitalFormat
---

`$digitalFormat` will convert ms to digital formatted, readable time.

## الاستخدام

```php
$digitalFormat[ms]
```

## البارامترات

| Field | النوع  | الديسكبربشين                             | مطلوب |
| ----- | ------ | ---------------------------------------- |:-----:|
| ms    | number | Time in miliseconds you wish to convert. | true  |

## مثال

This will return `00:04:00` as `240000ms` are four minutes:

```javascript
bot.command({
    name: 'digitalFormat',
    code: `
  $digitalFormat[240000]
  `
});
```