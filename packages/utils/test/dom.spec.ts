import { toggleActive } from '../dom'

describe('toggleActive', () => {
  it('2 len', () => {
    const active = 'active'
    const classes = ['', active]
    const toggle = toggleActive(classes)(active)
    toggle(0)
    expect(classes[0]).toBe(active)
    expect(classes[1]).toBe('')
    toggle(1)
    expect(classes[1]).toBe(active)
    expect(classes[0]).toBe('')
  })
  it('3 len', () => {
    const active = 'active'
    const classes = ['', active, '']
    const toggle = toggleActive(classes)(active)
    toggle(0)
    expect(classes[0]).toBe(active)
    expect(classes[1]).toBe('')
    expect(classes[2]).toBe('')
    toggle(1)
    expect(classes[1]).toBe(active)
    expect(classes[0]).toBe('')
    expect(classes[2]).toBe('')
    toggle(2)
    expect(classes[2]).toBe(active)
    expect(classes[1]).toBe('')
    expect(classes[0]).toBe('')
  })
})
