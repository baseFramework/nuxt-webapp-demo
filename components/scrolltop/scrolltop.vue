<template>
    <div class="backtop J-gotop none" mars_sead="home_foot_top_btn" v-on:click="toTop"
         style="display: inline; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
        <i class="icon-up"></i>
    </div>
</template>

<script>
    export default {
        name: 'cscrolltop',
        methods: {
            toTop(){
                window.scrollTo(0, 0)
            }
        }
    }
</script>


<style scoped>
    @import "scrolltop.css";
</style>