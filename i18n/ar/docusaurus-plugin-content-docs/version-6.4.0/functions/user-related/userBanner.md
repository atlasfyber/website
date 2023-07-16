---
title: '$userBanner'
description: '$userBanner will return the profile banner of a specific user.'
id: userBanner
---

`$userBanner` will return the profile banner of a specific user.

## الاستخدام

```php
$userBanner[userID?;size?;dynamic?;format?]
```

## البارامترات

| Field    | النوع          | الديسكبربشين                                    | مطلوب |
| -------- | -------------- | ----------------------------------------------- |:-----:|
| userID?  | Integer        | اي دي المستخدم.                                 | false |
| size?    | string, number | The size of the image.                          | false |
| dynamic? | boolean        | 1. **true** (default) <br /> 2. **false** | false |
| format?  | string         | The format of the returned image.               | false |

## مثال

This will return your profile banner:

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $userBanner[$authorID;4096;true;webp]
  `
});
```