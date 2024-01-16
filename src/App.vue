<script  setup lang="ts">
import { RouterView } from "vue-router";
import Nav from './components/Nav.vue'
import type { Equipment } from "../models/equipment";
import { onMounted, provide, ref } from 'vue'
import { useEquipmentStore } from "./stores/equipment"

import type { RentedUnits } from "./models/rentedUnits";






onMounted(() =>
{
  console.log("APP")
})



</script>

<template>
  <header>

    <Nav></Nav>
  </header>
  <RouterView />
</template>

<style scoped></style>
