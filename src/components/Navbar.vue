<script></script>

<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/images/logo.svg" alt="logo" width="90" height="17" />
    </div>
    <div class="header__menu">
      <p class="header__menu-title">меню</p>
      <div class="header__menu-burger">
        <img src="@/assets/icons/burger.svg" alt="burger" width="12" height="12" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px;

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 16px;

    &-title {
      font: $font-main-gilroy;
      color: $color-text-burger;
    }

    &-burger {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background: $color-general-green;
      border-radius: 57px;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
  }

  @media (max-width: 390px) {
    padding: 12px 16px;
  }
}
</style>
