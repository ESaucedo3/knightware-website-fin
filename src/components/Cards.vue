<template>
   <div class="conatiner">
        <div class="row mt-4">
            <div class="col-md-4">
                <div class="card bg-dark text-light">
                    <img src="https://picsum.photos/id/6/450/200" class="card-img-top" alt="Ocean1">
                    <div class="card-body">
                        <h5 class="card-title">Cutting Edge Hardware</h5>
                        <p class="card-text">Our hardware will give the edge in performance and quality</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card bg-dark text-light">
                    <img src="https://picsum.photos/id/119/450/200" class="card-img-top" alt="Ocean2">
                    <div class="card-body">
                        <h5 class="card-title">Reliable Peripherals</h5>
                        <p class="card-text">Our peripherals will give the satisfaction</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card bg-dark text-light">
                    <img src="https://picsum.photos/id/60/450/200" class="card-img-top" alt="Ocean3">
                    <div class="card-body">
                        <h5 class="card-title">Accessories</h5>
                        <p class="card-text">You will also enjoy these accessories</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'Cards',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    position: relative;
    z-index: 1;
}
</style>