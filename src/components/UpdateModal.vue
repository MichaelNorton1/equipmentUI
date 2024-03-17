<script setup lang="ts">


import { useRoute } from 'vue-router';
import EquipmentForm from './EquipmentForm.vue';
import { provide } from 'vue';


const machine = defineProps(["machine"])
provide("machine", machine)



</script>

<template>
    <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#' + machine.machine.serial_num">
        update Equipment
    </button>

    <!-- Modal -->
    <div class="modal fade" :id="machine.machine.serial_num" tabindex="-1" role="dialog"
        aria-labelledby="updateModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="updateModalLabel">Update Equipment</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <EquipmentForm :update="true"></EquipmentForm>

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
