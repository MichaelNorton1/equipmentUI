<script setup lang="ts">
import type { Equipment } from '@/models/equipment';
import { useEquipmentStore } from "../stores/equipment"
import { computed, inject } from 'vue';

const store = useEquipmentStore()

const submit = (e: Event) =>
{

    e.preventDefault()
    const form = document.getElementById("equipmentForm")

    const data = new FormData(form)

    /*     */

    let obj = {}


    data.forEach(function (value, key)
    {
        obj[key] = value;
    });


    let final = obj as Equipment


    store.addEquipment(final)

    form.reset()

    store.getEquipment()




}

const props = defineProps(["update"])
const check = computed(() =>
{
    if (props.update)
    {
        return "Hey"
    }

    return " hmm"

})


const machine = inject("machine")

</script>

<template>
    <div>
        <form id="equipmentForm">
            {{ check }}
            <div class="form-group">
                <label for="serialNumber">serial number</label>
                <input :value="machine?.machine.serial_num" name="serial_num" class="form-control" id=""
                    placeholder="Serial Number">

            </div>
            <div class="form-group">
                <label for="EquipmentType">Equipment Type</label>
                <input name="type" class="form-control" id="" placeholder="type">
            </div>
            <div class="form-group">
                <label for="monthlyValue">monthly value</label>
                <input name="monthly_value" class="form-control" id="" placeholder="type">
            </div>
            <div class="form-group">
                <label for="monthlyValue">yard</label>
                <input name="yard" class="form-control" id="" placeholder="location">
            </div>
            <div class="form-group">
                <label for="available">available</label>

                <select id="" name="available" form="equipmentForm">
                    <option value="1">Yes</option>
                    <option value="0">No</option>

                </select>

            </div>

            <button @click="submit" type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>



<style lang="scss" scoped></style>