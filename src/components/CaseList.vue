<script>
import caseImg1 from '@/assets/images/mock-content/cases-page-1.png'
import caseImg2 from '@/assets/images/mock-content/cases-page-2.png'
import caseImg3 from '@/assets/images/mock-content/cases-page-3.png'
import caseImg4 from '@/assets/images/mock-content/cases-page-4.png'
import caseImg5 from '@/assets/images/mock-content/cases-page-5.png'
import caseImg6 from '@/assets/images/mock-content/cases-page-6.png'
export default {
  data() {
    return {
      cases: [
        {
          id: 1,
          title: 'Логотип Vybez',
          image: caseImg1,
          category: 'брендинг'
        },
        {
          id: 2,
          title: 'Логотип Vybez',
          image: caseImg2,
          category: 'брендинг'
        },
        {
          id: 3,
          title: 'Логотип Vybez',
          image: caseImg3,
          category: 'брендинг'
        },
        {
          id: 4,
          title: 'Сеть продуктовых магазинов «Вкустер»',
          image: caseImg4,
          category: 'брендинг'
        },
        {
          id: 5,
          title: 'Логотип Vybez',
          image: caseImg5,
          category: 'брендинг'
        },
        {
          id: 6,
          title: 'Сеть продуктовых магазинов «Вкустер»',
          image: caseImg6,
          category: 'брендинг'
        },
      ]
    }
  },
}
</script>

<template>
  <div class="case">
    <div
      v-for="item in cases"
      :key="item.id"
      class="case__card"
    >
      <div class="case__card-image">
        <img
          :src="item.image"
          alt="case-image"
        >
      </div>
      <div class="case__card-block">
        <p class="case__card-title">{{ item.title }}</p>
        <div class="case__card-category">
          <span>{{ item.category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.case {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;

  &__card {
    width: calc(50% - 20px / 2);
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;

    &-image {
      width: 100%;
      height: 630px;
      border-radius: 32px;
      overflow: hidden;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: scale 0.3s ease-in-out;
      }
    }

    &-block {
      position: absolute;
      opacity: 0;
      bottom: 0;
      z-index: 3;
      color: $color-general-white;
      display: flex;
      justify-content: space-between;
      padding: 28px 40px;
      width: 100%;
      transition: opacity 0.3s ease-in-out;
    }

    &-title {
      font: $font-h3-gilroy;
      font-size: 24px;
      letter-spacing: -0.04em;
    }

    &-category {
      min-width: 93px;
      height: 28px;
      border: 1px solid $color-general-white;
      color: $color-general-white;
      border-radius: 100px;
      font: $font-body;
      letter-spacing: -0.03em;
      background: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

@media (min-width: 1025px) {
  .case__card-image::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(28, 28, 28, 0.5);
    border-radius: 32px;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .case__card:hover {
    cursor: pointer;

    .case__card-block {
      opacity: 1;
    }

    .case__card-image {
      img {
        scale: 1.04;
      }
    }

    .case__card-image::before {
      opacity: 1;
    }
  }
}

@media (max-width: 1024px) {
  .case {
    gap: 32px 8px;

    &__card {
      width: calc(50% - 8px / 2);

      &-image {
        height: 360px;
      }

      &-block {
        position: static;
        opacity: 1;
        display: flex;
        padding: 0 8px;
        color: $color-general-dark;
      }

      &-category {
        border: 1px solid $color-general-dark;
        color: $color-general-dark;
      }
    }
  }
}

@media (max-width: 590px) {
  .case {
    gap: 32px;

    &__card {
      width: 100%;

      &-image {
        height: 350px;
      }
    }
  }
}
</style>