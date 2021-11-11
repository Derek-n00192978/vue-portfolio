<template>
  <div>
    This is the AllProjects Component  
    <div>
        <b-card
        header="Projects"
        header-text-variant="white"
        header-bg-variant="dark">    
        v-for="project in projects"
        :key="project.id"
        >
        Title: {{project.title}}<br>
        Decsription: {{project.title}}<br> 
        <router-link :to="{name: project.demo}">Demo</router-link>
        </b-card>
        <br>
        <br> 
    </div>

  </div>
</template>

<script>


export default {
  name: 'AllProjects',
  components: {
    
  },
  data(){
      return{
          projects:[]
      }
  },
  mounted(){
      this.getAllProjects()
  },
  methods:{
      getAllProjects(){
          fetch('./data/projects.json')
          .then(res => res.json())
          .then(data => {
              console.log(data)
              this.projects= data
          })
      }
  }
}
</script>

<style>

</style>