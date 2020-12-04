<template>
<div>
    
<p v-for="card in tvList" v-bind:key="card.name">
    <Card v-bind:aCard="card" />
    Hello from TVList
    </p>

</div>
    
</template>
<script>
import Card from "./Card.vue"
export default {
    name: "TVList",
    props:[ 'tvList'],
    components:{
        Card
    }
}
</script>