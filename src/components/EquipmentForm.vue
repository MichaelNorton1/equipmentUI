<script setup lang="ts">

const submit = (e) =>
{

    e.preventDefault()
    const form = document.getElementById("equipmentForm")

    const data = new FormData(form)
    for (const [key, value] of data)
    {
        console.log(`${key}: ${value}\n`);
    }
}

</script>

<template>
    <div>
        <form id="equipmentForm">
            <div class="form-group">
                <label for="exampleInputEmail1">serial number</label>
                <input name="serial_number" class="form-control" id="" placeholder="Serial Number">

            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">serial number</label>
                <input name="type" class="form-control" id="" placeholder="type">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">serial number</label>

                <select id="" name="available" form="equipmentForm">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>

                </select>

            </div>

            <button @click="submit" type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>



<style lang="scss" scoped></style>