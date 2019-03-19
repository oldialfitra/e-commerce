<template>
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="" alt="Card image cap">
            <div class="card-block">
                <h5 class="card-title">{{abc._id}}</h5>
                <p class="card-text">{{abc.name}}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
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
    props: ['abc'],
    data() {
        return {
            data: ''
        }
    },
}
</script>
