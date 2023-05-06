<script>
export default {
  props: {
    menuVisible: {
      type: Boolean,
      default: false
    },
    openMenu: {
      type: Function
    },
    closeMenu: {
      type: Function
    }
  }
}
</script>

<template>
  <div
    :class="[menuVisible || $route.path === '/company' ? 'header-menu--open' : '', 'header-menu']"
  >
    <p>меню</p>
    <div
      v-if="!menuVisible"
      @click="openMenu"
      class="header-burger"
    >
      <svg>
        <use xlink:href="@/assets/icons/_sprite.svg#burger" />
      </svg>
    </div>
    <div
      v-else
      @click="closeMenu"
      class="header-burger header-burger--open"
    >
      <svg>
        <use xlink:href="@/assets/icons/_sprite.svg#close" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-menu {
  display: flex;
  align-items: center;
  gap: 16px;
  color: $color-text-burger;
  transition: color 0.4s ease-in-out;
  z-index: 1000;

  &--open {
    color: $color-general-white;
  }
}

.header-burger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: $color-general-green;
  border-radius: 57px;
  border: 1px solid $color-general-green;
  cursor: pointer;
  transition: border 0.4s ease-in-out, background 0.4s ease-in-out;

  svg {
    width: 12px;
    height: 12px;
  }

  &:hover {
    border: 1px solid $color-general-dark;
    background: $color-general-white;
  }

  &:active {
    border: 1px solid $color-divider;
  }

  &--open {
    border: 1px solid $color-general-white;
    background: $color-general-white;

    svg {
      width: 8px;
      height: 8px;
    }

    &:hover {
      border: 1px solid $color-general-green;
      background: $color-general-green;
    }
  }
}
</style>