import { defineStore } from 'pinia'

import { computed, ref } from 'vue'
import type { RentedUnits } from '@/models/rentedUnits'

export const useEquipmentStore = defineStore('equipment', () => {
  const equipmentList = ref(null)

  const checkList = computed(() => {
    return equipmentList.value ? equipmentList : []
  })

  const getEquipment = async () => {
    const data = await fetch('http://localhost:3001/api/equipment')

    const values = await data.json()

    equipmentList.value = values.result
  }

  const getRentals = async () => {
    const data = await fetch('http://localhost:3001/api/rentals')

    const values = await data.json()

    const final: RentedUnits = values.result

    return final
  }

  return { getEquipment, getRentals, equipmentList, checkList }
})
