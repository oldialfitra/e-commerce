<template>
  <div class="content">
    <div class="card" style="width: 20rem;" v-for="(item,index) in product" v-bind:key="item._id">
      <card
        :allProduct="item"
        :index="index"
        :products="product"
        @delete-product="deleteProduct"
        @update-product="updateProduct"
      ></card>
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
import card from "@/components/Card.vue";
export default {
  name: "allProduct",
  components: {
    card
  },
  data() {
    return {
      product: []
    };
  },
  methods: {
    deleteProduct(payload) {
      console.log(payload);
      axios
        .delete(`http://localhost:5000/products/${payload[0]}`, {
          headers: {
            token: localStorage.getItem("token"),
            role: localStorage.getItem("role")
          }
        })
        .then(deletedProduct => {
          Swal.fire({
            type: "success",
            title: "Data has been deleted",
            showConfirmButton: false,
            timer: 1500
          });
          console.log("deleted");
          console.log(this.product);
          this.product.splice(payload[1], 1);
        })
        .catch(err => {
          console.log(err);
          Swal.fire({
            title: err.response.data.message,
            animation: false,
            customClass: {
              popup: "animated tada"
            }
          });
        });
    },
    updateProduct(payload) {
      axios
        .put(
          `http://localhost:5000/products/${payload[0]}`,
          {
            name: payload[1],
            price: payload[2],
            stock: payload[3]
          },
          {
            headers: {
              token: localStorage.getItem("token"),
              role: localStorage.getItem("role")
            }
          }
        )
        .then(updatedProduct => {
          Swal.fire({
            type: "success",
            title: "Data has been updated",
            showConfirmButton: false,
            timer: 1500
          });
          console.log("update success");
          console.log(updatedProduct);
          this.$router.push("/products");
          // $("#button").submit(function(e) {
          //   e.preventDefault();
          //   // Coding
          //   $("#myModal").modal("hide");
          //   return false;
          // });
          this.getAllProduct();
        })
        .catch(err => {
          Swal.fire({
            title: err.response.data.message,
            animation: false,
            customClass: {
              popup: "animated tada"
            }
          });
          console.log(err)
        })
    },
    getAllProduct() {
      this.product = [];
      axios
        .get("http://localhost:5000/products", {
          headers: { token: localStorage.getItem("token") }
        })
        .then(respond => {
          this.product = respond.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.product = [];
    axios
      .get("http://localhost:5000/products", {
        headers: { token: localStorage.getItem("token") }
      })
      .then(respond => {
        this.product = respond.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>
