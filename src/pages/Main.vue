<script>
import MainTitleSection from '@/components/sections/MainTitleSection.vue'
import MainCaseSection from '@/components/sections/MainCaseSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ClientsList from '@/components/ClientsList.vue'
import PublicationsList from '@/components/PublicationsList.vue'

export default {
  components: {
    MainTitleSection,
    MainCaseSection,
    ServicesSection,
    ClientsList,
    PublicationsList,
  },
}
</script>

<template>
  <main-title-section />
  <main-case-section />
  <services-section />
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
  <section class="publications">
    <div class="wrapper">
      <div class="publications__content">
        <div>
          <h2 class="publications__title">
            Публик<span class="italic">а</span>ции
          </h2>
        </div>
        <publications-list />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  max-width: 1440px;
}

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