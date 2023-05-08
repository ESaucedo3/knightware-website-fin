<template>
   <div class="container">
        <div class="row mt-4">
            <div class="col-md-4">
                <div class="card bg-dark text-light">
                    <img src="../assets/CPU.jpg" class="pc-cards card-img-top" alt="CPU">
                    <div class="card-body">
                        <h5 class="card-title">CPU</h5>
                        <p class="card-text">The CPU is the "brain" of the computer, responsible for processing instructions and executing tasks.</p>
                        <button class="btn btn-primary" disabled>Coming Soon...</button>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card bg-dark text-light">
                    <img src="../assets/GPU.jpg" class="pc-cards card-img-top" alt="GPU">
                    <div class="card-body">
                        <h5 class="card-title">GPU</h5>
                        <p class="card-text">The GPU is specialized in rendering graphics, is essential for gaming, video editing, and other graphically intensive tasks.</p>
                        <button class="btn btn-primary" disabled>Coming Soon...</button>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card bg-dark text-light">
                    <img src="../assets/RAM.jpg" class="pc-cards card-img-top" alt="RAM">
                    <div class="card-body">
                        <h5 class="card-title">RAM</h5>
                        <p class="card-text">RAM is where the computer stores data temporarily for quick access by the CPU. More RAM can help improve system performance.</p>
                        <button class="btn btn-primary" disabled>Coming Soon...</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'PC_CardsMain',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    position: relative;
    z-index: 1;
}
.pc-cards{
    height: 130px;
}
</style>