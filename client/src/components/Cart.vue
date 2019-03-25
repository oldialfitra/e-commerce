<template>
<div class="content">
  <tr>
      <th scope="row">{{index}}</th>
      <td>{{allCart.productId.name}}</td>
      <td>{{allCart.productId.price}}</td>
      <td><button v-on:click=deleteCart(allCart._id,index)>Delete</button></td>
    </tr>
</div>
</template>

<style scoped>
td {
    width: 100%;
  }
</style>
<script>
export default {
  props: ["allCart", "index"],
  methods: {
    deleteCart(id, index) {
      this.$emit('delete-cart', [id, index])
    }
  },
};
</script>
