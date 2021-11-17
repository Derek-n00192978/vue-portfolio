<!--New page added on 14-10-2021-->
<template>
    <div class="container"> 
        <div class="row">
        <div class="col-md-4">    
         <p class="p"><b>Information on the Country {{ country.name.common }} that you Clicked on!</b></p>
         <button class="btn">
         <a :href="`https://www.air-port-codes.com/airport-list/countries/${this.$route.params.country}`" target="_blank">This is a Link to all the airports in {{ country.name.common }} </a>
         </button>
         <p><b>Name:</b> {{ country.name.common }}</p>       
         <p class="p"><b>Official name:</b> {{ country.name.official }}</p>
         <p class="p"><b>Capital:</b> {{ country.capital[0] }}</p>
         <p class="p"><b>Abervation:</b> {{ country.cca3 }}</p>
         <p class="p"><b>Currency:</b> {{ country.currencies }}</p>
         <p class="p"><b>Land-mass:</b> {{ country.area }}ha's</p>
         <p class="p"><b>Langitude/Longitude:</b> {{ country.latlng[0] }} degrees Latitude {{ country.latlng[1] }} degrees longitude</p>
         <p class="p"><b>Continent:</b> {{ country.continents[0] }}</p>
         <p class="p"><b>Population:</b> {{ country.population }}</p>
         <p class="p"><b>Timezone:</b> {{ country.timezones }}</p>
         <p class="p"><b>Region:</b> {{ country.region }}</p>
         <p class="p"><b>Languages:</b> {{ country.languages }}</p>  
         <p class="p"><b>Is {{ country.name.common }} Landlocked :</b> {{ country.landlocked }}</p> 
         <p class="p"><b>What countries border {{ country.name.common }} :</b> {{ country.borders }}</p> 
        </div>
        <div class="col-md-6" id="images"> 
            <p><b>{{ country.name.common }} flag</b></p>
            <img :src=" country.flags.png " alt="CountryFlag">
            <br><br><br><br>
            <p></p>
            <p><b>{{ country.name.common }} Coat Of Arms</b></p>
            <img :src=" country.coatOfArms.png" alt="This Country has no Coat Of Arms">
        </div>
        </div>
    </div>            
</template>

<script>
import axios from 'axios'
    export default {
        name: 'country',
        data() {
        return {
            country: []
        }
    }, 
        mounted(){
            axios
                .get(`https://restcountries.com/v3.1/name/${this.$route.params.country}?fullTEXT=true`)
                .then(response => {
                    console.log(response.data)
                    this.country = response.data[0]
                })
                .catch(error => console.log(error))
        }
    }
</script>

<style>
    .btn {
    background-color: #f4511e;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    opacity: 0.6;
    transition: 0.3s;
    }

    .btn:hover {
        opacity: 1
    }  
</style>