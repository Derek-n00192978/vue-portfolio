<template>
  <div id="app">
    <!-- Need to find the proper path to the Logo -->
    <!-- <img alt="Vue logo" src=".src/assets/logo.png">    -->
    
    <PersonGreeter person-name="Derek"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/pages/projects/vue-greeter/HelloWorld.vue'
import PersonGreeter from '@/pages/projects/vue-greeter/PersonGreeter.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    PersonGreeter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
