import { defineStore } from 'pinia'

import { computed, ref } from 'vue'
import type { RentedUnits } from '@/models/rentedUnits'
import type { Equipment } from '@/models/equipment'

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

  const addEquipment = async (equip: Equipment) => {
    console.log(JSON.stringify(equip))
    const data = await fetch('http://localhost:3001/api/equipment/add', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(equip)
    })

    const prom = await data.json()

    console.log(prom)
  }

  return { getEquipment, getRentals, equipmentList, rentalList, addEquipment }
})
