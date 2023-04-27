<script>
import MenuVue from './Menu.vue'

export default {
  components: {
    MenuVue
  },
  data() {
    return {
      menuVisible: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
      const body = document.querySelector('body')
      body.style.overflow === 'hidden'
        ? body.removeAttribute('style')
        : (body.style.overflow = 'hidden')
    }
  }
}
</script>

<template>
  <header :class="[menuVisible ? 'header_dark' : '', 'header']">
    <div @click="$router.push('/')" class="header__logo">
      <img
        v-if="!menuVisible"
        src="@/assets/images/logo.svg"
        alt="logo"
        width="90"
        height="17"
      />
      <img
        v-else
        src="@/assets/images/logo-white.svg"
        alt="logo"
        width="90"
        height="17"
      />
    </div>
    <div @click="toggleMenu" class="header__menu">
      <p
        :class="[
          menuVisible ? 'header__menu-title_dark' : '',
          'header__menu-title'
        ]"
      >
        меню
      </p>
      <div
        :class="[
          menuVisible ? 'header__menu-burger_open' : '',
          'header__menu-burger'
        ]"
      >
        <img
          v-if="!menuVisible"
          src="@/assets/icons/burger.svg"
          alt="burger"
          width="12"
          height="12"
        />
        <img
          v-else
          src="@/assets/icons/close.svg"
          alt="close"
          width="8"
          height="8"
        />
      </div>
    </div>
  </header>
  <MenuVue :isOpen="menuVisible" />
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px;
  transition: background 0.5s ease-in-out;

  &_dark {
    background: $color-general-dark;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 16px;

    &-title {
      color: $color-text-burger;

      &_dark {
        color: $color-general-white;
      }
    }

    &-burger {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background: $color-general-green;
      border-radius: 57px;
      border: 1px solid $color-general-green;
      cursor: pointer;
      transition: border 0.5s, background 0.5s;

      &_open {
        border: 1px solid $color-general-white;
        background: $color-general-white;
      }
    }
  }
}

@media (min-width: 769px) {
  .header__menu-burger {
    &:hover {
      border: 1px solid $color-general-dark;
      background: $color-general-white;
    }

    &_open:hover {
      border: 1px solid $color-general-green;
      background: $color-general-green;
    }
  }
}

@media (max-width: 768px) {
  .header {
    padding: 12px 20px;
  }
}

@media (max-width: 390px) {
  .header {
    padding: 12px 16px;
  }
}
</style>
