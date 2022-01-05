<template>
  <div class="columns">
    <div class="column">
        <b-field>
            <b-input v-model="searchTerm">Search Portfolio</b-input>
        </b-field>
        <div class="card"
            v-for="project in filteredprojects"
            :key="project.id"
        >
                <div class="card-image">
                    <!-- <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholder/700x600.png" alt="Placeholder image">                        
                    </figure> -->
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4"> {{ project.title }} </p>
                            <p class="subtitle is-6">
                                <b-taglist>
                                    <b-tag
                                    v-for="tag in project.tags"
                                    :key="tag"
                                    type="is-primary"
                                    >
                                    </b-tag>
                                </b-taglist>
                            </p>
                        </div>
                    </div>
                    <div class="content">
                        {{ project.description }}
                    </div>
                </div>
            <router-link v-if="project.demo" :to="{ name: project.demo }">Demo</router-link>
        </div> 
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
          projects:[],
          //work on 17-11-2021
          searchTerm: ""
      }
  },
  //work on 17-11-2021 searchTerm works here
  computed:{
      filteredprojects: function () {
          return this.projects.filter(project => {
              return project.description.toLowerCase().includes(this.searchTerm.toLowerCase())
          })
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
              this.projects = data
          })
      },
    //   searchProjects(){

    //   }
  }
}
</script>

<style>

</style>