<template>
    <footer class="bg-dark text-white text-center mt-auto position-absolute bottom-0 w-100">
        <div class="container">
            <p class="lead">Copyright &copy; Knightware</p>
            <div class="d-flex justify-content-center">
                <a href="https://www.youtube.com/" target="_blank"><img src="../assets/YTLogo.png" height="60px" width="60px" alt="Youtube"></a>
                <a href="https://twitter.com/" target="_blank"><img src="../assets/TwitterLogo.png" height="60px" width="60px" alt="Twitter"></a>
            </div>
        </div>
    </footer>
</template>
    
<script>
export default {
    name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    position: relative;
    z-index: 1;
}
</style>