<script>
import FormBrief from '@/components/forms/FormBrief.vue'

export default {
  components: {
    FormBrief
  },
}
</script>

<template>
  <div class="wrapper">
    <section class="section">
      <div class="section__intro">
        <p class="section__title">
          Познако<span class="italic">м</span>имся ближе?
        </p>
        <p class="section__description">
          Заполните бриф, свяжемся с вами в течение 24 часов
        </p>
      </div>
      <form-brief />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 0 30px 30px;
}

.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: $color-bg-dark;
  border-radius: 32px;
  padding: 70px 0;

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

@media (max-width: 1024px) {
  .wrapper {
    padding-inline: 20px;
  }
}

@media (max-width: 590px) {
  .wrapper {
    padding-inline: 16px;
  }

  .section {
    padding: 48px 0 50px 24px;

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