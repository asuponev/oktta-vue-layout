<script>
import SliderTemplate from '@/components/sliders/SliderTemplate.vue'

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
  <slider-template :items="sliderItems" />
</template>

<style lang="scss" scoped></style>