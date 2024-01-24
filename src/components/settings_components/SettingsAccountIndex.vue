

<template>

  <div>

    <header>
      <div>
        <h4>Settings</h4>
      </div>
      <div class="d-flex py-3">
        <div class="user-icon">
          <div>M</div>
        </div>
        <div class="mx-3">
          <p class="user-name">John Doe</p>
          <p>john.doe@gmail.com</p>
        </div>
      </div>
    </header>

    <section>
      
      <div class="d-flex justify-content-between px-4 my-3">

        <div class="d-flex">
          <div><font-awesome-icon :icon="'user'" /></div>
          <div class="function-name">Manage account</div>

        </div>
        <a href="#">
          <font-awesome-icon :icon="'chevron-right'" />
        </a>
        
      </div>

    </section>


    <section>

      <div class="d-flex justify-content-between px-4 my-3">

        <div class="d-flex">
          <div><font-awesome-icon :icon="'shapes'" /></div>
          <div class="function-name">Manage categories</div>

        </div>
        <a href="#">
          <font-awesome-icon :icon="'chevron-right'" />
        </a>

      </div>

    </section>


    <section>

      <div class="d-flex justify-content-between px-4 my-3">

        <div class="d-flex">
          <a href="#"><font-awesome-icon :icon="'arrow-right-from-bracket'" /></a>
          <div class="function-name">Logout</div>

        </div>


      </div>

    </section>

  </div>

</template>


<script>

export default {
  name: "SettingsAccountIndex",
}
</script>

<style scoped>


</style>