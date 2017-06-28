<template>
    <div id="J-checkout-header">
        <header class="header checkout-header">
            <div class="header-left J-history-back">
                <nuxt-link to="/" class="header-left-button">
                    <i class="icon-back"></i>
                </nuxt-link>
            </div>
            <div class="header-title">
                <h1>{{title}}</h1>
                <div class="countdown J-countdown" data-remaining-time=""></div>
            </div>
        </header>
    </div>
</template>


<script>
    export default {
        name: 'cnhead',
        props:['title']
    }
</script>


<style scoped>
    @import "nhead.css";
</style>