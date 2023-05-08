<template>
<br><br><br>
  <div class="container">
    <AboutContent/>
    <div class="thiscard">
      <Cards/>
    </div>
  </div>
</template>

<script>
import AboutContent from '@/components/AboutContent.vue';
import Cards from '@/components/Cards.vue';
export default{
  components: {
    AboutContent,
    Cards,
  },
};
</script>

<style scoped>
@media (max-width: 992px){
  .thiscard{
    display: none;
  }
}
</style>