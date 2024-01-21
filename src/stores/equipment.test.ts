import { describe, it, expect, test } from 'vitest'
import { vi } from 'vitest'

import Equipment from '@/components/Equipment.vue'

import { mount } from '@vue/test-utils'

import { createTestingPinia } from '@pinia/testing'
import { useEquipmentStore } from './equipment'

describe('Equipment Page', () => {
  test('Shows cards with Equipment', () => {
    const wrapper = mount(Equipment, {
      global: {
        plugins: [
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
    const store = useEquipmentStore()

    expect(store.equipmentList).toHaveLength(3)
  })
})
