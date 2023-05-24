<script>
import AppMenu from '@/components/menu/AppMenu.vue'
import HeaderBurger from '@/components/header/header-elements/HeaderBurger.vue'
import HeaderLogo from '@/components/header/header-elements/HeaderLogo.vue'

export default {
  components: {
    AppMenu,
    HeaderBurger,
    HeaderLogo
  },
  data() {
    return {
      menuVisible: false,
    }
  },
  methods: {
    openMenu() {
      this.menuVisible = true
      document.querySelector('body').style.overflow = 'hidden'
    },
    closeMenu() {
      this.menuVisible = false
      document.querySelector('body').removeAttribute('style')
    }
  }
}
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <header-logo
        :menuVisible="menuVisible"
        :closeMenu="closeMenu"
      />
      <header-burger
        :menuVisible="menuVisible"
        :openMenu="openMenu"
        :closeMenu="closeMenu"
      />
      <app-menu
        :isOpen="menuVisible"
        :closeMenu="closeMenu"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  background: inherit;

  &__wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 30px;
    position: relative;
  }
}

@media (max-width: 768px) {
  .header {
    &__wrapper {
      padding: 12px 20px;
    }
  }
}

@media (max-width: 590px) {
  .header {
    &__wrapper {
      padding: 12px 16px;
    }
  }
}
</style>