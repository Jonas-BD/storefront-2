export const PriceToDkk = value => {
    return new Intl.NumberFormat('da-DK', {
        style: 'currency',
        currency: 'DKK',
        currencyDisplay: 'code'
    }).format(value)
}