import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endPoint: {
      // "characters": "character",
      // "locations": "location",
      // "episodes": "episode"
      cards : "cardinfo.php",
      archetype: 'archetype.php'
     },
     options: {
      params: {
        num: 20,
        offset: 0,
        //archetype
      }
     },
    statusFilter:'',
    characters: [],
    cards: [],
    archetypeList: [],
    total: 0,
    loading: false,
    error:{
      message: null
    }
});