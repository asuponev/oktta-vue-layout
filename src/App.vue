<script>
import CustomHeader from '@/components/header/CustomHeader.vue'
import CustomFooter from './components/Footer.vue';

export default {
  components: { 
    CustomHeader, 
    CustomFooter 
  }
}
</script>

<template>
  <custom-header />
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

.wrapper {
  margin: 0 auto;
  max-width: 1440px;
  margin-top: 72px;
}
</style>
