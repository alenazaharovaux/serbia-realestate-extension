export function parsePrice(text){
  const raw = (text||'').trim()
  const low = raw.toLowerCase()
  let cur = null
  if (low.includes('€') || /\beur\b|евр/.test(low)) cur='EUR'
  else if (/\brsd\b|дин|din/.test(low)) cur='RSD'
  const digits = raw.replace(/[^\d.,\s]/g,'').replace(/[.,\s]/g,'')
  const val = digits.length ? parseInt(digits,10) : NaN
  return { priceValue: Number.isFinite(val) ? val : null, priceCurrency: cur, priceRaw: raw }
}
