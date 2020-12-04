// Programmer: Brian Nelson
// Project: Popular TV Shows
// Date:12/4/2020

// Vue component for displaying the individual tv cards

//Template for the tv cards, displaying the TV show's poster, title, and a description.
<template>
    <div class="card" style="width: 18rem;">   
  <img class="card-img-top" :src='`https://image.tmdb.org/t/p/w500/${cards.poster_path}`' alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">{{cards.name}}</h4>
    <p class="card-text">{{cards.overview}}</p>
  </div>
</div>
    
</template>
<script>

//Exports the Card so App can use it.
export default {
    name: "Card",
    props:['cards'],
}
</script>
//Card styles.
<style scoped>
.card
    {
        margin: 5px;
        border: 3px solid rgb(49, 83, 233);
        background-color: rgb(214, 214, 241);
        color: rgb(0, 0, 0);
    }
    p{font-size: 14pt;}
    .card-title, p
    {
        text-align:center;
        font-family: "Lucida Console", serif;
    }
</style>