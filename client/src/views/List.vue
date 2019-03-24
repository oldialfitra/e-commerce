<template>
  <div class="content">
    <div class="card" style="width: 20rem;" v-for="item in product" v-bind:key="item._id">
      <card v-bind:allProduct="item"></card>
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
    this.product = ''
    axios
      .get("http://localhost:5000/products")
      .then(respond => {
        this.product = respond.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>
