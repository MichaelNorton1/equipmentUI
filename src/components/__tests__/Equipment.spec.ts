import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Equipment from '../Equipment.vue'
import { setActivePinia, createPinia } from 'pinia'
import { beforeEach } from 'vitest'

describe('Equipments', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })
  it('renders properly', () => {
    const wrapper = mount(Equipment)
    expect(wrapper.classes()).toContain('container')
  })
})
