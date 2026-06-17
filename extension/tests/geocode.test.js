import { describe, it, expect, vi } from 'vitest'
import { geocode } from '../src/lib/geocode.js'
describe('geocode', () => {
  it('город из справочника без сети', async () => {
    const fetchFn = vi.fn()
    const r = await geocode('Novi Sad', { cache:new Map(), fetchFn })
    expect(r).toMatchObject({ geoPrecision:'city' }); expect(fetchFn).not.toHaveBeenCalled()
  })
  it('незнакомое место: сеть один раз, потом кэш', async () => {
    const cache = new Map()
    const fetchFn = vi.fn().mockResolvedValue([{lat:'44.0',lon:'21.0'}])
    const r1 = await geocode('Selo Foobar', { cache, fetchFn })
    const r2 = await geocode('Selo Foobar', { cache, fetchFn })
    expect(r1).toMatchObject({lat:44.0,lon:21.0}); expect(fetchFn).toHaveBeenCalledTimes(1)
    expect(r2).toEqual(r1)
  })
  it('пустой текст → null', async () => {
    expect(await geocode('', { cache:new Map(), fetchFn: vi.fn() })).toBeNull()
  })
})
