<script>
import CardTags from '@/components/CardTags.vue'

export default {
  components: {
    CardTags,
  },
  props: {
    caseItem: {
      type: Object,
    },
    number: {
      type: Number
    },
    amount: {
      type: Number
    },
    isFullInfo: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    backgroundProps() {
      return {
        'background': `center / cover no-repeat url(${this.caseItem.image})`
      }
    }
  }
}
</script>

<template>
  <div
    class="card"
    :style="backgroundProps"
  >
    <div
      v-if="isFullInfo"
      class="card__section"
    >
      <p class="card__subtitle">наши кейсы</p>
      <p class="card__counter">
        0{{ number }} — 0{{ amount }}
      </p>
    </div>
    <div
      v-if="isFullInfo"
      class="card__section"
    >
      <div class="card__content">
        <card-tags :tags="caseItem.tags" />
        <h3 class="card__title">
          {{ caseItem.title }}
        </h3>
      </div>
      <p class="card__description">
        {{ caseItem.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 32px;
  height: 592px;
  width: 100%;
  padding: 24px 24px 29px;
  color: $color-general-white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__subtitle {
    opacity: 0.7;
    letter-spacing: -0.03em;
  }

  &__counter {
    font: $font-small-playfair;
    font-variant-numeric: lining-nums;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 577px;
  }

  &__title {
    font: $font-card-title-gilroy;
    letter-spacing: -0.04em;
  }

  &__description {
    max-width: 270px;
    padding-right: 61px;
    align-self: flex-end;
    letter-spacing: -0.03em;
  }
}

@media (max-width: 1024px) {
  .card {
    height: 797px;
    padding: 16px;

    &__subtitle {
      font-size: 14px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-width: 360px;
    }

    &__title {
      font-size: 32px;
    }

    &__description {
      max-width: 204px;
      padding-right: 40px;
    }
  }
}

@media (max-width: 590px) {
  .card {
    height: 700px;
    padding: 16px;
    padding-bottom: 24px;
    border-radius: 24px;

    &__section:last-child {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    &__description {
      max-width: 100%;
      align-self: auto;
    }
  }
}
</style>