<template>
  <div id="login">
    <h3 class="text-center text-white pt-5">Login form</h3>
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <form id="login-form" class="form" action method="post" v-on:submit.prevent="login">
              <h3 class="text-center text-info">
                <span>Login</span>
              </h3>
              <div class="form-group">
                <label for="email" class="text-info">
                  <span>Email</span>:
                </label>
                <br>
                <input v-model="email" type="email" name="email" id="email" class="form-control">
              </div>
              <div class="form-group">
                <label for="password" class="text-info">
                  <span>Password</span>:
                </label>
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
              <router-link to="/register">
                <a>Need new account?</a>
              </router-link>
            </div>
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
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9c9c9c;
  background-color: #eaeaea;
}

#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login
  .container
  #login-row
  #login-column
  #login-box
  #login-form
  #register-link {
  margin-top: -85px;
}
</style>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      token: ""
    };
  },
  methods: {
    login() {
      console.log("masuk login client");
      axios
        .post("http://localhost:5000/users/login", {
          email: this.email,
          password: this.password
        })
        .then(({ data }) => {
          console.log("masuk login client new");
          console.log(data);
          localStorage.setItem("token", data);
          this.token = data;
          this.email = "";
          this.password = "";
          this.$router.push("/products");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
