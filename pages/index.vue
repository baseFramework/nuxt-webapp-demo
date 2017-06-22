<template>
    <section>
        <my-downloads></my-downloads>
        <my-head></my-head>
        <my-navi></my-navi>
        <my-swipe></my-swipe>
        <my-operate1></my-operate1>
        <div class="container">

        </div>
    </section>
</template>

<script>
import axios from '~plugins/axios'
import MyDownloads from '../components/downloadbar/downloadbar.vue'
import MyHead from '../components/head/head.vue'
import MyNavi from '../components/navi/navi.vue'
import MySwipe from '../components/swipe/swipe.vue'
import MyOperate1 from '../components/operate1/operate1.vue'

export default {
    components: {
        MyDownloads,
        MyHead,
        MyNavi,
        MySwipe,
        MyOperate1
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
