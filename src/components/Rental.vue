<script async  setup lang="ts">
import type { RentedUnits } from '@/models/rentedUnits';
import { inject, onMounted, ref } from 'vue';
import { useEquipmentStore } from "../stores/equipment"

const store = useEquipmentStore()


const rentals = ref()
console.log(rentals)

onMounted(() =>
{

    const data2 = store.getRentals()

    data2.then((res: RentedUnits) => { rentals.value = res })
})



</script>

<template>
    <div class="container">
        <div class="" :key="rental.rentalID" v-for="rental in rentals">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ rental.rentalID }}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{{ rental.location }}</h6>
                    <p class="card-text">{{ rental.customerName }}</p>

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
