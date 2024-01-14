import { defineStore } from 'pinia'
import type { Equipment } from '../src/models/equipment'
import { ref } from 'vue'

export const useEquipmentStore = defineStore('equipment', () => {
  const getEquipment = async (): Promise<Equipment[]> => {
    const data = await fetch('http://localhost:3001/api/equipment')

    const values = await data.json()

    const final: Equipment[] = values.result

    return final
  }

  return { getEquipment }
})
