<script>
import PublicationsList from '@/components/PublicationsList.vue'

export default {
  components: {
    PublicationsList,
  },
}
</script>

<template>
  <section class="publications">
    <div class="wrapper">
      <div class="publications__content">
        <p class="publications__title">
          Публик<span class="italic">а</span>ции
        </p>
        <publications-list />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.publications {
  padding: 112px 0 96px;

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }

  &__title {
    grid-column: 1;
    font: $font-h1-gilroy;
    letter-spacing: -0.04em;
    max-width: 1020px;

    .italic {
      font: $font-h1-playfair;
      font-variant-numeric: lining-nums;
    }
  }
}

@media (max-width: 1024px) {
  .publications {
    padding: 100px 0 91px;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    &__title {
      font-size: 64px;

      .italic {
        font-size: 64px;
      }
    }
  }
}

@media (max-width: 590px) {
  .publications {
    padding: 96px 0 118px;

    &__content {
      gap: 52px;
    }

    &__title {
      font-size: 40px;

      .italic {
        font-size: 40px;
      }
    }
  }
}
</style>