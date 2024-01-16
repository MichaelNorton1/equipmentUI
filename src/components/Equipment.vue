<script async  setup lang="ts">
import type { Equipment } from '@/models/equipment';
import { ref, onMounted } from 'vue';
import { useEquipmentStore } from "../stores/equipment"

const store = useEquipmentStore()

const machines = ref()








onMounted(() =>
{
  const data = store.getEquipment()
  data.then((res: Equipment[]) => { machines.value = res })
})






</script>

<template>
  <div class="container">
    <div class="" :key="machine.serial_num" v-for="machine in machines">
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
