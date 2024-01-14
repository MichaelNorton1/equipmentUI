<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
const router = useRouter()
</script>

<template>
  <div id="nav">
    <div v-for="(route, index) in router.options.routes" :key="index">
      <ul>
        <router-link :to="route.path">
          <li>{{ route.name }}</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<style>
ul {
  list-style: none;
}
</style>
