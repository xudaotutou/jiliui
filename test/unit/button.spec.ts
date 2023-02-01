import Base from '../../packages/components/buttons'
import { mount } from '@vue/test-utils'

describe('button', () => {
  it('ok', () => {
    expect(mount(Base).exists()).toBeTruthy()
  })
})
