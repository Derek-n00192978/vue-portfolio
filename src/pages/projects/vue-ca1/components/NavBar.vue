<template>
    <div class="navbar" id="topnav">
        <b-nav pills>          
            <b-nav-item><router-link :to="{name: 'vue-ca1'}"><b>Home</b></router-link></b-nav-item> 
            <b-nav-item><router-link :to="{name: 'about'}"><b>About</b></router-link></b-nav-item> 
             <input type="text" v-model="search" placeholder="SearchCountries"/>
            
        </b-nav>           
    </div>    
</template>
<script>
import axios from "axios";
export default {
    name: 'NavBar',
    data() {
        return {
           search: ''
        };        
    },
    methods: {
        searchCountries() {
			if (!this.term) {
				alert("Please enter a search term");
				return;
			}
			axios
				.get(`https://restcountries.com/v3.1/name/${this.term}?fullText=true`)
				.then((response) => {
					console.log(response.data.data);
					this.term = response.data.data;
				})
				.catch((error) => console.log(error));
		}
        
    },
    computed: {
        filteredCountries: function(){
            return this.term.filiter((term) => {
                return term.title.match(this.search)
            });
        }
    }
}
</script>
<style>
   
</style>