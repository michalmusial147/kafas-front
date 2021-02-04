const polishFormatter = Intl.NumberFormat('pl', {
  style: 'currency',
  minimumIntegerDigits: 1,
  currency: 'PLN',
  currencyDisplay: 'symbol'
});

export function formatCurrency(price: number): string {
  return polishFormatter.format(price);
}
