<script>
export default {

}
</script>

<template>
  <div class="filters">
    <div class="filters__item">
      <span class="filters__item-name">Все</span>
      <span class="filters__item-count">(25)</span>
    </div>
    <div class="filters__divider">/</div>
    <div class="filters__item">
      <span class="filters__item-name">E-commerce</span>
      <span class="filters__item-count">(4)</span>
    </div>
    <div class="filters__divider">/</div>
    <div class="filters__item">
      <span class="filters__item-name">Сервисы</span>
      <span class="filters__item-count">(7)</span>
    </div>
    <div class="filters__divider">/</div>
    <div class="filters__item">
      <span class="filters__item-name">Сайты</span>
      <span class="filters__item-count">(13)</span>
    </div>
    <div class="filters__divider">/</div>
    <div class="filters__item">
      <span class="filters__item-name">Приложения</span>
      <span class="filters__item-count">(8)</span>
    </div>
    <div class="filters__divider">/</div>
    <div class="filters__item">
      <span class="filters__item-name">Исследования</span>
      <span class="filters__item-count">(6)</span>
    </div>
    <div class="filters__divider">/</div>
    <div class="filters__item">
      <span class="filters__item-name">Брендинг</span>
      <span class="filters__item-count">(7)</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 8px;
  max-width: 867px;

  &__item {
    display: flex;
    gap: 4px;

    &-name {
      font: $font-h3-gilroy;
      letter-spacing: -0.04em;
    }

    &-count {
      font: $font-small-playfair;
      font-size: 13px;
    }
  }

  &__divider {
    font: $font-card-title-playfair;
    font-size: 32px;
  }
}

@media (max-width: 1024px) {
  .filters {
    gap: 8px 4px;

    &__item {

      &-name {
        font-size: 24px;
      }

      &-count {
        font-size: 10px;
      }
    }
  }
}

@media (max-width: 590px) {
  .filters {
    justify-content: flex-start;
    gap: 4px 8px;

    &__item {

      &-name {
        font-size: 18px;
      }
    }
  }
}
</style>