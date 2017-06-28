<template>
    <section>
        <my-downloads></my-downloads>
        <my-head></my-head>
        <my-navi></my-navi>
        <my-swipe></my-swipe>
        <my-operate1 api="/api/operate1"></my-operate1>
        <my-operate1 api="/api/operate2"></my-operate1>
        <my-brands></my-brands>
        <my-scrolltop></my-scrolltop>
    </section>
</template>

<script>
import axios from '~plugins/axios'
import MyDownloads from '../components/downloadbar/downloadbar.vue'
import MyHead from '../components/head/head.vue'
import MyNavi from '../components/navi/navi.vue'
import MySwipe from '../components/swipe/swipe.vue'
import MyOperate1 from '../components/operate1/operate1.vue'
import MyBrands from '../components/brandlist/brandlist.vue'
import MyScrolltop from '../components/scrolltop/scrolltop.vue'

export default {
    components: {
        MyDownloads,
        MyHead,
        MyNavi,
        MySwipe,
        MyOperate1,
        MyBrands,
        MyScrolltop
    },
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return {
      users: data
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
