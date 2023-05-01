<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Аналитика и исследования',
          description: 'Анализируем поведение пользователей и их опыт взаимодействия с продуктом'
        },
        {
          id: 2,
          title: 'CX-исследования',
          description: 'Исследование целей, мотивов и ожиданий от взаимодействия пользователя с брендом'
        },
        {
          id: 3,
          title: 'Мобильная и веб-разработка',
          description: 'Разрабатываем технологичные и эффективные решения для любых задач'
        },
        {
          id: 4,
          title: 'Дизайн мобильных и веб-интерфейсов',
          description: 'Создаем эмоциональный дизайн на основе данных'
        },
        {
          id: 5,
          title: 'Брендинг и упаковка',
          description: 'Создаем уникальный образ брендов и системы визуальных коммуникаций'
        },
        {
          id: 6,
          title: 'Спринт за 7 дней',
          description: 'Создаем уникальный образ брендов и системы визуальных коммуникаций'
        },
        {
          id: 7,
          title: 'Дизайн-поддержка',
          description: 'Создаем уникальный образ брендов и системы визуальных коммуникаций'
        },
      ]
    }
  }
}
</script>

<template>
  <div class="slider">
    <div class="slider__wrapper">
      <div
        v-for="service in services"
        :key="service.id"
        class="slider__item"
      >
        <div class="slider__item-cover"></div>
        <div class="slider__item-title">
          <span>({{ service.id < 10 ? `0${service.id}` : service.id }})</span>
          <p>{{ service.title }}</p>
        </div>
        <p class="slider__item-description">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  &__wrapper {
    width: 100%;
    padding-left: 30px;
    margin-top: 16px;
    overflow: hidden;
    display: flex;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 12px;
    border-right: 1px solid $color-divider;
    padding: 0 8px;

    &:first-child {
      padding-left: 0px;
    }

    &:last-child {
      border-right: none;
      padding-right: 0px;
    }

    &-cover {
      width: 380px;
      height: 260px;
      border-radius: 21px;
      background: $color-divider;
    }

    &-title {
      display: flex;
      gap: 4px;
      margin-top: 12px;

      span {
        font: $font-small-playfair;
        font-size: 13px;
      }

      p {
        font: $font-h3-gilroy;
        letter-spacing: -0.04em;
      }
    }

    &-description {
      color: $color-text-secondary;
      letter-spacing: -0.03em;
    }
  }
}
</style>