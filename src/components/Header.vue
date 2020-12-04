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
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    margin: 0 px;
}
</style>