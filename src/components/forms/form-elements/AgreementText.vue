<script>
export default {

}
</script>

<template>
  <p class="form-agreement-text">
    Отправляя данную форму вы соглашаетесь с
    <a href="/">политикой обработки персональных данных.</a>
  </p>
</template>

<style lang="scss" scoped>
.form-agreement-text {
  font-size: 14px;
  letter-spacing: -0.03em;
  color: $color-text-secondary;
  text-align: center;

  a {
    color: $color-text-secondary;
    text-underline-offset: 2px;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: $color-general-white;
    }
  }
}

@media (max-width: 1280px) {
  .form-agreement-text {
    align-self: center;
    max-width: 400px;
  }
}

@media (max-width: 590px) {
  .form-agreement-text {
    max-width: 100%;
  }
}
</style>