<template>
  <div id="register">
    <h3 class="text-center text-white pt-5">Register form</h3>
    <div class="container">
      <div id="register-row" class="row justify-content-center align-items-center">
        <div id="register-column" class="col-md-6">
          <div id="register-box" class="col-md-12">
            <form id="register-form" class="form" action method="post" v-on:submit.prevent="register">
              <h3 class="text-center text-info">Register</h3>
              <div class="form-group">
                <label for="username" class="text-info">Username:</label>
                <br>
                <input
                  v-model="email"
                  type="email"
                  name="username"
                  id="username"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label for="password" class="text-info">Password:</label>
                <br>
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <br>
                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
              </div>
            </form>
            <div id="register-link" class="text-right">
              <router-link to="/login">
                <a>Already have account?</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#register .container #register-row #register-column #register-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9c9c9c;
  background-color: #eaeaea;
}
#register
  .container
  #register-row
  #register-column
  #register-box
  #register-form {
  padding: 20px;
}
#register
  .container
  #register-row
  #register-column
  #register-box
  #register-form
  #register-link {
  margin-top: -85px;
}
</style>

<script>
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      // console.log('masuk post')
      axios
        .post("http://localhost:5000/users/register", {
          email: this.email,
          password: this.password,
          role: 'user'
        })
        .then(({ data }) => {
          Swal.fire({
            type: "success",
            title: "Register success",
            showConfirmButton: false,
            timer: 1500
          });
          this.email = "";
          this.password = "";
          this.$router.push("/login");
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
    }
  }
};
</script>
