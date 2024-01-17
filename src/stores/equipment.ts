import { defineStore } from 'pinia'

import { computed, ref } from 'vue'
import type { RentedUnits } from '@/models/rentedUnits'

export const useEquipmentStore = defineStore('equipment', () => {
  const equipmentList = ref(null)

  const getEquipment = async () => {
    const data = await fetch('http://localhost:3001/api/equipment')

    const values = await data.json()

    equipmentList.value = values.result
  }

  const rentalList = ref(null)
  const getRentals = async () => {
    const data = await fetch('http://localhost:3001/api/rentals')

    const values = await data.json()

    rentalList.value = values.result
  }

  return { getEquipment, getRentals, equipmentList, rentalList }
})
