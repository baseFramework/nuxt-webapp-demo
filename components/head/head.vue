<template>
    <div id="J-page-header">            <div class="u-header-wrap">
        <div class="header-placeholder" id="J-header-placeholder"></div>
        <header class="u-header J-u-header">
            <div class="u-hd-left">
                <a  href="javascript:;" class="J-user-center-link"  mars_sead="index-user-service_btn">
                        <span class="u-icon-px icon-member">
                                                    </span>
                </a>
            </div>
            <div class="u-hd-logolocation ">
                <div class="u-hd-logo">
                    <a href="javascript:;" class="u-icon-px icon-new-logo" mars_sead="nav_home_btn"></a>
                </div>
                <div class="u-hd-location">
                    <div href="javascript:;" class="J-warehouse-btn" rel="area" mars_sead="home_topnav_rovince_btn" data-province="广东" data-parent-code="104104" data-warehouse="VIP_NH">
                        <span class="J-warehouse-txt warehouse-txt">广东</span><span class="u-icon-px icon-arrow-down" data-changestyle="i_down_arrow"></span>
                    </div>
                </div>
            </div>
            <div class="u-hd-right">
                <a href="javascript:;" class="J-search-link"  mars_sead="brand-search_btn"> <span class="i-hd-search icon-icon-screen"></span> </a>
            </div>
            <div id="J-index-loading" class="index-loading" style="display: none;"></div>
        </header>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'chead',
    }
</script>


<style scoped>
    @import "head.css";
</style>