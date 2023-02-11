import { forceInRange, forceSmall, forceLarge, idSetup } from '../math'

describe('forceSmall', () => {
  it('must be >=', () => {
    expect(forceSmall(10)(100)).toBe(10)
    expect(forceSmall(10)(11)).toBe(10)
    expect(forceSmall(10)(10)).toBe(10)
  })
  it('allow >', () => {
    expect(forceSmall(10)(9)).toBe(9)
  })
})
describe('forceInRange', () => {
  it('must in range', () => {
    expect(forceInRange(10)(15)(100)).toBe(15)
    expect(forceInRange(10)(15)(0)).toBe(10)
    expect(forceInRange(10)(15)(10)).toBe(10)
    expect(forceInRange(10)(15)(15)).toBe(15)
    expect(forceInRange(10)(15)(13)).toBe(13)
  })
})
describe('forceLarge', () => {
  it('test', () => {
    it('must be <=', () => {
      expect(forceLarge(100)(99)).toBe(100)
      expect(forceLarge(100)(11)).toBe(100)
      expect(forceLarge(100)(100)).toBe(100)
    })
    it('allow <', () => {
      expect(forceLarge(100)(123)).toBe(100)
    })
  })
})
describe('idsetup', () => {
  it('different init', () => {
    expect(idSetup(1)()[0]).not.toBe(idSetup(2)()[0])
    expect(idSetup(1)()[0]).not.toBe(idSetup(2)()[0])
    expect(idSetup(1)()[0]).not.toBe(idSetup(2)()[0])
  })
  it('same init, different output', () => {
    const getId = idSetup(10)
    expect(getId()[0]).not.toBe(getId()[0])
    expect(getId()[0]).not.toBe(getId()[0])
    expect(getId()[0]).not.toBe(getId()[0])
  })
})
