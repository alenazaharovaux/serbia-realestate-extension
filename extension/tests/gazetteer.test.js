import { describe, it, expect } from 'vitest'
import { lookupCity } from '../src/lib/gazetteer.js'
import { normalizePlace } from '../src/lib/text.js'

describe('gazetteer', () => {
  it('Белград', () => { expect(lookupCity(normalizePlace('Београд'))).toMatchObject({lat:expect.any(Number),lon:expect.any(Number)}) })
  it('Нови Сад латиницей', () => { expect(lookupCity(normalizePlace('Novi Sad'))).toBeTruthy() })
  it('неизвестное', () => { expect(lookupCity('atlantis')).toBeNull() })
})
