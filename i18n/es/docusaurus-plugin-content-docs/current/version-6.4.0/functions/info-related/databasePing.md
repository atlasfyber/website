---
title: '$databasePing'
description: '$databasePing will return your database ping.'
id: databasePing
---

`$databasePing` will return your database ping.

## Modo de uso

```php
$databasePing
```

## Ejemplo(s)

This will return your database ping:

```javascript
bot.command({
    name: 'databasePing',
    code: `
  My database ping is: $databasePing MS!
  `
});
```