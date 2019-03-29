<template>
  <div id="app">
    <nav>
    <div class="menu-icon">
      <i class="fa fa-bars fa-2x"></i>
    </div>
    <div class="logo">Jual Beli</div>
    <div class="menu">
      <ul>
        <li v-if="status===true">
          <router-link to="/products">
            <a>Home</a>
          </router-link>
        </li>
        <li>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            >
          </form>
        </li>
        <li v-if="role==='admin' && status===true">
          <router-link to="/addProduct">
            <a>Add Product</a>
          </router-link>
        </li>
        <li v-if="role==='user' && status===true">
          <router-link to="/myCart">
            <a>My Cart</a>
          </router-link>
        </li>
        <li v-if="role==='user' && status===true">
          <router-link to="/transaction">
            <a>Transaction</a>
          </router-link>
        </li>
        <li v-if="status===false">
          <router-link to="/login">
            <a>Login</a>
          </router-link>
        </li>
        <li v-if="status===''">
          <router-link to="/login">
            <a>Login</a>
          </router-link>
        </li>
        <li v-if="status===true">
          <button type="button" class="btn btn-secondary" v-on:click="logout">Logout</button>
        </li>
      </ul>
    </div>
  </nav>
    <router-view @logged-in="loggedIn"></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
}
body {
  font-family: "Helvetica Neue", sans-serif;
  font-weight: lighter;
}
header {
  width: 100%;
  height: 100vh;
  background-color: honeydew;
  background-size: cover;
}
.logo {
  line-height: 60px;
  position: fixed;
  float: left;
  margin: 16px 46px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
}
nav {
  position: fixed;
  width: 100%;
  line-height: 60px;
  z-index: 100;
}
nav ul {
  line-height: 60px;
  list-style: none;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
  color: #fff;
  padding: 0;
  text-align: right;
  margin: 0;
  padding-right: 40px;
  transition: 1s;
  background-color: rosybrown;
}
nav.black ul {
  background: #000;
}
nav ul li {
  display: inline-block;
  padding: 16px 40px;
}
nav ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}
input[type="text"] {
  width: 130px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
input[type="text"]:focus {
  width: 100%;
}
.menu-icon {
  line-height: 60px;
  width: 100%;
  background: #000;
  text-align: right;
  box-sizing: border-box;
  padding: 15px 24px;
  cursor: pointer;
  color: #fff;
  display: none;
}
@media (max-width: 786px) {
  .logo {
    position: fixed;
    top: 0;
    margin-top: 16px;
  }
  nav ul {
    max-height: 0px;
    background: #000;
  }
  nav.black ul {
    background: #000;
  }
  .showing {
    max-height: 34em;
  }
  nav ul li {
    box-sizing: border-box;
    width: 100%;
    padding: 24px;
    text-align: center;
  }
  .menu-icon {
    display: block;
  }
}
</style>

<script>
export default {
  name: 'app',
  data() {
    return {
      role: '',
      status: ''
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.status = false
      this.$router.push('/login')
    },
    loggedIn(payload) {
      this.status = payload[0]
      this.role = payload[1]
    }
  },
  mounted() {
    if (localStorage.getItem('token')) {
      this.status = true,
      this.role = localStorage.getItem('role')
    }
  },
}
</script>
