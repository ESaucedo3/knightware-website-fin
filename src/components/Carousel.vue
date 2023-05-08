<template>
    <div class="container mt-1">
    <div class="row d-none d-lg-block">
        <div class="col-md-12">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
                <div class="carousel-inner border border-3 border-primary">
                <div class="carousel-item active">
                    <img src="../assets/PC_Hardware.jpg"  class="d-block w-100" height="510" alt="View 1">
                    <div class="carousel-caption bg-dark">
                        We have some of the most highest quality components.
                    </div>
                </div>
                    <div class="carousel-item">
                        <img src="../assets/PC_Hardware_2.jpg" class="d-block w-100" height="510" alt="View 2">
                        <div class="carousel-caption bg-dark">
                            Your journey to create your dream PC begins here.
                        </div>
                    </div>
                <div class="carousel-item">
                    <img src="../assets/PC_Hardware_3.jpg"  class="d-block w-100" height="510" alt="View 3">
                    <div class="carousel-caption bg-dark">
                        You will be satisfied 
                    </div>
                </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    </div>
    </div>
</template>
    
<script>
export default {
    name: 'Carousel',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    position: relative;
    z-index: 1;
}
</style>