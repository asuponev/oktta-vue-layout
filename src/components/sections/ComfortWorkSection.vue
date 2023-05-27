<script>
import SliderTemplate from '@/components/slider/SliderTemplate.vue'

import sliderImage1 from '@/assets/images/careers-slider/card1.svg'
import sliderImage2 from '@/assets/images/careers-slider/card2.svg'
import sliderImage3 from '@/assets/images/careers-slider/card3.svg'
import sliderImage4 from '@/assets/images/careers-slider/card4.svg'

export default {
  components: {
    SliderTemplate,
  },
  data() {
    return {
      sliderItems: [
        {
          id: 1,
          title: 'Свобода мысли и действий',
          description: 'Нет бюрократической кабалы и микроменеджмента.',
          image: sliderImage1
        },
        {
          id: 2,
          title: 'Неформальное общение',
          description: 'Не желаем доброго времени суток и не обращаемся на Вы.',
          image: sliderImage2
        },
        {
          id: 3,
          title: 'Удалёнка',
          description: 'Каждый может выбрать удобный график. И никто не будет осуждать за поздние ответы.',
          image: sliderImage3
        },
        {
          id: 4,
          title: 'Инструменты',
          description: 'Используем современный стек, оплачиваем английский и подписки на сервисы.',
          image: sliderImage4
        },
      ]
    }
  }
}
</script>

<template>
  <section>
    <h2 class="title">
      <span>Ком<span class="italic">ф</span>ортная работа без рутины</span>
    </h2>
    <slider-template :items="sliderItems" />
  </section>
</template>

<style lang="scss" scoped>
.title {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 100px 30px 0;
  font: $font-page-title-gilroy;
  letter-spacing: -0.04em;
  margin-bottom: 50px;

  .italic {
    font: $font-page-title-playfair;
  }

  span:first-child {
    grid-area: 1 / 2 / 2 / 4;
    max-width: 600px;
  }
}

@media (max-width: 1024px) {
  .title {
    gap: 8px;
    padding: 0 20px;
    font-size: 40px;

    .italic {
      font-size: 40px;
    }

    span:first-child {
      grid-area: 1 / 3 / 2 / 5;
      max-width: 358px;
    }
  }
}

@media (max-width: 590px) {
  .title {
    gap: 8px;
    padding: 0 16px;
    font-size: 32px;

    .italic {
      font-size: 32px;
    }

    span:first-child {
      grid-area: 1 / 1 / 2 / 5;
    }
  }
}
</style>