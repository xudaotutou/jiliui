import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import scrollbar from '../index'

describe('scrollbar', () => {
  test('render', () => {
    const wrapper = mount(scrollbar as any)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('default props', () => {
    const wrapper = mount(scrollbar as any)
    expect(wrapper.props('height')).toBe('100%')
    expect(wrapper.props('maxHeight')).toBe('')
  })

  test('props', () => {
    const height = '400px'
    const wrapper = mount(scrollbar as any, {
      props: {
        height
      }
    })
    const wrap: any = wrapper.get('.jili-scrollbar_wrap')
    expect(wrap.element.style.height).toBe(height)
  })

  test('classes', () => {
    const wrapper = mount(scrollbar as any)
    const wrapX = wrapper.get('.jili-scrollbar_bar')
    const wrapY = wrapper.get('.is-vertical')
    expect(wrapX.classes()).toEqual(expect.arrayContaining(['is-horizontal', 'jili-scrollbar_bar', 'isdisplay']))
    expect(wrapY.classes()).toEqual(expect.arrayContaining(['is-vertical', 'jili-scrollbar_bar', 'isdisplay']))
  })
})
