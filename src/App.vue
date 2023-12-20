<template>
  <div class="page">
    <HeaderPage />
    <router-view />
  </div>
</template>

<script setup>
import HeaderPage from '@/components/HeaderPage.vue'
</script>

<style>
a {
  text-decoration: none;
  color: #515151;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: 100;
}

html {
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

input {
  border: none;
  cursor: pointer;
  outline: none;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.btn {
  border: none;
  background: none;
  cursor: pointer;
}

.flex {
  display: flex;
}

.container {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1100px;
}

.main {
  padding: 50px 0;
}

#app {
  font-family: 'Open Sans', sans-serif, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 100;
}
</style>
