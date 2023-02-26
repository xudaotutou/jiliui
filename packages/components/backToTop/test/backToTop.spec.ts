import btt from '../index'
import { mount } from '@vue/test-utils'


describe('back to top', () => {
  it('render', () => {
    const wrapper = mount(btt as any)
    expect(
      wrapper.exists()
    ).toBeTruthy()
  })
  it('default top', () => {
    const wrapper = mount(btt as any)
    expect(wrapper.props('top')).toBe(90)
  })
  it('props', () => {
    const top = 10
    const wrapper = mount(btt as any, {
      props: {
        top
      }
    })
    const inner = wrapper.get('a')
    expect(inner.element.style.top).toBe(`${top}vh`)
  })
  it('classes', () => {
    const wrapper = mount(btt as any)
    const inner = wrapper.get('a')
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['pointer-events-none', 'absolute', 'h-full'])
    )
    expect(inner.classes()).toEqual(
      expect.arrayContaining(['pointer-events-auto', 'sticky', 'mt-[100vh]', 'inline-block'])
    )
  })
})
