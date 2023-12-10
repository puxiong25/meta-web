<template>
  <div id="app">
    <template>
      <div class="header">
        <img class="logo" src="./assets/pp.png" alt="logo" />
        <h1 class="title">前端异常监控与定位</h1>
      </div>
      <nav>
        <!-- <router-link to="/">Home</router-link> | -->
        <!-- <router-link to="/about">About</router-link> -->
      </nav>
      <router-view />
    </template>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 10px;
  /* background-image: url(./assets/bubble.png); */
  .header {
    width: 100%;
    padding: 10px 0px;
    height: 60px;
    text-align: left;
    background-color: #ffffff;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
    .logo {
      width: 107px;
      height: 81px;
    }
    .title {
      margin-left: 10px;
      font-weight: bold;
    }
  }
}

nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  margin: 0;
}
</style>
