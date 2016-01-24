function formatCurrencyToBr(cash) {
  cash = parseFloat(cash);

  if (isNaN(cash)) {
    return 'R$ 0,00';
  }

  cash = cash.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
  })
  cash = cash.split('');
  cash.splice(2, 0, ' ');

  return cash.join('');
}

if(typeof define === 'function' && define.amd) {
  define(function() { return formatCurrencyToBr;  });

} else if(typeof module !== 'undefined' && module.exports) {
  module.exports = formatCurrencyToBr;

} else {
  exports.formatCurrencyToBr = formatCurrencyToBr;

}
