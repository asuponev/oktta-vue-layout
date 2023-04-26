<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>

<template>
  <navbar />
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
