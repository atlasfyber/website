---
title: '$arrayFind'
description: '$arrayFind знайде перший елемент у масиві, який відповідає запиту, і поверне його.'
id: arrayFind
---

`$arrayFind` перевірить перший елемент у масиві, який відповідає запиту, і поверне його.

## Використання

```php
$arrayFind[name;query;queryType?;separator?]
```

## Параметри

| Поле        | Тип   | Опис                                                                  | Обов'язковий |
| ----------- | ----- | --------------------------------------------------------------------- |:------------:|
| назва       | рядок | Назва масиву.                                                         |     так      |
| запит       | рядок | Елемент, який ми будемо шукати для кожного елемента всередині масиву. |     так      |
| тип?        | рядок | Оператор порівняння.                                                  |      ні      |
| розділювач? | рядок | Розділювач.                                                           |      ні      |

## Оператор порівняння

* `==` - Кожен елемент, який відповідає запиту.
* `!=` - Кожен елемент, який не відповідає запиту.
* `>`  - Всі предмети "ліворуч" - не враховуючи себе.
* `<` - Всі елементи "праворуч" від знайденого елемента, виключаючи його самого.
* `>=` - Всі елементи "зліва" від знайденого елемента, включаючи його самого.
* `<=` - Всі елементи "праворуч" від знайденого елемента, включаючи його самого.

## Приклад(и)

```javascript
bot.command({
    name: "array-find",
    code: `
  $arrayFind[array;akarui;==;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // It will return "akarui" as it matches the query.
});
```