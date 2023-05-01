<script>
import Navbar from '@/components/Navbar.vue'
import CustomFooter from './components/Footer.vue';

export default {
  components: { Navbar, CustomFooter }
}
</script>

<template>
  <navbar />
  <main>
    <router-view></router-view>
  </main>
  <custom-footer />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
