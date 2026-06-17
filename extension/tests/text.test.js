import { describe, it, expect } from 'vitest'
import { toLatin, normalizePlace } from '../src/lib/text.js'
describe('text', () => {
  it('cyrillic→latin', () => { expect(toLatin('Нови Сад')).toBe('Novi Sad') })
  it('normalizePlace равняет регистр/диакритику/алфавит', () => {
    expect(normalizePlace('Нови  Сад')).toBe('novi sad')
    expect(normalizePlace('Vršac')).toBe('vrsac')
    expect(normalizePlace('ВРШАЦ')).toBe('vrsac')
  })
})
