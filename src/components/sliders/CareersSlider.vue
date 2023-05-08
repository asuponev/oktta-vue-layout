<script>
import SliderTemplate from '@/components/sliders/SliderTemplate.vue'

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
          title: 'Свобода мысли и действий',
          description: 'Нет бюрократической кабалы и микроменеджмента.',
          image: sliderImage1
        },
        {
          id: 2,
          title: 'Неформальное общение',
          description: 'Не желаем доброго времени суток и не обращаемся на Вы.',
          image: sliderImage2
        },
        {
          id: 3,
          title: 'Удалёнка',
          description: 'Каждый может выбрать удобный график. И никто не будет осуждать за поздние ответы.',
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
  <slider-template :items="sliderItems" />
</template>

<style lang="scss" scoped></style>