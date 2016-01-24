# Format Float to Brazilian Currency
This is a plugin to transform a number like this:
```
123123.12
```
To a masked string like this:
```
R$ 1.231.23,12
```

## Install

With npm:
```
npm install --save format-currency-to-br
```

With bower:
```
bower install --save format-currency-to-br
```

Or you can just [download a ZIP](https://github.com/brunoti/format-currency-to-br/archive/master.zip).

## Setup

###### Node or Browserify
``` js
var formatCurrencyToBr = require('format-currency.to-br');
```

###### Browser (Global)
``` html
<script src="format-currency.to-br.js"></script>
```

## Usage
``` js
var price = 2839039.38;

console.log(formatCurrencytoBr(price)); // Will return: 'R$ 2.839.039,38'
```

## License

MIT
