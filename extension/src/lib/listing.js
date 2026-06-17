import { parsePrice } from './price.js'
/**
 * @param {object} raw  {url,title,priceText,type,locationText,areaM2,photoUrl}
 * @param {string} source
 * @param {function} now  () => number (для тестируемости; по умолчанию Date.now)
 */
export function makeListing(raw, source, now = Date.now){
  const id = (raw.url || '').split('?')[0]
  const { priceValue, priceCurrency, priceRaw } = parsePrice(raw.priceText)
  const type = ['house','land','apartment'].includes(raw.type) ? raw.type : 'other'
  return {
    id, url: raw.url, source, title: raw.title || '',
    type, priceValue, priceCurrency, priceRaw,
    areaM2: raw.areaM2 ?? null, locationText: raw.locationText || '',
    lat: null, lon: null, geoPrecision: null,
    photoUrl: raw.photoUrl ?? null, collectedAt: now()
  }
}
