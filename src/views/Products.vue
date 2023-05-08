<template>
<br><br><br>
  <div class="products">
    <div class="container">
      <h1 class="text-light">Products</h1>
      <div class="this-card">
        <PC_Cards/>
      </div>
      <div class="container main-card">
        <PC_CardsMain/>
      </div>
    </div>

    <div class="mobile d-lg-none my-5"> 
        <img class="brand" src="../assets/Knightware_Logo.png" alt="Knightware">
        <br><br><br>
        <button class="btn btn-primary">View All Products</button>
    </div>
  </div>
</template>

<script>
import PC_Cards from '@/components/PC_Cards.vue';
import PC_CardsMain from '@/components/PC_CardsMain.vue'

export default{
  components: {
    PC_Cards,
    PC_CardsMain,
  },
};
</script>

<style scoped>
@media (max-width: 992px){
  .this-card{
    display: none;
  }

  .main-card{
    display: none;
  }
  
  .brand{
    height: 160px;
    width: 160px;
  }
}
</style>