<template>
    <div >
        <p>{{aCard.name}}
            Hello from the Card
        </p>
    </div>   
</template>

<script>
export default {
    name: "Card",
    props: ["aCard"],
}
</script>

<style scoped>
.todo-item
    {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }
.card
    {
       background: chartreuse;
    }
</style>