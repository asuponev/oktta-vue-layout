<script>
import MainCaseCard from '@/components/MainCaseCard.vue'
import HoverGreenBtn from '@/components/UI/HoverGreenBtn.vue'

import bgKidseeImage from '@/assets/images/mock-content/case-card-kidsee.jpg'
import bgSkillcodeImage from '@/assets/images/mock-content/case-card-skillcode.jpg'
import bgVkusterImage from '@/assets/images/mock-content/case-card-vkuster.jpg'

export default {
  components: {
    MainCaseCard,
    HoverGreenBtn
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Видеосервис для детей Kidsee',
          description: 'Видеосервис для детей с безопасным контентом',
          tags: ['аналитика', 'дизайн', 'фронтенд'],
          image: bgKidseeImage
        },
        {
          id: 2,
          title: 'Сайт HR платформы SkillCode',
          description: 'Skillcode – hr платформа, с помощью которой бизнес повышает свою эффективность',
          tags: ['аналитика', 'дизайн', 'фронтенд'],
          image: bgSkillcodeImage
        },
        {
          id: 3,
          title: 'Сеть продуктовых магазинов “Вкустер”',
          description: 'Сервис доставки продуктов для нового ритейлера',
          tags: ['аналитика', 'дизайн', 'фронтенд'],
          image: bgVkusterImage
        },
      ]
    }
  }
}
</script>

<template>
  <section class="section">
    <div class="wrapper">
      <div class="section__content">
        <div class="case">
          <div class="case__block case__block--first">
            <main-case-card
              :caseItem="items[0]"
              :number="1"
              :amount="items.length"
              :isFullInfo="false"
              :isPreviewCard="true"
              class="case-first-card"
            />
            <hover-green-btn class="case-hover-button">
              все кейсы
            </hover-green-btn>
          </div>
          <div class="case__block case__block--second">
            <main-case-card
              :caseItem="items[1]"
              :number="2"
              :amount="items.length"
              :isFullInfo="false"
            />
          </div>
          <div class="case__block">
            <main-case-card
              :caseItem="items[2]"
              :number="3"
              :amount="items.length"
            />
          </div>
        </div>
        <button class="section__button">все кейсы</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  &__button {
    width: 100%;
    height: 60px;
    border-radius: 40px;
    border: none;
    color: $color-general-white;
    background: $color-general-dark;
    font: $font-button;
    letter-spacing: -0.03em;
    cursor: pointer;
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      background: $color-general-green;
      color: $color-general-dark;
    }
  }
}

.case {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  margin-top: 10px;

  &__block {
    grid-area: 6 / 1 / 9 / 5;
    z-index: 3;

    &--first {
      grid-area: 1 / 2 / 7 / 4;
      border-radius: 24px;
      height: 492px;
      z-index: 1;
      position: relative;

      .case-first-card {
        height: 492px;
        border-radius: 24px;
      }

      .case-hover-button {
        top: 13%;
        left: -17%;
      }
    }

    &--second {
      transform: translateY(-16px);
      z-index: 2;
      padding-inline: 32px;
    }
  }
}

@media (max-width: 1024px) {
  .section {
    &__content {
      gap: 128px;
    }

    &__button {
      height: 46px;
      font-size: 16px;
    }
  }

  .case {
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 64px;
    margin-top: 25px;

    &__block {
      grid-area: 2 / 1 / 3 / 13;

      &--first {
        grid-area: 1 / 2 / 2 / 12;
        height: 393px;

        .case-first-card {
          height: 393px;
        }

        .case-hover-button {
          display: none;
        }
      }

      &--second {
        padding-inline: 16px;
      }
    }
  }
}

@media (max-width: 590px) {
  .section {
    &__content {
      gap: 148px;
    }
  }

  .case {
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 170px;
    margin-top: 32px;

    &__block {
      grid-area: 2 / 1 / 3 / 13;

      &--first {
        grid-area: 1 / 1 / 2 / 13;
        height: 450px;

        .case-first-card {
          height: 450px;
          border-radius: 24px;
        }
      }

      &--second {
        padding-inline: 16px;
      }
    }
  }
}
</style>