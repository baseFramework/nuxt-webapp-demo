<template>
    <div class="operate J-operate-item" data-id="1097446_19598494">
        <div class="J-process-tip-item operate-inner clearfix">
            <div class="J-operate-outer" style="text-align: center">
                <div v-for="(product, index) in products" data-operate="inner"  class="J-operate-inner">
                    <!--start  extra_data.status: 0 已用 1 已领过 2 已领完-->
                    <a :href="'//h5.vip.com/list/classify.html?category_id='+product.category_id" class="J-mars-item " style="width: 100%;height: 100%;display: block;" mars_exposure_sead="wap_oper_expose" mars_exposure_module="wap|operates|首页|1402|今日上线|1|f7e1bdbb6d13facaff522aca8c8901b9" data-isuniversallink="" data-rawurl="">
                        <img :src="product.img" data-id="f7e1bdbb6d13facaff522aca8c8901b9" style="width: 100%; height: auto; opacity: 1;">
                        <div data-countdown="true">
                            <div class="countdown-inner"></div>
                        </div>
                        <!--start  extra_data.status: 0 已用 1 已领过 2 已领完-->
                        <div class="coupon-signet J-coupon-signet"></div>
                        <!--end  extra_data.status: 0 已用 1 已领过 2 已领完-->
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '~plugins/axios'
    export default {
        name: 'coperate1',
        props: ['api'],
        data:function(){
            return{
                products:{}
            }
        },
        created:function(){
            //console.log(this.api)
            let me = this;
            let api = me.api;
            axios.get(api).then(function(res){
                console.log(res.data);
                me.products  = res.data
            })
        }
    }
</script>


<style scoped>
    @import "operate1.css";
</style>