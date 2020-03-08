<template>

  <div id='main'>
    <Header title='我的'/>
    <div id='content'>
      <Login />
    </div>
    <Tabbar/>
  </div>

</template>

<script>
import Header from '@/components/header.vue'
import Tabbar from '@/components/tabbar.vue'
import Login from '@/components/Login'

export default {
  name: 'Mine',
  components: {
    Header,
    Tabbar,
    Login
  }
}
</script>

<style>
</style>
