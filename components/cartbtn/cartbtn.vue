<template>
    <div id="J-cart-cmp">
        <div id="J-cart-flow-icon" class="u-shopbag" data-show-cart="" data-clear-time="">
            <a href="https://mcheckout.vip.com/cart.html" mars_sead="floating-cart_btn">
                <span class="icon-cart i-flow-carticon"></span>
                <span class="u-flow-cartnum J-cart-num"></span>
                <span class="u-flow-carttime" id="J-cart-time"></span>
            </a>
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