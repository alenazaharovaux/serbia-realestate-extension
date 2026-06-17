import { normalizePlace } from './text.js'
import { lookupCity } from './gazetteer.js'
const NOMINATIM='https://nominatim.openstreetmap.org/search'
async function defaultFetch(q){
  const url=`${NOMINATIM}?format=json&limit=1&countrycodes=rs&q=${encodeURIComponent(q)}`
  const res=await fetch(url,{headers:{'User-Agent':'SerbiaRealEstateExt/0.1 (personal use)'}})
  return res.ok ? res.json() : []
}
export async function geocode(locationText,{cache,fetchFn=defaultFetch}={}){
  const norm=normalizePlace(locationText)
  if(!norm) return null
  const city=lookupCity(norm); if(city) return {...city, geoPrecision:'city'}
  if(cache && cache.has(norm)) return cache.get(norm)
  const looksExact=/\d|,/.test(locationText)
  const arr=await fetchFn(locationText+', Serbia')
  let out=null
  if(arr && arr.length){ out={lat:parseFloat(arr[0].lat),lon:parseFloat(arr[0].lon),geoPrecision:looksExact?'exact':'city'} }
  if(cache) cache.set(norm,out)
  return out
}
