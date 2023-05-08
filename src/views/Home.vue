<template>
<br><br><br>
  <div class="home">
    <div class="container">
      <h1 class="text-light">Welcome</h1>
      <Carousel/>
    </div>

    <div class="container text-light d-flex justify-content-center align-items-center d-lg-none my-1">
        <img class="brand" src="../assets/Knightware_Logo.png" alt="Knightware">
    </div>
    <p class="bg-dark border border-secondary text-light w-50 m-auto d-lg-none my-1">Here at Knightware find what it is that you need to achieve and create the PC of your dreams!</p>
    <div class="imgs">

    </div>
    <Footer/>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Footer from '@/components/Footer.vue';

export default{
  components: {
    Carousel,
    Footer,
  },
};
</script>

<style scoped>
.brand{
  height: 130px;
  width: 130px;
}

</style>

