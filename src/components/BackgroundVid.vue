<template>
    <div class="Vid">
    <vue-responsive-video-background-player
        :src="require(`@/assets/Circuit.mp4`)"

        :sources="[
            {src: require(`@/assets/Circuit.mp4`), res: 900, autoplay: true}, 
            {src: require(`@/assets/Circuit.mp4`), res: 638, autoplay: true}
        ]"
        style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; min-height: 100vh; width: 100%;"
        overlay="linear-gradient(180deg,#2a4ae430,#fb949e6b)"
        />
    </div>   
</template>

<script>
import VueResponsiveVideoBackgroundPlayer from 'vue-responsive-video-background-player';

export default {
    name: "BackgroundVid",
    components: {
        VueResponsiveVideoBackgroundPlayer,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.Vid{
    position: relative;
    z-index: -999;
}
</style>
