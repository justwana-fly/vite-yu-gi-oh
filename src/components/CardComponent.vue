<template>
    <div class="card">
        <img :src="image" class="card-img-top" :alt="title" >
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
               <span>{{ status }}</span>
             
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props:['id','title','image', 'status','text','subtext'],
    }
</script>

<style lang="scss" scoped>

</style>