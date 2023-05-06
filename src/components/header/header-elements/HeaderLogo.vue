<script>
export default {
  props: {
    menuVisible: {
      type: Boolean,
      default: false
    },
    closeMenu: {
      type: Function
    }
  },
  methods: {
    onClickLogo() {
      if (this.$route.path !== '/') {
        this.$router.push('/')
        this.closeMenu()
      }
    }
  }
}
</script>

<template>
  <div
    @click="onClickLogo"
    :class="[menuVisible || $route.path === '/company' ? 'header-logo--white' : '', 'header-logo']"
  >
    <svg>
      <use xlink:href="@/assets/icons/_sprite.svg#logo" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.header-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;

  svg {
    width: 90px;
    height: 17px;
    fill: $color-logo;
    transition: fill 0.4s ease-in-out;
  }

  &--white {
    svg {
      fill: $color-general-white;
    }
  }
}
</style>