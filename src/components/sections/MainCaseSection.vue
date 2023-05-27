<script>
import HoverGreenBtn from '@/components/UI/HoverGreenBtn.vue'
import CardTags from '@/components/CardTags.vue'

import bgKidseeImage from '@/assets/images/mock-content/case-card-kidsee.jpg'
import bgSkillcodeImage from '@/assets/images/mock-content/case-card-skillcode.jpg'
import bgVkusterImage from '@/assets/images/mock-content/case-card-vkuster.jpg'

export default {
  components: {
    HoverGreenBtn,
    CardTags,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Видеосервис для детей Kidsee',
          description: 'Видеосервис для детей с безопасным контентом',
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
        <div class="cards">
          <div class="cards__wrapper">
            <div
              v-for="(item, index) in items"
              :key="item.id"
              class="card"
            >
              <div
                class="card__inner"
                :style="{ 'background': `center / cover no-repeat url(${item.image})` }"
              >
                <div class="card__section">
                  <p class="card__subtitle">наши кейсы</p>
                  <p class="card__counter">
                    0{{ index + 1 }} — 05
                  </p>
                </div>
              </div>
              <div class="card__section card__section--bottom">
                <div class="card__content">
                  <card-tags :tags="item.tags" />
                  <h3 class="card__title">
                    <!-- {{ item.title.split(' ').slice(0, -1).join(' ') }}
                    <span class="italic">{{ item.title.split(' ').at(-1) }}</span> -->
                    {{ item.title }}
                  </h3>
                </div>
                <p class="card__description">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
          <hover-green-btn
            @click="$router.push('/cases')"
            class="case-hover-button"
          >
            все кейсы
          </hover-green-btn>
        </div>
        <button
          @click="$router.push('/cases')"
          class="section__button"
        >все кейсы</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  &__content {
    display: flex;
    flex-direction: column;
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
    margin-top: 26px;

    &:hover {
      background: $color-general-green;
      color: $color-general-dark;
    }
  }
}

.cards {
  margin-top: 10px;
  position: relative;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0 20px;
  }

  .case-hover-button {
    top: 8%;
    left: 17%;
    z-index: 3;
  }
}

.card {
  grid-area: 2 / 1 / 4 / 5;
  z-index: 2;

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 28px 24px 29px;
    height: 592px;
    color: $color-general-white;
    border-radius: 32px;
    overflow: hidden;
  }

  &__section {
    display: none;
    align-items: center;
    justify-content: space-between;

    &--bottom {
      padding: 28px;
      position: absolute;
      bottom: 0;
      width: 100%;
      color: $color-general-white;
    }
  }

  &__subtitle {
    opacity: 0.7;
    letter-spacing: -0.03em;
  }

  &__counter {
    font: $font-small-playfair;
    font-variant-numeric: lining-nums;
  }

  &__content {
    display: flex;
    flex-direction: column;
    max-width: 577px;
  }

  &__title {
    font: $font-card-title-gilroy;
    letter-spacing: -0.04em;
    margin-top: 24px;

    .italic {
      font: $font-card-title-playfair;
    }
  }

  &__description {
    max-width: 266px;
    align-self: flex-end;
    letter-spacing: -0.03em;
  }

  &:first-child {
    grid-area: 1 / 2 / 3 / 4;
    z-index: 1;

    .card__inner {
      border-radius: 24px;
    }
  }

  &:last-child {
    .card__section {
      display: flex;
    }
  }

  &:not(:first-child):not(:last-child) {
    transform: translateY(-16px);
    margin: 0 32px;
  }
}

@media (max-width: 1024px) {
  .section {
    &__button {
      height: 46px;
      font-size: 16px;
      margin-top: 24px;
    }
  }

  .cards {
    margin-top: 25px;

    &__wrapper {
      grid-template-columns: repeat(12, 1fr);
      gap: 32px 24px;
    }

    .case-hover-button {
      display: none;
    }
  }

  .card {
    grid-area: 3 / 1 / 4 / 13;
    display: flex;
    flex-direction: column;

    &__inner {
      height: 740px;
      padding: 16px;
      position: relative;
    }

    &__subtitle {
      font-size: 14px;
    }

    &__section {
      &--bottom {
        position: static;
        color: $color-general-dark;
        padding: 0;
        margin-top: 16px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      max-width: 360px;
    }

    &__title {
      font-size: 24px;

      .italic {
        font-size: 24px;
      }
    }

    &__description {
      max-width: 204px;
      align-self: flex-end;
      letter-spacing: -0.03em;
    }

    &:first-child {
      grid-area: 1 / 2 / 2 / 12;

      .card__inner {
        height: 393px;
      }
    }

    &:not(:first-child):not(:last-child) {
      margin: 0 24px;
    }
  }
}

@media (max-width: 590px) {
  .section {
    &__button {
      margin-top: 16px;
    }
  }

  .cards {
    margin-top: 32px;

    &__wrapper {
      grid-template-columns: repeat(12, 1fr);
    }
  }

  .card {
    grid-column: 1 / 13;

    &__inner {
      height: 450px;
      border-radius: 24px;
    }

    &__subtitle {
      font-size: 14px;
    }

    &__section {
      &--bottom {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }

    &__content {
      flex-direction: column;
    }

    &__title {
      font-size: 24px;
      margin: 16px 0 8px;
    }

    &__description {
      max-width: 100%;
      font-size: 14px;
      align-self: auto;
      letter-spacing: -0.03em;
    }

    &:first-child {
      grid-column: 1 / 13;

      .card__inner {
        height: 450px;
      }

      .card__section {
        display: flex;
      }
    }

    &:not(:first-child):not(:last-child) {
      margin: 0 16px;
    }
  }
}
</style>