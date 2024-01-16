import { defineStore } from 'pinia'
import type { Equipment } from '../src/models/equipment'
import { ref } from 'vue'
import type { RentedUnits } from '@/models/rentedUnits'

export const useEquipmentStore = defineStore('equipment', () => {
  const getEquipment = async (): Promise<Equipment[]> => {
    const data = await fetch('http://localhost:3001/api/equipment')

    const values = await data.json()

    const final: Equipment[] = values.result

    return final
  }

  const getRentals = async () => {
    const data = await fetch('http://localhost:3001/api/rentals')

    const values = await data.json()

    const final: RentedUnits = values.result

    return final
  }

  return { getEquipment, getRentals }
})
