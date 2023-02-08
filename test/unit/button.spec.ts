import Base from '../../packages/components/buttons/src/JButtonBase.vue'
import { mount } from '@vue/test-utils'

describe('button', () => {
  it('ok', () => {
    expect(mount(Base).exists()).toBeTruthy()
  })
})
