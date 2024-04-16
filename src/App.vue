<template>
  
  <HeaderComponent @statusSearch="setParams"/>
  <MainComponent />
</template>

<script>
import {store} from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components:{
      HeaderComponent,
      MainComponent
    },
    data(){
      return {
        store,        
      }
    },
    methods:{
      /**
       *  setParams
       *  setta i parametri per la chiamata e inoltra la chiamata api
       *  passando i params
       */
      setParams(){
        // const options=  {};
        // if(this.store.statusFilter){
        //   options.params = {
        //     status: this.store.statusFilter
        //   }
        // }
        // this.getCharacters(options)  
        if(this.store.statusFilter){
          this.store.options.params.archetype=this.store.statusFilter;
          }else {
          delete this.store.options.params.archetype;
        }
        this.getCards()
      },
     /**
       * getCharacters methods
       * @param {*} opt 
       * chiamata api per recuperare i caratteri
       * accetta un oggetto opzionale contenente eventuali parametri
       * da passare in querystring
       * 
       */
      getCharacters(opt=null){
        //console.log(opt);
        this.store.loading = true;
        this.store.error.message = null;
        axios.get(this.store.apiUrl + this.store.endPoint.characters, opt).then((res) => {
          this.store.characters = res.data.results;
          this.store.total = res.data.info.count;
        }).catch((error) =>{
            // handle error
          //  console.log(error);
           this.store.error.message = error.message;
        }).finally(() =>{
          this.store.loading = false;
        });
      },
      getCards(){
        //console.log(opt);
        this.store.loading = true;
        this.store.error.message = null;
        axios.get(this.store.apiUrl + this.store.endPoint.cards, this.store.options).then((res) => {
          this.store.cards = res.data.data.map((card)=>{
            return {
              id: card.id,
              title: card.name,
              image: card.card_images[0].image_url,
              satus: card.archetype
            }
            });
          this.store.total = res.data.meta.total_rows;
        }).catch((error) =>{
            // handle error
          //  console.log(error);
           this.store.error.message = error.message;
        }).finally(() =>{
          this.store.loading = false;
        });
      },
      getArchetype(){
        axios.get(this.store.apiUrl + this.store.endPoint.archetype).then((res) => {
          this.store.archetypeList = res.data.slice(0, 10);
           
        }).catch((error) =>{
            // handle error
          //  console.log(error);
           this.store.error.message = error.message;
        }).finally(() =>{
          this.store.loading = false;
        });
      }
    },
    created(){
      this.getCards();
      this.getArchetype();

    }
  }
</script>

<style lang="scss" scoped>

</style>