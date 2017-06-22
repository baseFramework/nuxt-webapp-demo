<template>
    <div style="height: 220px">
        <mt-swipe :auto="4000">
            <mt-swipe-item><img class="J-content-img" src="//b.vimage1.com/2017/05/27/3335/14958849689662.jpg" data-id="14981208961497318933398_53edcb17d9ac4d972b582d01fec81a96257462" style="width:100%;transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"></mt-swipe-item>
            <mt-swipe-item><img class="J-content-img" src="//b.vimage1.com/2017/06/21/1056/14980329199560.jpg" data-id="14981208961497318933398_53edcb17d9ac4d972b582d01fec81a96257462" style="width:100%;transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: 'cswipe',
    }
</script>


<style scoped>
    @import "swipe.css";
</style>