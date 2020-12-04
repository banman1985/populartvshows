// Programmer: Brian Nelson
// Project: Popular TV Shows
// Date:12/4/2020

//Simple Vue component for displaying a header
<template>
    <div class="header">
        <h1>{{theTitle}}</h1>
    </div>
</template>

<script>
export default {
    name: "Header",
    props:['theTitle']
}
</script>

<style scoped>
.header{
    background-color: rgb(108, 105, 122);
    color: rgb(211, 232, 250);
    text-align: center;
    padding: 10px;
    margin: 0 px;
}
</style>