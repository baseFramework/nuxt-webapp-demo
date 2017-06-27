<template>
    <div class="brandlistPage u-brand-list" ref="brandsWrapper">
        <div class="u-module-tit">今日特卖 · 每天早10点 晚8点上新</div>
        <div v-for="(brand, index) in brands" class="u-brand J-u-brand">
            <div class="p-relative">
                <a :href="brand.detailurl"
                   class="u-brand-pic J-mars-item" mars_sead="wap_index_specialpos_click" data_mars="1-3"
                   mars_exposure_sead="wap_brand_expose" mars_exposure_module="wap|specials|首页|1402|今日上线|2|5834018">
                    <img v-lazy="brand.mobile_image_one" :src="brand.mobile_image_one"
                         data-original="brand.mobile_image_one"
                         data-onerror="brand.mobile_image_one"
                         data-brandid="5834018" class="brand-mar-star"
                         style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                </a>
            </div>
            <div class="u-brand-msg clearfix">
                <p class="u-brand-name">
                    <span class="u-brand-discount"><span></span></span>{{brand.brand_name}}
                </p>
                <div class="J-brand-leavetime u-brand-time" data-now="1498455751000" data-to="1498701599000">剩2天</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '~plugins/axios'
    export default {
        name: 'cbrandlist',
        data: function () {
            return {
                brands: []
            }
        },
        created: function () {
            let me = this
            let api = '/api/brands'
            axios.get(api, {
                params: {
                    currentPage: 1,
                    pageSize: 10
                }
            }).then(function (res) {
                me.brands = res.data.data.items
                me.$nextTick(() => {
                   me._initScroll();
                });
            })
        },
        methods: {
            _initScroll() {
                //console.log(this.$refs.brandsWrapper)
             //   console.log( new BScroll())
//                if (this.$refs.brandsWrapper) {
//                    this.brnadsScroll = new BScroll(this.$refs.brandsWrapper, {
//                        click: true,
//                        probeType: 1,
//                        bounce: true,
//                    });
//                    this.brnadsScroll.on('scroll', (pos) => {
//                        this.scrollY = Math.abs(Math.round(pos.y));
//                        console.log(scrollY);
//                    });
//                }

            },
        }
    }


</script>


<style scoped>
    @import "brandlist.css";
</style>

