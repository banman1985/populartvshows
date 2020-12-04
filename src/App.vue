<template>
  <div id="app">
   <Header theTitle = "Popular TV Shows"/> 
   <TVList  v-bind:tvCards="cards"/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import TVList from './components/TVList.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    TVList

  },
  data(){
  return {
    tvList:[]
  }
  },
  mounted()
  {
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=e72d704efa7872abba1106f277234689&language=en-US&page=1')
    .then((res) => {
      this.tvList = res.data.results;
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
