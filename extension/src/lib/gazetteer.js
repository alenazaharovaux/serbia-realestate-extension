/**
 * Локальный справочник городов Сербии.
 * Ключи — нормализованная форма (normalizePlace), значения — {lat, lon}.
 * Координаты — центр города, десятичные градусы (WGS-84).
 */
export const CITIES = {
  'beograd':              { lat: 44.7866, lon: 20.4489 },
  'novi sad':             { lat: 45.2671, lon: 19.8335 },
  'nis':                  { lat: 43.3209, lon: 21.8958 },
  'kragujevac':           { lat: 44.0165, lon: 20.9114 },
  'subotica':             { lat: 46.1000, lon: 19.6667 },
  'zrenjanin':            { lat: 45.3833, lon: 20.3833 },
  'pancevo':              { lat: 44.8706, lon: 20.6406 },
  'cacak':                { lat: 43.8914, lon: 20.3497 },
  'kraljevo':             { lat: 43.7236, lon: 20.6892 },
  'novi pazar':           { lat: 43.1367, lon: 20.5122 },
  'leskovac':             { lat: 42.9981, lon: 21.9461 },
  'smederevo':            { lat: 44.6639, lon: 20.9283 },
  'valjevo':              { lat: 44.2722, lon: 19.8872 },
  'vranje':               { lat: 42.5500, lon: 21.9000 },
  'sabac':                { lat: 44.7531, lon: 19.6958 },
  'uzice':                { lat: 43.8575, lon: 19.8483 },
  'sombor':               { lat: 45.7764, lon: 19.1133 },
  'pozarevac':            { lat: 44.6206, lon: 21.1861 },
  'pirot':                { lat: 43.1533, lon: 22.5864 },
  'zajecar':              { lat: 43.9039, lon: 22.2739 },
  'kikinda':              { lat: 45.8281, lon: 20.4650 },
  'sremska mitrovica':    { lat: 44.9722, lon: 19.6131 },
  'jagodina':             { lat: 43.9767, lon: 21.2606 },
  'vrsac':                { lat: 45.1167, lon: 21.3000 },
  'bor':                  { lat: 44.0769, lon: 22.0997 },
  'prokuplje':            { lat: 43.2333, lon: 21.5833 },
  'loznica':              { lat: 44.5333, lon: 19.2167 },
  'ruma':                 { lat: 45.0069, lon: 19.8228 },
  'backa palanka':        { lat: 45.2500, lon: 19.3833 },
  'indjija':              { lat: 45.0467, lon: 20.0817 },
  'vrbas':                { lat: 45.5667, lon: 19.6333 },
  'arandjelovac':         { lat: 44.3042, lon: 20.5614 },
  'gornji milanovac':     { lat: 44.0236, lon: 20.4603 },
  'paracin':              { lat: 43.8681, lon: 21.4111 },
  'cuprija':              { lat: 43.9333, lon: 21.3667 },
  'apatin':               { lat: 45.6700, lon: 18.9836 },
  'negotin':              { lat: 44.2272, lon: 22.5219 },
  'knjazevac':            { lat: 43.5667, lon: 22.2667 },
  'stara pazova':         { lat: 44.9833, lon: 20.1667 },
  'backa topola':         { lat: 45.8167, lon: 19.6333 },
  'krusevac':             { lat: 43.5797, lon: 21.3242 },
  'smederevska palanka':  { lat: 44.3667, lon: 20.9583 },
}

export const CITY_KEYS = Object.keys(CITIES)

/**
 * @param {string} norm — нормализованное название (результат normalizePlace)
 * @returns {{lat:number,lon:number}|null}
 */
export function lookupCity(norm) {
  return CITIES[norm] || null
}
