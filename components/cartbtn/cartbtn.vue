<template>
    <div id="J-cart-cmp">
        <div id="J-cart-flow-icon" class="u-shopbag" data-show-cart="" data-clear-time="">
            <nuxt-link to="/checkout" mars_sead="floating-cart_btn">
                <span class="icon-cart i-flow-carticon"></span>
                <span class="u-flow-cartnum J-cart-num"></span>
                <span class="u-flow-carttime" id="J-cart-time"></span>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ccartbtn'
    }
</script>


<style scoped>
    @import "cartbtn.css";
</style>