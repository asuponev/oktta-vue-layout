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
    isPreviewCard: {
      type: Boolean,
      default: false
    }
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
      v-if="isFullInfo || isPreviewCard"
      :class="[isPreviewCard ? 'card__section--preview' : '', 'card__section']"
    >
      <div class="card__content">
        <card-tags :tags="caseItem.tags" />
        <h3 class="card__title">
          {{ caseItem.title.split(' ').slice(0, -1).join(' ') }}
          <span class="italic">{{ caseItem.title.split(' ').at(-1) }}</span>
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
  padding: 28px 24px 29px;
  color: $color-general-white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &--preview {
      display: none;
    }
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
    gap: 24px;
    max-width: 577px;
  }

  &__title {
    font: $font-card-title-gilroy;
    letter-spacing: -0.04em;

    .italic {
      font: $font-card-title-playfair;
    }
  }

  &__description {
    max-width: 266px;
    align-self: flex-end;
    letter-spacing: -0.03em;
  }
}

@media (max-width: 1024px) {
  .card {
    height: 740px;
    padding: 16px;
    position: relative;

    &__subtitle {
      font-size: 14px;
    }

    &__section:last-child {
      position: absolute;
      bottom: -110px;
      left: 0;
      width: 100%;
      color: $color-general-dark;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-width: 360px;
    }

    &__title {
      font-size: 24px;

      .italic {
        font-size: 24px;
      }
    }

    &__description {
      max-width: 204px;
      align-self: flex-end;
      letter-spacing: -0.03em;
    }
  }
}

@media (max-width: 590px) {
  .card {
    height: 450px;
    padding: 16px;
    border-radius: 24px;
    position: relative;

    &__subtitle {
      font-size: 14px;
    }

    &__section {
      &--preview {
        display: flex;
      }
    }

    &__section:last-child {
      position: absolute;
      top: 458px;
      left: 0;
      width: 100%;
      color: $color-general-dark;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 8px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
    }

    &__title {
      font-size: 24px;
    }

    &__description {
      max-width: 100%;
      font-size: 14px;
      align-self: auto;
      letter-spacing: -0.03em;
    }
  }
}
</style>