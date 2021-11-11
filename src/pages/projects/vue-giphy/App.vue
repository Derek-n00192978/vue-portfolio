<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <Giphy />
        </b-col>
      </b-row>
    </b-container>    
  </div>
</template>
  

<script>
import Giphy from '@/pages/projects/vue-giphy/GiphyViewer.vue'

export default {
  name: 'App',
  components: {
    Giphy    
  }
}
</script>

<style>
 .container{
   margin-top: 30px;
 }
</style>