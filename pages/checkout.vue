<template>
    <section>
        <my-head title="购物车"></my-head>
        <div id="J-shopping-cart-empty">
            <!-- 购物车页 -->
            <div class="shopping-cart-empty">
                <div class="bg"></div>
                <div class="cart"></div>
                <h2>购物车空空如也</h2>
                <p></p>
                <nuxt-link to="/"  class="button button-primary" mars_sead="cart_empty_home_btn">
                    去抢购
                </nuxt-link>
            </div>

        </div>
    </section>
</template>

<script>
    import MyHead from '../components/nhead/nhead.vue'
    export default {
        name: 'checkoutPage',
        components: {
            MyHead,
        },
        head () {
            return {
                title: '购物车'
            }
        }
    }
</script>


<style scoped>
    .shopping-cart-empty {
        padding-top: 1.6rem;
        padding-bottom: 1.6rem;
        background-color: #fff;
        text-align: center;
        position: relative;
    }

    .shopping-cart-empty .bg {
        position: absolute;
        width: 8.29333rem;
        height: 3.73333rem;
        background-image: url(http://7xawfk.com1.z0.glb.clouddn.com/demo/bg1.png);
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        top: 0;
    }

    .shopping-cart-empty .cart, .shopping-cart-empty h2, .shopping-cart-empty p {
        position: relative;
    }
    .shopping-cart-empty .bg, .shopping-cart-empty .cart {
        -webkit-background-size: 100% 100%;
        background-size: 100%;
    }
    .shopping-cart-empty .cart {
        width: 2.93333rem;
        height: 3.76rem;
        background-image: url(http://7xawfk.com1.z0.glb.clouddn.com/demo/cart.png);
        margin: 0 auto;
    }

    .shopping-cart-empty h2 {
        font-size: .42667rem;
        color: #222;
        margin-top: .53333rem;
        line-height: .74667rem;
        font-weight: 400;
    }
    .shopping-cart-empty .cart, .shopping-cart-empty h2, .shopping-cart-empty p {
        position: relative;
    }

    .shopping-cart-empty p {
        font-size: .37333rem;
        color: #98989f;
        line-height: .74667rem;
        margin-bottom: .48rem;
    }
    .shopping-cart-empty .cart, .shopping-cart-empty h2, .shopping-cart-empty p {
        position: relative;
    }

    .shopping-cart-empty .button {
        width: 4.26667rem;
        display: block;
        margin: 0 auto;
    }
    .button-primary {
        border: 1px solid #de3c96 !important;
        color: #de3c96 !important;
        text-decoration: none;
        text-align: center;
        display: block;
        border-radius: .10667rem;
        line-height: .8rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        background: none;
        padding: 0 .26667rem;
        margin: 0;
        white-space: nowrap;
        position: relative;
        text-overflow: ellipsis;
        font-size: .37333rem;
        font-family: inherit;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .button {
        border: 1px solid #98989f;
        color: #98989f;
        text-decoration: none;
        text-align: center;
        display: block;
        border-radius: .10667rem;
        line-height: .8rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        background: none;
        padding: 0 .26667rem;
        margin: 0;
        white-space: nowrap;
        position: relative;
        text-overflow: ellipsis;
        font-size: .37333rem;
        font-family: inherit;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        color: #222;
    }
</style>