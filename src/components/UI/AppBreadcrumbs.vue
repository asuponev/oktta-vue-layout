
<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },
  },
}
</script>

<template>
  <div class="breadcrumbs">
    <div class="wrapper">
      <div class="breadcrumbs__content">
        <router-link
          to="/"
          class="breadcrumbs__item"
        >
          Главная
        </router-link>
        <div class="breadcrumbs__divider">/</div>
        <router-link
          class="breadcrumbs__item"
          :to="items[0].path"
        >
          {{ items[0].name }}
        </router-link>
        <div class="breadcrumbs__divider">/</div>
        <div class="breadcrumbs__item">
          {{ items[1].name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  padding: 16px 0 32px;

  &__content {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__item {
    font-size: 12px;
    color: $color-text-secondary;
    text-decoration: none;

    &:last-child {
      cursor: text;
    }
  }

  &__divider {
    font: 500 20px/1 "Playfair Display", serif;
    color: $color-text-secondary;
  }
}
</style>