<script  async setup lang="ts">
import type { Equipment } from "../models/equipment";
import { ref } from 'vue'



import { useEquipmentStore } from "../../stores/equipment"
const store = useEquipmentStore()

const machines = ref()

const data = store.getEquipment()
data.then((res) => { machines.value = res })






const equipmentData: Equipment = {
  serial_num: "40VMxxxx",
  type: "",
  available: false,
  monthly_value: "",
  rentalID: "",
  yard: "",
};
</script>

<template>
  <div v-for="machine in machines">{{ machine.serial_num }}</div>
  <div>{{ equipmentData.serial_num }}</div>
</template>

<style></style>
