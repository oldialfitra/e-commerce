<template>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="" alt="Card image cap">
            <div class="card-block">
                <h5 class="card-title">{{allProduct.name}}</h5>
                <p class="card-text">{{allProduct.detail}}</p>
                <p class="card-text">{{allProduct.price}}</p>
                <a href="#" class="btn btn-primary">Detail</a>
                <a href="#" class="btn btn-primary">Buy</a>
            </div>
    </div>

</template>

<style>
.card-block {
    border: solid 2px;
}
.card {
    margin: 5px;
}
</style>
<script>
export default {
    props: ['allProduct'],
    data() {
        return {
            data: ''
        }
    },
}
</script>
