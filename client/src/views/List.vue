<template>
  <div class="content">
    <div class="card" style="width: 20rem;">
      <img class="card-img-top" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 20rem;">
      <img class="card-img-top" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" style="width: 20rem;">
      <img class="card-img-top" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <div class="card" style="width: 20rem;">
      <img class="card-img-top" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#isi {
  /* margin-top:10%; */
}

h1 {
  size: 100px;
}

.content {
    display: flex;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  flex-flow: wrap;
  padding-top: 200px;
}
</style>


<script>
import card from "@/components/card.vue";
export default {
  name: "allProduct",
  components: {
    card
  },
  data() {
    return {
      product: ""
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then(respond => {
        // console.log(data[0])
        // this.product = respond[0].data
        // console.log(respond.data)
        this.product = respond.data;
        // console.log(this.product)
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>
