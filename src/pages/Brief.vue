<script>
import FormBrief from '@/components/forms/FormBrief.vue'

export default {
  components: {
    FormBrief
  },
}
</script>

<template>
  <section class="brief">
    <div class="wrapper">
      <div class="brief__content">
        <div class="brief__intro">
          <p class="brief__title">
            Познако<span class="italic">м</span>имся ближе?
          </p>
          <p class="brief__description">
            Заполните бриф, свяжемся с вами в течение 24 часов
          </p>
        </div>
        <form-brief />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.brief {
  margin-bottom: 30px;

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background: $color-bg-dark;
    border-radius: 32px;
    padding: 70px 0;
  }

  &__intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  &__title {
    font: $font-card-title-gilroy;
    color: $color-general-white;
    letter-spacing: -0.04em;

    .italic {
      font: $font-card-title-playfair;
    }
  }

  &__description {
    color: $color-text-secondary;
    letter-spacing: -0.03em;
  }
}

@media (max-width: 590px) {
  .brief {
    &__content {
      padding: 48px 0 50px 24px;
    }

    &__intro {
      padding-right: 24px;
      gap: 14px;
    }

    &__title {
      max-width: 310px;
      text-align: center;
      font-size: 32px;

      .italic {
        font-size: 32px;
      }
    }

    &__description {
      max-width: 310px;
      text-align: center;
    }
  }
}
</style>