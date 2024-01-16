import { describe, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useEquipmentStore } from './Equipment'
import { beforeEach } from 'vitest'
import type { Equipment } from '../src/models/equipment'

describe('Equipment Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('it returns an array of equipment', async () => {
    const equip = useEquipmentStore()

    const final = await equip.getEquipment()

    expect(final).toHaveProperty('length')
  })
})
