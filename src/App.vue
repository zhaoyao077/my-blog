<template>
  <nav>
    <img src="../public/img/logo.jpg" alt="logo">    
    <router-link to="/">简要介绍</router-link> |
    <!-- <router-link to="/options">Sentiment Analysis Options</router-link> | -->
    <router-link to="/modeAnalyze">模式分析</router-link> |
    <router-link to="/colAnalyze">按列分析</router-link>
  </nav>
  <router-view/>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
  font-size : 20px
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
