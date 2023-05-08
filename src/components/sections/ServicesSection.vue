<script>
import SliderTemplate from '@/components/slider/SliderTemplate.vue'

import sliderImage1 from '@/assets/images/services-slider/card1.svg'
import sliderImage2 from '@/assets/images/services-slider/card2.svg'
import sliderImage3 from '@/assets/images/services-slider/card3.svg'
import sliderImage4 from '@/assets/images/services-slider/card4.svg'
import sliderImage5 from '@/assets/images/services-slider/card5.svg'
import sliderImage6 from '@/assets/images/services-slider/card6.svg'
import sliderImage7 from '@/assets/images/services-slider/card7.svg'

export default {
  components: {
    SliderTemplate,
  },
  data() {
    return {
      sliderItems: [
        {
          id: 1,
          title: 'Аналитика и исследования',
          description: 'Анализируем поведение пользователей и их опыт взаимодействия с продуктом',
          image: sliderImage1
        },
        {
          id: 2,
          title: 'CX-исследования',
          description: 'Исследование целей, мотивов и ожиданий от взаимодействия пользователя с брендом',
          image: sliderImage2
        },
        {
          id: 3,
          title: 'Мобильная и веб-разработка',
          description: 'Разрабатываем технологичные и эффективные решения для любых задач',
          image: sliderImage3
        },
        {
          id: 4,
          title: 'Дизайн мобильных и веб-интерфейсов',
          description: 'Создаем эмоциональный дизайн на основе данных',
          image: sliderImage4
        },
        {
          id: 5,
          title: 'Брендинг и упаковка',
          description: 'Создаем уникальный образ брендов и системы визуальных коммуникаций',
          image: sliderImage5
        },
        {
          id: 6,
          title: 'Спринт за 7 дней',
          description: 'Создаем уникальный образ брендов и системы визуальных коммуникаций',
          image: sliderImage6
        },
        {
          id: 7,
          title: 'Дизайн-поддержка',
          description: 'Создаем уникальный образ брендов и системы визуальных коммуникаций',
          image: sliderImage7
        },
      ]
    }
  }
}
</script>

<template>
  <section class="services">
    <div class="services__intro">
      <h2 class="services__title">Услуги</h2>
      <p class="services__subtitle">
        Детальное исследование, интуитивно понятный дизайн и высокое качество
        разработки позволяют нам ответить на все запросы клиента и создать
        востребованный продукт.
      </p>
    </div>
    <slider-template :items="sliderItems" />
  </section>
</template>

<style lang="scss" scoped>
.services {
  padding-top: 100px;
  display: flex;
  flex-direction: column;

  &__intro {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    padding: 0 30px;
    margin-bottom: 56px;
  }

  &__title {
    grid-area: 1 / 3 / 2 / 4;
    font: $font-h1-playfair;
    letter-spacing: -0.04em;
  }

  &__subtitle {
    grid-area: 2 / 3 / 3 / 4;
    color: $color-text-secondary;
    font: $font-small-gilroy;
    text-indent: 56px;
    max-width: 290px;
  }
}

@media (max-width: 1024px) {
  .services {
    padding-top: 100px;

    &__intro {
      grid-column-gap: 10px;
      grid-row-gap: 30px;
      padding: 0 20px;
      margin-bottom: 48px;
    }

    &__title {
      font-size: 64px;

      .italic {
        font-size: 64px;
      }
    }

    &__subtitle {
      grid-area: 2 / 3 / 3 / 5;
    }
  }
}

@media (max-width: 590px) {
  .services {
    padding-top: 44px;

    &__intro {
      grid-column-gap: 0px;
      grid-row-gap: 26px;
      padding: 0 16px;
      margin-bottom: 34px;
    }

    &__title {
      grid-area: 1 / 2 / 2 / 4;
      font-size: 40px;

      .italic {
        font-size: 40px;
      }
    }

    &__subtitle {
      grid-area: 2 / 2 / 3 / 5;
      max-width: 230px;
    }
  }
}
</style>