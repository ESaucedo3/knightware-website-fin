<template>
   <div class="container">
        <div class="row mt-4">
            <div class="col-md-3">
                <div class="card bg-dark text-light">
                    <img src="../assets/SSD.jpg" class="pc-cards card-img-top" alt="Storage">
                    <div class="card-body">
                        <h5 class="card-title">Storage</h5>
                        <p class="card-text">SSDs are faster and more reliable because they have no moving parts and use flash memory to store data.</p>
                        <button class="btn btn-primary" disabled>Coming Soon...</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card bg-dark text-light">
                    <img src="../assets/Case.jpg" class="pc-cards card-img-top" alt="Cases">
                    <div class="card-body">
                        <h5 class="card-title">Cases</h5>
                        <p class="card-text">The case houses all the components of the computer and provides protection from dust and other contaminants.</p>
                        <button class="btn btn-primary" disabled>Coming Soon...</button>
                    </div>
                </div>
            </div>
            
            <div class="col-md-3">
                <div class="card bg-dark text-light">
                    <img src="../assets/Motherboard.jpg" class="pc-cards card-img-top" alt="Motherboard">
                    <div class="card-body">
                        <h5 class="card-title">Motherboard</h5>
                        <p class="card-text">The motherboard connects all the components of a computer and enables communication between them.</p>
                        <button class="btn btn-primary" disabled>Coming Soon...</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card bg-dark text-light">
                    <img src="../assets/PSU.jpg" class="pc-cards card-img-top" alt="PSU">
                    <div class="card-body">
                        <h5 class="card-title">PSU</h5>
                        <p class="card-text">The PSU is responsible for supplying power to all the components in the computer.</p>
                        <button class="btn btn-primary" disabled>Coming Soon...</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'PC_Cards',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    position: relative;
    z-index: 1;
}
.pc-cards{
    height: 150px;
}
</style>