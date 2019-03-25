<template>
  <div class="card" style="width: 20rem;">
    <img class="card-img-top" v-bind:src="allProduct.image" alt="Card image cap">
    <div class="card-block">
      <h5 class="card-title">{{allProduct.name}}</h5>
      <p class="card-text">{{allProduct.price}}</p>
      <p class="card-text">{{allProduct.stock}}</p>
      <div v-if="role==='admin'">
        <button class="btn btn-primary" v-on:click.prevent="deleteProduct(allProduct._id, index)">Delete</button>
      </div>
      <div v-if="role==='user'">
         <button class="btn btn-primary" v-on:click.prevent="buyProduct(allProduct._id)">Buy</button>
      </div>
      <div v-if="role==='admin'">
        <button
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
          v-on:click.prevent="getOneProduct(allProduct._id)"
        >Update</button>
      </div>
    </div>
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body">
            <div class="add">
              <h2>Add Task</h2>
              <form v-on:submit.prevent="updateProduct(allProduct._id)">
                <input v-model="name" placeholder="Name" class="form-control" type="text">
                <br>
                <input v-model="price" placeholder="Price" class="form-control" type="number">
                <br>
                <input v-model="stock" placeholder="Stock" class="form-control" type="number">
                <br>
                <br>
                <button type="submit" class="btn btn-success" value="Submit" v-on:click="closeModal">Submit</button>
              </form>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
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
  props: ["allProduct", "index", "products"],
  data() {
    return {
      userId: "",
      productId: "",
      name: "",
      price: "",
      stock: "",
      role: '',
    };
  },
  methods: {
    buyProduct(idProduct) {
      console.log(localStorage.getItem("id"), "ini user");
      console.log(idProduct, "ini product");
      axios
        .post(
          "http://localhost:5000/carts",
          {
            userId: localStorage.getItem("id"),
            productId: idProduct
          },
          {
            headers: { token: localStorage.getItem("token") }
          }
        )
        .then(newCart => {
          Swal.fire({
            type: "success",
            title: "Thank you",
            showConfirmButton: false,
            timer: 1500
          });
          this.$router.push('/myCart')
        })
        .catch(err => {
          Swal.fire({
            title: err.response.data.message,
            animation: false,
            customClass: {
              popup: "animated tada"
            }
          });
          console.log(err);
        });
    },
    deleteProduct(idProduct, index) {
      this.$emit('delete-product', [idProduct, index])
    },
    getOneProduct(idProduct) {
      axios
        .get(`http://localhost:5000/products/${idProduct}`, {
          headers: {
            token: localStorage.getItem("token"),
            role: localStorage.getItem("role")
          }
        })
        .then(response => {
          console.log(response.data);
          this.name = response.data.name;
          this.price = response.data.price;
          this.stock = response.data.stock;
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateProduct(idProduct) {
      this.$emit('update-product', [idProduct, this.name, this.price, this.stock])
    },
    closeModal() {
      $("#myModal").modal("toggle");
    }
  },
  mounted() {
      this.role = ''
      this.role = localStorage.getItem('role')
  },
};
</script>
