<template>
    <div class="container">
    
    <div class="alert alert-danger" v-if="store.error.message">{{ store.error.message }}</div>
    <div class="row gy-4" v-if="!store.loading">
     <div class="col-12 col-md-6 col-lg-3" v-for="card in store.cards" :key="card.id">
       <CardComponent   :id="card.id" :title="card.title" :image="card.image" :status="card.status"/>
     </div>
    </div>
    <ApiLoader v-else />
    </div>
</template>

<script>
import { store } from '../store.js';
import ApiLoader from './ApiLoader.vue';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'cardList',
        components:{
            ApiLoader,
            CardComponent
        },
        data(){
            return{
                store,
            }
        },
        mounted(){

       },  
    }
</script>

<style lang="scss" scoped>

</style>