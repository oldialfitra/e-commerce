<template>
<div class="table">
  <table class="table">
  <tbody>
    <div v-for="(item,index) in carts" v-bind:key="item._id">
      <cart v-bind:allCart="item" v-bind:index="index" @pay-cart="payCart" @delete-cart=deleteCart></cart>
    </div>
    <tr>
      <td>Total</td>
      <td>{{total}}</td>
      <td></td>
    </tr>
  </tbody>
  <div>
    <button type="submit" class="btn btn-success" value="Submit" v-on:click="payCart">Submit</button>
  </div>
</table>
</div>
</template>

<style scoped>
#isi {
  /* margin-top:10%; */
}

h1 {
  size: 100px;
}

.table {
  padding-top: 200px;
}
</style>


<script>
import cart from "@/components/Cart.vue";
export default {
  name: "allCarts",
  components: {
    cart
  },
  data() {
    return {
      carts: "",
      total: 0
    };
  },
  methods: {
    payCart() {
      console.log('masuk ke delete')
      let userId = localStorage.getItem('id')
      axios
        .delete(`http://localhost:5000/carts/${userId}`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          this.createTransaction(this.total)
          Swal.fire({
            type: "success",
            title: "Thank you",
            showConfirmButton: false,
            timer: 1500
          });
          this.carts= ''
          console.log(response);
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
    createTransaction(total) {
      axios.post(`http://localhost:5000/carts/transaction`, {
        userId: localStorage.getItem('id'),
        price: total
      }, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then((newTransaction) => {
          this.total = 0
          console.log(newTransaction)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart(payload) {
      axios.delete(`http://localhost:5000/carts/delete/${payload[0]}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((response) => {
        Swal.fire({
            type: "success",
            title: "Delete Success",
            showConfirmButton: false,
            timer: 1500
          });
      })
      this.carts.splice(index, 1)
      .catch(err => {
        Swal.fire({
            title: err.response.data.message,
            animation: false,
            customClass: {
              popup: "animated tada"
            }
          });
      })
    }
  },
  mounted() {
    console.log("masuk ke get");
    this.carts = "";
    let userId = localStorage.getItem("id");
    axios
      .get(`http://localhost:5000/carts/${userId}`, {
        headers: {
          idUser: localStorage.getItem("id"),
          token: localStorage.getItem("token")
        }
      })
      .then(respond => {
        console.log("sukses get");
        console.log(respond);
        this.carts = respond.data;
        respond.data.forEach(e => {
          this.total += e.productId.price;
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>
