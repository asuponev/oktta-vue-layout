
<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    },
  },
}
</script>

<template>
  <div class="breadcrumbs">
    <div class="wrapper">
      <div class="breadcrumbs__content">
        <div
          class="breadcrumbs__item"
          @click="$router.push('/')"
        >
          Главная
        </div>
        <div class="breadcrumbs__divider">/</div>
        <div
          class="breadcrumbs__item"
          @click="$router.push(items[0].path)"
        >
          {{ items[0].name }}
        </div>
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
  margin: 16px 0 32px;

  &__content {
    display: flex;
    align-items: center;
    gap: 8px;
    color: $color-text-secondary;
  }

  &__item {
    font-size: 12px;
  }

  &__divider {
    font: 500 20px/1 "Playfair Display", serif;
  }
}
</style>