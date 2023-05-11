<script>
import principleImg1 from '@/assets/images/principles/01.png'
import principleImg2 from '@/assets/images/principles/02.png'
import principleImg3 from '@/assets/images/principles/03.png'

export default {
  data() {
    return {
      principles: [
        {
          id: 1,
          title: 'Прозрачность в работе',
          image: principleImg1
        },
        {
          id: 2,
          title: 'Открытость новому и доверие',
          image: principleImg2
        },
        {
          id: 3,
          title: 'Нацеленность на результат',
          image: principleImg3
        },
      ]
    }
  },
}
</script>

<template>
  <div class="principles__list">
    <div
      v-for="principle in principles"
      :key="principle.id"
      class="principles__item"
    >
      <p class="principles__item-id">(0{{ principle.id }})</p>
      <div class="principles__item-image">
        <img
          :src="principle.image"
          alt="principle-icon"
        >
      </div>
      <h3 class="principles__item-title">{{ principle.title }}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.principles {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    width: 100%;
  }

  &__item {
    padding: 32px;
    height: 445px;
    color: $color-general-white;
    border: 1px solid rgba(129, 129, 129, 0.4);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    &-id {
      font: $font-small-playfair;
      line-height: 1.25;
    }

    &-title {
      font: $font-h3-gilroy;
      letter-spacing: -0.04em;
      max-width: 304px;
    }

    &-image {
      img {
        width: 100%;
        height: 200px;
        object-fit: contain;
      }
    }
  }
}

@media (max-width: 1280px) {
  .principles {
    &__item {
      height: 390px;
      gap: 10px;
    }
  }
}

@media (max-width: 1050px) {
  .principles {
    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      width: 100%;
    }

    &__item {
      width: 100%;
      gap: 20px;

      &-title {
        font-size: 24px;
        max-width: 100%;
      }
    }
  }
}
</style>