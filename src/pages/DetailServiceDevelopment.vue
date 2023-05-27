<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Mousewheel } from 'swiper'
import 'swiper/css'

import CardTags from '@/components/CardTags.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'

import bgKidseeImage from '@/assets/images/mock-content/case-card-services.jpg'
import bgSkillcodeImage from '@/assets/images/mock-content/case-card-skillcode.jpg'

SwiperCore.use([Mousewheel])
export default {
  components: {
    ServicesSection,
    CardTags,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slideItems: [
        {
          id: 1,
          title: 'frontend-разработка',
          description: 'создаем качественный фронтенд с интуитивными элементами интерфейса. организуем логичную работу продукта для оперативного и понятного взаимодействия.',
          url: '',
        },
        {
          id: 2,
          title: 'интеграции с внешними сервисами',
          description: 'настраиваем интеграцию со сторонними сервисами, которые помогут оптимизировать процессы: 1c, crm, api, системы эквайринга, онлайн-кассы.',
          url: '',
        },
        {
          id: 3,
          title: '1с-битрикс',
          description: 'разрабатываем интернет-магазины и корпоративные сайты на базе 1с-битрикс. являемся сертифицированными партнёрами 1с-битрикс.',
          url: '',
        },
        {
          id: 4,
          title: 'ios и android приложения',
          description: 'разрабатываем нативные и кроссплатформенные приложения на базе ios и android.',
          url: '',
        },
      ],
      graphItems: [
        {
          title: 'Определяем основные сегменты ца',
          timeline: '1 неделя'
        },
        {
          title: 'Проводим анкетирование пользователей',
          timeline: '1 неделя'
        },
        {
          title: 'Проводим исследование по методу custdev',
          timeline: '2 недели'
        },
        {
          title: 'Сегментируем ЦА',
          timeline: '1 неделя'
        },
        {
          title: 'Проводим качественное тестирование',
          timeline: '3 недели'
        },
      ],
      caseItems: [
        {
          id: 1,
          title: 'Видеосервис Kidsee',
          description: 'Детский видеосервис Kidsee',
          tags: ['аналитика', 'дизайн', 'фронтенд'],
          image: bgKidseeImage
        },
        {
          id: 2,
          title: 'Сайт HR платформы SkillCode',
          description: 'Сайт для уникальной hr платформы, с помощью которой бизнес повышает свою эффективность путем оценки своего кадрового потенциала',
          tags: ['дизайн', 'разработка'],
          image: bgSkillcodeImage
        },
      ]
    }
  },
  methods: {
    blockPage() {
      document.querySelector('body').style.overflow = 'hidden'
    },
    scrollAnimation() {
      if (document.querySelector('.intro')) {
        document.querySelector('.intro').classList.add('scroll')
        document.querySelector('.hero').classList.remove('hidden')
        document.querySelector('.hero__slider').classList.remove('start')
        setTimeout(() => {
          document.querySelector('body').removeAttribute('style')
          document.querySelector('.intro').remove()
        }, 3000)

        window.removeEventListener('wheel', this.scrollAnimation)
        window.removeEventListener('touchmove', this.scrollAnimation)
      }
    },
  },
  mounted() {
    this.blockPage()
    window.addEventListener('wheel', this.scrollAnimation)
    window.addEventListener('touchmove', this.scrollAnimation)
  },
}
</script>

<template>
  <div class="container">
    <section class="intro">
      <div class="wrapper">
        <div class="intro__content">
          <div class="intro__subtitle">
            <span>разрабатываем технологичные и эффективные решения для любых задач</span>
          </div>
          <h1 class="intro__title">
            Моби<span class="italic">л</span>ьная и
            в<span class="italic">е</span>б-раз<span class="italic">р</span>аботка
          </h1>
          <button class="intro__button">
            оставить заявку
            <svg>
              <use xlink:href="@/assets/icons/_sprite.svg#arrow-link" />
            </svg>
          </button>
        </div>
      </div>
    </section>
    <section class="hero hidden">
      <div class="wrapper">
        <div class="hero__content">
          <div class="hero__subtitle">
            <span>разрабатываем технологичные и эффективные решения для любых задач</span>
          </div>
          <h1 class="hero__title">
            Моби<span class="italic">л</span>ьная и
            в<span class="italic">е</span>б-раз<span class="italic">р</span>аботка
          </h1>
          <swiper
            :slidesPerView="'auto'"
            :spaceBetween="8"
            :mousewheel="{
              releaseOnEdges: true
            }"
            :grabCursor="true"
            :breakpoints="{
              1024: {
                spaceBetween: 32
              }
            }"
            class="hero__slider start"
          >
            <swiper-slide
              v-for="item in slideItems"
              :key="item.id"
              class="hero__item"
            >
              <div class="hero__item-content">
                <p class="hero__item-id">(0{{ item.id }})</p>
                <h3 class="hero__item-title">{{ item.title }}</h3>
                <p class="hero__item-description">{{ item.description }}</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
    <section class="plan">
      <div class="wrapper">
        <div class="plan__content">
          <h2 class="plan__title">
            Пл<span class="italic">а</span>н р<span class="italic">а</span>боты
          </h2>
          <div class="plan__visual">
            <div class="plan__lines">
              <div
                v-for="(item, index) in graphItems"
                :key="index"
                class="plan__line"
              >
                <div class="plan__item">
                  <p class="plan__item-text">{{ item.title }}</p>
                  <div class="plan__item-timeline">
                    <svg>
                      <use xlink:href="@/assets/icons/_sprite.svg#clock" />
                    </svg>
                    <span>{{ item.timeline }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="experience">
      <div class="wrapper">
        <div class="experience__content">
          <h2 class="experience__title">
            На<span class="italic">ш</span> оп<span class="italic">ы</span>т
          </h2>
          <div class="cards">
            <div class="cards__wrapper">
              <div
                v-for="(item, index) in caseItems"
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
                      0{{ index + 1 }} — 0{{ caseItems.length }}
                    </p>
                  </div>
                  <div class="card__section">
                    <div class="card__content">
                      <card-tags :tags="item.tags" />
                      <h3 class="card__title">
                        {{ item.title }}
                      </h3>
                    </div>
                    <p class="card__description">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <services-section />
  </div>
</template>

<style lang="scss" scoped>
.intro {
  position: absolute;
  padding-bottom: 30px;
  z-index: 2;
  transition: transform 2s ease-in-out;
  width: 100%;

  &__content {
    background: $color-bg-position-card;
    padding: 70px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 35px;
    border-radius: 32px;
    height: calc(100vh - 102px);
    height: max((var(--app-height) - 102px), 580px);
  }

  &__title {
    font: $font-h1-gilroy;
    text-align: center;
    line-height: 90%;
    letter-spacing: -0.04em;

    .italic {
      font: $font-h1-playfair;
    }
  }

  &__subtitle {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    span {
      grid-column: 3 / 4;
      text-indent: 170px;
      letter-spacing: -0.03em;
      color: $color-text-secondary;
      max-width: 290px;
    }
  }

  &__button {
    width: 218px;
    height: 52px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font: $font-button;
    letter-spacing: -0.03em;
    color: $color-general-white;
    background: $color-general-dark;
    border: none;
    cursor: pointer;
    border-radius: 40px;
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    svg {
      width: 13px;
      height: 13px;
      stroke: $color-general-white;
      transition: stroke 0.2s ease-in-out, transform 0.2s ease-in-out;
    }

    &:hover {
      background: $color-general-green;
      color: $color-general-dark;

      svg {
        stroke: $color-general-dark;
        transform: rotate(45deg);
      }
    }
  }

  &.scroll {
    transform: translateX(-100vw);
  }
}

.hero {
  padding-bottom: 30px;

  &__content {
    background: $color-bg-dark;
    padding-top: 70px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 35px;
    border-radius: 32px;
    height: calc(100vh - 102px);
    height: max((var(--app-height) - 102px), 580px);
    position: relative;
    overflow: hidden;
  }

  &__title {
    font: $font-h1-gilroy;
    text-align: center;
    line-height: 90%;
    letter-spacing: -0.04em;
    color: $color-general-green;
    padding: 0 70px;

    .italic {
      font: $font-h1-playfair;
    }
  }

  &__subtitle {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    span {
      grid-column: 3 / 4;
      text-indent: 170px;
      letter-spacing: -0.03em;
      color: $color-general-white;
      opacity: 0.5;
      max-width: 290px;
    }
  }

  &__slider {
    position: absolute;
    top: 244px;
    left: 0;
    transition: left 3s ease-in-out;

    &.start {
      left: 60%;
    }
  }

  &__item {
    &-content {
      min-width: 440px;
      height: 296px;
      background: rgba(23, 23, 23, 0.01);
      border: 1px solid rgba(129, 129, 129, 0.1);
      border-radius: 24px;
      -webkit-backdrop-filter: blur(8px) !important;
      -moz-backdrop-filter: blur(8px) !important;
      backdrop-filter: blur(8px) !important;
      color: $color-general-white;
      padding: 32px;
      display: flex;
      flex-direction: column;
    }

    &-id {
      font: $font-small-playfair;
    }

    &-title {
      font: $font-h3-gilroy;
      letter-spacing: -0.04em;
      margin: 64px 0 20px;
    }

    &-description {
      font-size: 14px;
      letter-spacing: -0.03em;
      line-height: 1.5;
      opacity: 0.5;
    }

    &:last-child {
      padding-right: 70px;
    }
  }

  &.hidden {
    opacity: 0;
  }
}

.plan {
  &__content {
    background: $color-bg-dark;
    height: 635px;
    border-radius: 32px;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    color: $color-general-white;
  }

  &__title {
    font: $font-h1-gilroy;
    line-height: 105%;
    letter-spacing: -0.02em;
    padding: 0 70px;

    .italic {
      font: $font-h1-playfair;
    }
  }

  &__lines {
    display: flex;
    flex-direction: column;
    padding: 0 70px;
  }

  &__line {
    padding: 12px 0;
    border-top: 1px dashed;
    border-image: url('@/assets/elements/custom-border-dashed-gradient.svg') 30;
    display: flex;
    align-items: center;

    &:last-child {
      border-bottom: 1px dashed;
    }

    &:nth-child(2) {
      padding-left: 12%;
    }

    &:nth-child(3),
    &:nth-child(4) {
      padding-right: 37%;
      justify-content: flex-end;
    }

    &:nth-child(5) {
      justify-content: flex-end;
    }
  }

  &__item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 29px;
    height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    letter-spacing: -0.03em;
    padding: 0 6px 0 24px;

    &-timeline {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 0 16px 0 12px;
      color: $color-general-green;
      background: rgba(168, 253, 50, 0.1);
      border-radius: 40px;
      height: 36px;

      svg {
        width: 14px;
        height: 14px;
        fill: $color-general-green;
      }
    }
  }
}

.experience {
  margin-top: 100px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 72px;
  }

  &__title {
    font: $font-h1-gilroy;
    letter-spacing: -0.04em;

    .italic {
      font: $font-h1-playfair;
    }
  }
}

.cards {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  grid-area: 1 / 1 / 2 / 5;

  &__inner {
    border-radius: 32px;
    height: 592px;
    width: 100%;
    padding: 24px 24px 29px;
    color: $color-general-white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__section {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    gap: 20px;
    max-width: 577px;
  }

  &__title {
    font: $font-card-title-gilroy;
    letter-spacing: -0.04em;
  }

  &__description {
    max-width: 270px;
    padding-right: 61px;
    align-self: flex-end;
    letter-spacing: -0.03em;
  }

  &:first-child {
    z-index: 2;
  }

  &:not(:first-child) {
    transform: translateY(-16px);
    margin: 0 32px;
  }
}

.services {
  margin-bottom: 100px;
}

.swiper {
  width: 100%;
  height: 100%;
  padding: 0 70px;
}

.swiper-slide {
  width: 440px;
}

@media (max-width: 1280px) {
  .plan {
    &__visual {
      overflow-x: scroll;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        width: 0;
      }
    }

    &__line {
      width: 1080px;

      &:nth-child(2) {
        padding-left: 73px;
      }

      &:nth-child(3),
      &:nth-child(4) {
        padding-right: 382px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .intro {
    padding-bottom: 20px;

    &__content {
      padding-top: 207px;
      height: calc(100vh - 92px);
      height: max((var(--app-height) - 92px), 720px);
    }

    &__title {
      font-size: 64px;

      .italic {
        font-size: 64px;
      }
    }

    &__subtitle {
      gap: 8px;

      span {
        grid-column: 4 / 5;
        text-indent: 174px;
      }
    }

    &__button {
      margin-top: 6px;
      width: 203px;
      font-size: 16px;
    }
  }

  .hero {
    padding-bottom: 20px;

    &__content {
      padding-top: 207px;
      height: max((var(--app-height) - 92px), 720px);
    }

    &__title {
      font-size: 64px;

      .italic {
        font-size: 64px;
      }
    }

    &__subtitle {
      gap: 8px;

      span {
        grid-column: 3 / 5;
        text-indent: 174px;
      }
    }

    &__slider {
      top: 381px;
    }

    &__item {
      &-content {
        min-width: 360px;
      }

      &-title {
        font-size: 24px;
      }
    }
  }

  .plan {
    &__content {
      height: 595px;
      padding-top: 48px;
      gap: 40px;
    }

    &__title {
      font-size: 64px;
      padding: 0 48px;

      .italic {
        font-size: 64px;
      }
    }

    &__lines {
      padding: 0 48px;
    }
  }

  .experience {
    &__content {
      gap: 64px;
    }

    &__title {
      font-size: 64px;

      .italic {
        font-size: 64px;
      }
    }
  }

  .card {
    &__inner {
      height: 797px;
      padding: 16px;
    }

    &__subtitle {
      font-size: 14px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-width: 360px;
    }

    &__title {
      font-size: 32px;
    }

    &__description {
      max-width: 204px;
      padding-right: 40px;
    }

    &:not(:first-child) {
      margin: 0 24px;
    }
  }

  .swiper {
    padding: 0 48px;
  }

  .swiper-slide {
    width: 360px;
  }
}

@media (max-width: 590px) {
  .intro {
    padding-bottom: 16px;

    &__content {
      padding: 131px 0 34px;
      height: calc(100vh - 88px);
      height: calc(var(--app-height) - 88px);
    }

    &__title {
      font-size: 40px;

      .italic {
        font-size: 40px;
      }
    }

    &__subtitle {
      span {
        grid-column: 1 / 5;
      }
    }

    &__button {
      margin-top: 0;
    }
  }

  .hero {
    padding-bottom: 16px;

    &__content {
      padding: 131px 0 34px;
      height: calc(100vh - 88px);
      height: calc(var(--app-height) - 88px);
    }

    &__title {
      padding: 0;
      font-size: 40px;

      .italic {
        font-size: 40px;
      }
    }

    &__subtitle {
      span {
        grid-column: 1 / 5;
      }
    }

    &__button {
      margin-top: 0;
    }

    &__slider {
      top: 277px;
    }

    &__items {
      padding: 0 34px;
    }

    &__item {
      &-content {
        min-width: 320px;
        height: 264px;
        padding: 24px;
      }

      &-title {
        font-size: 24px;
        margin: 52px 0 12px;
      }

      &:last-child {
        padding-right: 34px;
      }
    }
  }

  .plan {
    &__content {
      height: 538px;
      gap: 33px;
    }

    &__title {
      font-size: 40px;
      align-self: center;

      .italic {
        font-size: 40px;
      }
    }

    &__visual {
      &::-webkit-scrollbar {
        height: 4px;
      }

      &::-webkit-scrollbar-track {
        background: rgba(134, 144, 153, 0.2);
        border-radius: 25px;
        margin: 0 48px;
      }

      &::-webkit-scrollbar-thumb {
        background: $color-general-white;
        border-radius: 31px;
      }
    }

    &__lines {
      padding: 0 24px 5px;
    }
  }

  .experience {
    margin: 50px 0 56px;

    &__content {
      gap: 56px;
    }

    &__title {
      font-size: 40px;
      text-align: center;

      .italic {
        font-size: 40px;
      }
    }
  }

  .card {
    &__inner {
      height: 700px;
      padding: 16px;
      padding-bottom: 24px;
      border-radius: 24px;
    }

    &__section:last-child {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    &__description {
      max-width: 100%;
      align-self: auto;
    }

    &:not(:first-child) {
      margin: 0 16px;
    }
  }

  .swiper {
    padding: 0 24px;
  }

  .swiper-slide {
    width: 320px;
  }
}
</style>