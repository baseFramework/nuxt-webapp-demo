module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: '唯品会手机购物正品商城：全球精选 正品特卖手机版',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'keywords', content: '唯品会手机购物，正品商城，品牌特卖会'},
            {name: 'description', content: '唯品会手机购物网以1-7折超低折扣对全球各大品牌进行限时特卖，商城内正品囊括服装、化妆品、家居、奢侈品等。100%正品、手机购物下单、货到付款、7天无条件退货。'},
        ],
        script: [
            // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.slim.min.js' },
            // { src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js' },
            // { src: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js' },
            // { src: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.jquery.min.js'}


        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
           // {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css'}
        ]
    },
    /*
     ** Global CSS
     */
    css: ['~assets/css/main.css'],
    /*
     ** Add axios globally
     */
    build: {
        vendor: ['axios'],
        /*
         ** Run ESLINT on save
         */
        extend (config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    exclude: /(node_modules)/
                })
            }
        }
    },
    //是否使用mint-ui 移動端組件庫
    plugins: [
        {src: '~plugins/mintui', ssr: true}
    ]
}
