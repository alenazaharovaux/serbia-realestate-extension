import { describe, it, expect } from 'vitest'
import { makeListing } from '../src/lib/listing.js'
it('собирает запись и id из url', () => {
  const l = makeListing({url:'https://x/oglas/1?utm=a',title:'Kuća',priceText:'€ 50.000',type:'house',locationText:'Vršac',areaM2:80,photoUrl:'p'},'nekretnine',()=>123)
  expect(l).toMatchObject({id:'https://x/oglas/1',source:'nekretnine',priceValue:50000,priceCurrency:'EUR',type:'house',collectedAt:123})
})
