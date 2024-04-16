<template>
    <div class="container">
        <h2>Total Character {{ store.total }}</h2>
    </div>
</template>

<script>
import { store } from '../store.js';
    export default {
        name: 'ResultsComponent',
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>