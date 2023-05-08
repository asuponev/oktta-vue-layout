<script>
import ClientsList from '@/components/ClientsList.vue'

export default {
  components: {
    ClientsList,
  },
}
</script>

<template>
  <section class="clients">
    <div class="clients__intro">
      <p class="clients__subtitle">
        Прозрачность в работе, доверие, открытость новому и нацеленность на
        результат лежат в основе видения ценностей нашей компании.
      </p>
      <h2 class="clients__title">
        Поработали более чем с <span class="italic">85 клиентами</span>
      </h2>
    </div>
    <clients-list />
  </section>
</template>

<style lang="scss" scoped>
.clients {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  &__intro {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    padding: 0 30px;
  }

  &__title {
    grid-area: 2 / 1 / 3 / 5;
    text-align: center;
    justify-self: center;
    font: $font-h1-gilroy;
    letter-spacing: -0.04em;
    max-width: 1020px;

    .italic {
      font: $font-h1-playfair;
      font-variant-numeric: lining-nums;
    }
  }

  &__subtitle {
    grid-area: 1 / 2 / 2 / 3;
    color: $color-text-secondary;
    font: $font-small-gilroy;
    text-indent: 56px;
  }
}

@media (max-width: 1280px) {
  .clients {
    gap: 55px;

    &__intro {
      grid-row-gap: 16px;
    }
  }
}

@media (max-width: 1024px) {
  .clients {
    gap: 48px;

    &__intro {
      grid-column-gap: 10px;
      grid-row-gap: 30px;
      padding: 0 20px;
    }

    &__title {
      max-width: 670px;
      font-size: 64px;

      .italic {
        font-size: 64px;
      }
    }

    &__subtitle {
      grid-area: 1 / 2 / 2 / 4;
    }
  }
}

@media (max-width: 590px) {
  .clients {
    gap: 48px;

    &__intro {
      grid-column-gap: 0px;
      grid-row-gap: 32px;
      padding: 0 16px;
    }

    &__title {
      font-size: 40px;

      .italic {
        font-size: 40px;
      }
    }

    &__subtitle {
      grid-area: 1 / 1 / 2 / 5;
      max-width: 315px;
    }
  }
}
</style>