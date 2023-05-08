<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-7">
                <img class="brand" src="../assets/Knightware_Logo.png" alt="Knightware">
            </div>

            <div class="col-md-5 my-1 text-light bg-dark border border-primary p-1">
                <h1 class="font-weight-light">About Us</h1>
                <p class="mt-4">
                    Knightware is a leading provider of high-quality PC components and accessories for gamers, enthusiasts, and professionals alike. With a commitment to excellence, we strive to offer the latest and most innovative products to meet the needs of our customers. Our team of experienced professionals works tirelessly to provide exceptional customer service and support, ensuring that our customers receive the best possible experience. Trust us to provide the components you need to build the PC of your dreams.
                </p>
                <button type="button" class="btn btn-primary">Read More</button>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'AboutContent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    position: relative;
    z-index: 1;
}

.brand{
    height: 250px;
    width: 250px;
}
</style>