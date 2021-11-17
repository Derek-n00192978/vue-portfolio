<template>    
      <div id="app">                  
          <Header />         
          <NavBar />        
          <router-view />  
          <Footer />  
          </div>      
  </template>

<script>    
    import Header from './components/Header.vue'
    import NavBar from './components/NavBar.vue'    
    import Footer from './components/Footer.vue'
    export default {
      name: 'App',
      components: {        
        Header,
        NavBar,          
        Footer    
      }
    }
</script>
<!--21/10/2021 Masonry link -->


<style>
  #app {
    background-color: lightblue;
    padding-left: 5%;
    padding-right: 5%;
  }
</style>
