<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top py-1">
      <div class="container">
              
          <a href="#" class="navbar-brand d-flex"><img src="@/assets/Knightware_Logo.png" alt="KnightwareLogo" width="40" height="33">Knightware</a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navmenu">
              <ul class="navbar-nav ms-auto text-center">
                  <li class="nav-item">
                      <router-link to="/" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/about" class="nav-link">About</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/products" class="nav-link">Products</router-link>
                  </li>
              </ul>
          </div>
      </div>
   </nav>
</template>

<script>

export default {
  name: "Navigation",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
