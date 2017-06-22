<template>
    <section>
        <my-downloads></my-downloads>
        <my-head></my-head>
        <my-navi></my-navi>
        <my-swipe></my-swipe>
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

export default {
    components: {
        MyDownloads,
        MyHead,
        MyNavi,
        MySwipe
    },
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return {
      users: data
    }
  },
  head () {
    return {
      title: 'Users'
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
