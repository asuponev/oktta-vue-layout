<script>
export default {
  props: {
    tags: {
      type: Array,
      default: []
    }
  }
}
</script>

<template>
  <div class="tags">
    <div
      v-for="(tag, index) in tags"
      :key="index"
      class="tags__item"
    >
      <span>{{ tag }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-wrap: wrap;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 12px;
    height: 28px;
    background: $color-general-white;
    border: 1px solid $color-general-dark;
    border-radius: 100px;
    letter-spacing: -0.03em;
    margin-right: -10px;
    margin-bottom: -4px;
  }
}
</style>