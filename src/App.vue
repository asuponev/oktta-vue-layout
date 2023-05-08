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
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
  <custom-footer />
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
