<script  async setup lang="ts">
import type { Equipment } from "../models/equipment";
import { ref } from 'vue'



import { useEquipmentStore } from "../../stores/equipment"
const store = useEquipmentStore()

const machines = ref()

const data = store.getEquipment()
data.then((res) => { machines.value = res })






</script>

<template>
  <div class="container">
    <div class="" :key="machine.rentalID" v-for="machine in machines">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ machine.serial_num }}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">{{ machine.type }}</h6>
          <p class="card-text">{{ machine.monthly_value }}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
