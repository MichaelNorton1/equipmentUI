import { describe, it, expect, test } from 'vitest'
import { vi } from 'vitest'

import { mount, flushPromises } from '@vue/test-utils'

import { createTestingPinia } from '@pinia/testing'

import { createRouter, createWebHistory, useRoute } from 'vue-router'
import { routes } from '@/router' // This import should point to your routes file declared above
import AddModalButton from '../AddModalButton.vue'
import EquipmentForm from '../EquipmentForm.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

describe('routing for add forms', async () => {
  test('Check if equipment form dynamically loads', async () => {
    const wrapper = mount(AddModalButton, {
      global: {
        plugins: [
          router,
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              equipment: {
                equipmentList: []
              }
            }
          })
        ]
      }
    })
    router.push('/')

    // After this line, router is ready
    await router.isReady()

    expect(wrapper.html()).toContain('Add Equipment')
    const equipmentForm = wrapper.findComponent(EquipmentForm)
    expect(equipmentForm.exists()).toBe(true)
    expect(equipmentForm.html()).toContain('serial number')
    expect(equipmentForm.html()).toContain('available')
  })
  test('Check if Rental form dynamically loads', async () => {
    const wrapper = mount(AddModalButton, {
      global: {
        plugins: [
          router,
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              equipment: {
                equipmentList: [
                  {
                    rentalID: 4,
                    customerID: 'test',
                    location: null,
                    dateStart: null,
                    dateEnd: null,
                    notes: null,
                    active: 0,
                    customerName: 'Customer 1'
                  },
                  {
                    rentalID: 5,
                    customerID: 'custom',
                    location: 'Tampa',
                    dateStart: '2024-01-06T05:00:00.000Z',
                    dateEnd: null,
                    notes: 'custom',
                    active: 1,
                    customerName: 'Customer 2'
                  },
                  {
                    rentalID: 7,
                    customerID: 'custom',
                    location: 'Tampa',
                    dateStart: '2024-01-06T05:00:00.000Z',
                    dateEnd: null,
                    notes: 'custom',
                    active: 0,
                    customerName: 'Cusomter 4'
                  }
                ]
              }
            }
          })
        ]
      }
    })

    // After this line, router is ready
    await router.isReady()

    router.push('/rentals')

    // After this line, router is ready
    await router.isReady()
    await flushPromises()

    expect(wrapper.html()).toContain('Add Rentals')
  })
})
