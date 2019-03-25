<template>
  <div id="product">
    <h3 class="text-center text-white pt-5">Add Product</h3>
    <div class="container">
      <div id="product-row" class="row justify-content-center align-items-center">
        <div id="product-column" class="col-md-6">
          <div id="product-box" class="col-md-12">
            <form
              id="product-form"
              class="form"
              action
              method="post"
              v-on:submit.prevent="addProduct"
            >
              <h3 class="text-center text-info">
                <span>Product</span>
              </h3>
              <div class="form-group">
                <label for="name" class="text-info">
                  <span>Name</span>:
                </label>
                <br>
                <input v-model="name" type="text" name="name" id="name" class="form-control">
              </div>
              <div class="form-group">
                <label for="price" class="text-info">
                  <span>Price</span>:
                </label>
                <br>
                <input v-model="price" type="number" name="price" id="price" class="form-control">
              </div>
              <div class="form-group">
                <label for="stock" class="text-info">
                  <span>Stock</span>
                </label>
                <br>
                <input v-model="stock" type="number" name="stock" id="stock" class="form-control">
              </div>
              <div class="input-group mb-3">
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="file" ref="file">
                  <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
                </div>
              </div>
              <div class="form-group">
                <br>
                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* body {
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 100vh;
} */
#product .container #product-row #product-column #product-box {
  margin-top: 120px;
  max-width: 600px;
  border: 1px solid #9c9c9c;
  background-color: #eaeaea;
}

#product .container #product-row #product-column #product-box #product-form {
  padding: 20px;
}
#product
  .container
  #product-row
  #product-column
  #product-box
  #product-form
  #register-link {
  margin-top: -85px;
}
</style>

<script>
export default {
  name: "product",
  data() {
    return {
      name: "",
      price: 0,
      stock: 0,
      image: ""
    };
  },
  methods: {
    addProduct() {
      console.log(this.$refs.file.files[0]);
      let uploaded = this.$refs.file.files[0];
      let data = new FormData();
      data.append("name", this.name);
      data.append("price", this.price);
      data.append("stock", this.stock);
      data.append("image", uploaded);
      console.log("masuk product client");
      axios
        .post("http://localhost:5000/products", data, {
          headers: {
            token: localStorage.getItem("token"),
            role: localStorage.getItem("role"),
            "Content-Type": "multipart/form-data"
          }
        })
        .then(({ data }) => {
          Swal.fire({
            type: "success",
            title: "Data has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          this.name = "";
          this.price = 0;
          this.stock = 0;
          this.$router.push("/products");
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
    }
  }
};
</script>
