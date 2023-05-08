
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
</template>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  color: $color-text-secondary;
  padding-inline: 30px;
  margin-bottom: 32px;

  &__item {
    font-size: 12px;
  }

  &__divider {
    font: 500 20px/1 "Playfair Display", serif;
  }
}

@media (max-width: 1024px) {
  .breadcrumbs {
    padding-inline: 20px;
  }
}

@media (max-width: 590px) {
  .breadcrumbs {
    padding-inline: 16px;
  }
}
</style>