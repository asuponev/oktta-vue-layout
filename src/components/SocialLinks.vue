<script>
export default {
  props: {
    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="social">
    <a
      :class="[light ? 'social__link--light' : '', 'social__link']"
      href="/"
    >behance</a>
    <a
      :class="[light ? 'social__link--light' : '', 'social__link']"
      href="/"
    >linkedin</a>
    <a
      :class="[light ? 'social__link--light' : '', 'social__link']"
      href="/"
    >dprofile</a>
    <a
      :class="[light ? 'social__link--light' : '', 'social__link']"
      href="/"
    >vc.ru</a>
    <a
      :class="[light ? 'social__link--light' : '', 'social__link']"
      href="/"
    >instagram</a>
    <a
      :class="[light ? 'social__link--light' : '', 'social__link']"
      href="/"
    >ya.music</a>
  </div>
</template>

<style lang="scss" scoped>
.social {
  display: flex;
  align-items: center;

  &__link {
    padding: 3px 12px;
    background: inherit;
    color: $color-general-white;
    border: 1px solid $color-border;
    border-radius: 100px;
    background: $color-general-dark;
    letter-spacing: -0.03em;
    margin-left: -10px;
    cursor: pointer;
    transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      color: $color-general-dark;
      background: $color-general-white;
    }

    &--light {
      color: $color-general-dark;
      border: 1px solid $color-general-dark;
      background: $color-general-white;

      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        margin-bottom: -4px;
      }
    }

    &--light:hover {
      color: $color-general-white;
      border: 1px solid $color-general-dark;
      background: $color-general-dark;
    }
  }
}

@media (max-width: 1060px) {

  .social {
    max-width: 200px;
    flex-wrap: wrap;
    justify-content: flex-end;

    &__link {
      font-size: 14px;
      padding: 1px 10px;
      margin-left: -8px;

      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        margin-bottom: -2px;
      }

      &--light {
        font-size: 16px;
        padding: 3px 12px;

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin-bottom: -4px;
        }
      }

    }
  }
}

@media (max-width: 700px) {
  .social {
    justify-content: center;
  }
}
</style>