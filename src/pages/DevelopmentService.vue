<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import ServicesSection from '@/components/sections/ServicesSection.vue'
import ServiceCaseCard from '@/components/ServiceCaseCard.vue'
import bgKidseeImage from '@/assets/images/mock-content/case-card-services.jpg'
import bgSkillcodeImage from '@/assets/images/mock-content/case-card-skillcode.jpg'

export default {
  components: {
    ServiceCaseCard,
    ServicesSection,
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
          title: 'интеграции с внешними сервисами',
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
          title: 'Проводим исследование по методу custdev',
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
      document.querySelector('.intro').classList.add('scroll')
      document.querySelector('.hero').classList.remove('hidden')
      document.querySelector('.hero__slider').classList.remove('start')
      setTimeout(() => {
        document.querySelector('body').removeAttribute('style')
        document.querySelector('.intro').remove()
      }, 3000)

      window.removeEventListener('wheel', this.scrollAnimation)
      window.removeEventListener('touchmove', this.scrollAnimation)
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
              <use xlink:href="@/assets/icons/_sprite.svg#arrow-link">
              </use>
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
          <div class="case">
            <div class="case__block case__block--second">
              <service-case-card
                :caseItem="caseItems[1]"
                :number="2"
                :amount="3"
                :isFullInfo="false"
              />
            </div>
            <div class="case__block">
              <service-case-card
                :caseItem="caseItems[0]"
                :number="1"
                :amount="3"
              />
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
    padding-inline: 70px;

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
      -webkit-backdrop-filter: blur(82px) !important;
      -moz-backdrop-filter: blur(82px) !important;
      backdrop-filter: blur(82px) !important;
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
    padding-inline: 70px;

    .italic {
      font: $font-h1-playfair;
    }
  }

  &__lines {
    display: flex;
    flex-direction: column;
    padding-inline: 70px;
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
    padding-inline: 24px 6px;

    &-timeline {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding-inline: 12px 16px;
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
    gap: 64px;
  }

  &__title {
    font: $font-h1-gilroy;
    letter-spacing: -0.04em;

    .italic {
      font: $font-h1-playfair;
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

    &--second {
      transform: translateY(-16px);
      z-index: 2;
      padding-inline: 32px;
    }
  }
}

.services {
  margin-bottom: 100px;
}

.swiper {
  width: 100%;
  height: 100%;
  padding-inline: 70px;
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
      padding-inline: 48px;

      .italic {
        font-size: 64px;
      }
    }

    &__lines {
      padding-inline: 48px;
    }
  }

  .experience {
    &__content {
      gap: 56px;
    }

    &__title {
      font-size: 64px;

      .italic {
        font-size: 64px;
      }
    }
  }

  .case {
    grid-template-columns: repeat(12, 1fr);

    &__block {
      grid-area: 1 / 1 / 2 / 13;

      &--second {
        padding-inline: 16px;
      }
    }
  }

  .swiper {
    padding-inline: 48px;
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
      padding-inline: 34px;
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
      padding-inline: 24px;
      padding-bottom: 5px;
    }
  }

  .experience {
    margin: 50px 0 56px;

    &__content {
      gap: 56px;
    }

    &__title {
      display: none;
    }
  }

  .case {
    grid-template-columns: repeat(12, 1fr);

    &__block {
      grid-area: 1 / 1 / 2 / 13;

      &--second {
        padding-inline: 16px;
      }
    }
  }

  .swiper {
    padding-inline: 24px;
  }

  .swiper-slide {
    width: 320px;
  }
}
</style>