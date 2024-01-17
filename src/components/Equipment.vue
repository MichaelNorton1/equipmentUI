<script async  setup lang="ts">
import type { Equipment } from '@/models/equipment';
import { ref, onMounted, computed } from 'vue';
import { useEquipmentStore } from "../stores/equipment"

const store = useEquipmentStore()


const equipment = computed(() => { return store.equipmentList ? store.equipmentList : [] })
onMounted(() =>
{
  store.getEquipment()

})






</script>

<template>
  <div class="container">
    <div class="" :key="machine.serial_num" v-for="machine in equipment">
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
