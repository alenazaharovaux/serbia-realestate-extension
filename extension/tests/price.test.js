import { describe, it, expect } from 'vitest'
import { parsePrice } from '../src/lib/price.js'
describe('parsePrice', () => {
  it('евро', () => { expect(parsePrice('€ 49.500')).toMatchObject({priceValue:49500,priceCurrency:'EUR'}) })
  it('евро словом', () => { expect(parsePrice('120000 EUR')).toMatchObject({priceValue:120000,priceCurrency:'EUR'}) })
  it('динары', () => { expect(parsePrice('5.900.000 RSD')).toMatchObject({priceValue:5900000,priceCurrency:'RSD'}) })
  it('динары словом дин', () => { expect(parsePrice('3 500 000 дин')).toMatchObject({priceValue:3500000,priceCurrency:'RSD'}) })
  it('нет цены', () => { expect(parsePrice('Dogovor')).toMatchObject({priceValue:null,priceCurrency:null}) })
  it('raw сохраняется', () => { expect(parsePrice('€ 49.500').priceRaw).toBe('€ 49.500') })
})
