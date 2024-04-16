<template>
    
    <main>
    <CharacterList />
    <ResultsComponent />
    </main>
</template>

<script>
import CharacterList from './CharacterList.vue';
import ResultsComponent from './ResultsComponent.vue';
    export default {
        name: 'MainComponent',
        components:{
            CharacterList,
            ResultsComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>