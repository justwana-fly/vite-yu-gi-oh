<template>
    <header>
        <h1 class="p-3">Yu-Gi-Oh Api</h1>
        <select class="form-select" @change="$emit('statusSearch')" v-model="store.statusFilter">
                <option value="">All</option>
                <option :value="archetype.archetype_name" v-for="archetype in store.archetypeList">{{archetype.archetype_name}}</option>
                
        </select>
    </header>
</template>

<script>
import {store} from '../store.js';
    export default {
        name: 'HeaderComponent',
        data(){
            return {
               store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>