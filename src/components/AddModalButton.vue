<script async  setup lang="ts">


import { useRoute } from 'vue-router';
import EquipmentForm from './EquipmentForm.vue';



const route = useRoute()

console.log(route.name)

</script>

<template>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Add {{ $route.name }}
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div v-if="$route.name === 'Equipment'">
                        <EquipmentForm></EquipmentForm>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

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
