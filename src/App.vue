<script>
import AppHeader from '@/components/header/AppHeader.vue'
import AppFooter from './components/footer/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <app-header />
  <main>
    <router-view></router-view>
  </main>
  <app-footer />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  max-width: 1440px;
  margin-top: 72px;
  position: relative;
}

.wrapper {
  padding-inline: 30px;
}

@media (max-width: 1024px) {
  .wrapper {
    padding-inline: 20px;
  }
}

@media (max-width: 590px) {
  .wrapper {
    padding-inline: 16px;
  }
}
</style>
