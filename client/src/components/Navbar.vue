<template>
    <nav>
       <div class="menu-icon">
          <i class="fa fa-bars fa-2x"></i>
       </div>
       <div class="logo">
          LOGO
       </div>
       <div class="menu">
          <ul>
            <li>
              <router-link to="/">
                <a>Home</a>
              </router-link>
            </li>
             <li>
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              </form>
             </li>
             <li>
               <router-link to="/products">
                <a>My Cart</a>
              </router-link>
             </li>
             <li>
              <router-link to="/login">
                <a>Login</a>
              </router-link>
             </li>
          </ul>
       </div>
    </nav>
</template>

<style scoped>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
}
body {
    font-family: "Helvetica Neue",sans-serif;
    font-weight: lighter;
}
header {
    width: 100%;
    height: 100vh;
    background-color:honeydew;
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
    padding: 16px 40px;;
}
nav ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
}
input[type=text] {
  width: 130px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
input[type=text]:focus {
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
@media(max-width: 786px) {
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