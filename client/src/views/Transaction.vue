<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Total</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in transactions" v-bind:key="item._id">
          <th scope="row">{{index}}</th>
          <td>{{item._id}}</td>
          <td>{{item.price}}</td>
          <td>{{item.createdAt}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>



<script>
export default {
  data() {
    return {
      transactions: []
    };
  },
  mounted() {
    let userId = localStorage.getItem("id");
    axios
      .get(`http://localhost:5000/carts/transaction/${userId}`, {
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(response => {
        this.transactions = response.data;
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
