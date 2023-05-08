<template>
  <Navigation/>
  <BackgroundVid/>
  <router-view/>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import BackgroundVid from '@/components/BackgroundVid.vue'; 

export default{
  name: "App",
  components: {
    Navigation,
    BackgroundVid,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



.Vid{
  z-index: -999;
}
</style>
