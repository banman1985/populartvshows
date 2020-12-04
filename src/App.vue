// Programmer: Brian Nelson
// Project: Popular TV Shows
// Date:12/4/2020

//Main template being displayed in index.html. Pulls Card from Card.vue to display cards from the tvList.
<template>
  <div id="app">
   <Header theTitle = "Popular TV Shows"/> 
   <div class="card-deck row mx-auto">
     <!-- Sends over info gotten from Axios back to the Card, where it's put in the template format. -->
   <Card v-for="card in tvList" v-bind:cards="card" v-bind:key="card.name"></Card>
</div>
  </div>
</template>

// Importing Header component from Header, Card component from card, and axios functionality from axios.
<script>
import Header from './components/Header.vue'
import Card from './components/Card.vue'
import axios from 'axios'

//Exports App for use in the index.html page
export default {
  name: 'App',
  components: {
    Header,
    Card

  },
  // TV List where axios TV data is stored.
  data(){
    return {
      tvList:[],
    }
  },
  //Mounts the API and puts the top four shows into tvList array.
  mounted()
  {
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=e72d704efa7872abba1106f277234689&language=en-US&page=1')
    .then((res) => {
      this.tvList = res.data.results;
      this.tvList = this.tvList.splice(0, 4)
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
