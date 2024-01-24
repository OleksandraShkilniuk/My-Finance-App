

<template>
  <div class="form-container">
    <div class="d-flex align-items-baseline">
      <div class="icon-category mx-2 d-flex justify-content-center align-items-center">
        <font-awesome-icon :icon="'basket-shopping'" />
      </div>
      <p>Category Name</p>
    </div>

    <div class="d-flex justify-content-center align-items-center flex-column">
      <input type="text" class=" form-inputs my-2" placeholder="    Enter amount">

      <input type="text" class=" form-inputs my-2" placeholder="    Description (optional)">

    </div>
    <div class="d-flex justify-content-center align-items-center">
      <button type="button" class="btn btn-primary my-3 button-add">Add</button>
    </div>

  </div>

</template>

<script>
export default {
  name: "TransationForm"
}
</script>

<style scoped>


</style>