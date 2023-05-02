<script>
import MenuVue from './Menu.vue'
import logoBlack from '@/assets/images/logo.svg'
import logoWhite from '@/assets/images/logo-white.svg'

export default {
  components: {
    MenuVue
  },
  data() {
    return {
      menuVisible: false,
      logoBlack,
      logoWhite
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
  <header :class="[
    menuVisible
      ? 'header_dark'
      : $route.path === '/company'
        ? 'header_company'
        : '', 'header'
  ]">
    <div
      @click="$router.push('/')"
      class="header__logo"
    >
      <img
        :src="menuVisible || $route.path === '/company' ? logoWhite : logoBlack"
        alt="logo"
        width="90"
        height="17"
      />
    </div>
    <div
      @click="toggleMenu"
      class="header__menu"
    >
      <p :class="[
          menuVisible || $route.path === '/company'
            ? 'header__menu-title_dark'
            : '', 'header__menu-title'
        ]">
        меню
      </p>
      <div :class="[
          menuVisible
            ? 'header__menu-burger_open'
            : '', 'header__menu-burger'
        ]">
        <svg
          v-if="!menuVisible"
          width="12"
          height="12"
        >
          <use xlink:href="@/assets/icons/_sprite.svg#burger">
          </use>
        </svg>
        <svg
          v-else
          width="8"
          height="8"
        >
          <use xlink:href="@/assets/icons/_sprite.svg#close">
          </use>
        </svg>
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

  &_dark {
    background: $color-general-dark;
  }

  &_company {
    background: $color-general-dark;
    background-image: url("@/assets/images/company-bg.png");
    background-repeat: no-repeat;
    background-position: -90px -970px;
    background-size: cover;
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

    &:active {
      border: 1px solid $color-divider;
    }
  }
}

@media (max-width: 1280px) {
  .header_company {
    background-position: -10px -850px;
  }
}

@media (max-width: 1050px) {
  .header_company {
    background-position: -250px -530px;
    background-size: 175%;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 12px 20px;
  }
}

@media (max-width: 590px) {
  .header_company {
    background-position: -260px -168px;
  }
}

@media (max-width: 390px) {
  .header {
    padding: 12px 16px;
  }
}
</style>
