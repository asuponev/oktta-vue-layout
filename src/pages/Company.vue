<script>
import gsap from 'gsap'

import PrinciplesList from '@/components/PrinciplesList.vue'
import ClientsList from '@/components/ClientsList.vue'
import PublicationsList from '@/components/PublicationsList.vue'
import NumbersSection from '@/components/sections/NumbersSection.vue'

export default {
  components: {
    PrinciplesList,
    ClientsList,
    PublicationsList,
    NumbersSection
  },
  methods: {
    moveTitleText() {
      document.querySelectorAll('.animate').forEach((elem) => {
        gsap.to(elem, {
          right: 0,
          duration: 3,
          delay: 1
        })
      })
    }
  },
  mounted() {
    this.moveTitleText()
  },
}
</script>

<template>
  <section class="hero">
    <div class="wrapper">
      <div class="hero__content">
        <div>
          <h1 class="hero__title title">
            Более <span class="title title--italic">четырех</span> лет
            помогаем
          </h1>
          <h1 class="hero__title title">
            бизнесу налаживать
          </h1>
          <h1 class="hero__title title">
            <span class="animate">
              эффект<span class="title title--italic">и</span>вное
              взаимоде<span class="title title--italic">й</span>ствие
            </span>
          </h1>
          <h1 class="hero__title title">
            с кли<span class="title title--italic">е</span>нтами
            <span class="animate">
              в ци<span class="title title--italic">ф</span>ровой среде
            </span>
          </h1>
        </div>
      </div>
    </div>
  </section>
  <section class="approach">
    <div class="wrapper">
      <div class="approach__content">
        <div class="approach__intro">
          <h2 class="title title--black title--italic">Подход</h2>
          <p class="approach__subtitle">
            Мы создаем функциональные и удобные
            продукты на основе исследований. Строим отношения с клиентами на
            принципах долгосрочного сотрудничества и помогаем бизнесу решать
            продуктовые задачи.
          </p>
        </div>
        <div class="approach__illustration">
          <div class="approach__item">
            <span>Функционал и удобство</span>
          </div>
          <div class="approach__item">
            <span>Визуальная коммуникация</span>
          </div>
          <div class="approach__item">
            <span>Аналитика и исследования</span>
          </div>
          <div class="approach__item">
            <span>Принципы долгосрочного сотрудничества</span>
          </div>
          <div class="approach__illustration-center"></div>
        </div>
      </div>
    </div>
  </section>
  <section class="principles">
    <div class="wrapper">
      <div class="principles__content">
        <h2 class="title">
          Прин<span class="title title--italic">ц</span>ипы
        </h2>
        <principles-list />
      </div>
    </div>
  </section>
  <section class="clients">
    <div class="clients__content">
      <h2 class="title title--black">
        Кл<span class="title title--italic title--black">и</span>енты
      </h2>
      <clients-list />
    </div>
  </section>
  <numbers-section />
  <section class="publications">
    <div class="wrapper">
      <div class="publications__content">
        <div>
          <h2 class="title title--black">
            Публик<span class="title title--italic title--black">а</span>ции
          </h2>
        </div>
        <publications-list />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  max-width: 1440px;
}

.hero {
  height: 672px;
  background: $color-general-dark;
  background-image: url("@/assets/images/company-bg.png");
  background-repeat: no-repeat;
  background-position: -90px -970px;
  background-size: cover;

  &__content {
    padding: 349px 0 20px;
  }

  &__title {
    position: relative;
    height: 4.7rem;

    .animate {
      display: inline-block;
      position: absolute;
    }
  }
}

.title {
  font: $font-page-title-gilroy;
  color: $color-general-white;
  letter-spacing: -0.04em;

  &--italic {
    font: $font-page-title-playfair;
  }

  &--black {
    color: $color-general-dark;
  }
}

.approach {
  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8px;
    padding: 100px 0;
  }

  &__intro {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__subtitle {
    color: $color-text-secondary;
    letter-spacing: -0.03em;
    max-width: 563px;
  }

  &__illustration {
    position: relative;
    align-self: center;
    width: 483px;
    height: 483px;
    margin: 8px 0;

    &-center {
      position: absolute;
      width: 250px;
      height: 250px;
      background: $color-general-green;
      border-radius: 50%;
      z-index: 1;
      top: 125px;
      left: 125px;
    }
  }

  &__item {
    position: absolute;
    width: 250px;
    height: 250px;
    background: $color-bg-dark;
    border: 1.5px solid rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px;

    span {
      color: $color-general-white;
      font-size: 21.7px;
      line-height: 1.5;
      letter-spacing: -0.03em;
      text-align: center;
    }

    &:nth-child(1) {
      top: 0;
      left: 0;
      z-index: 2;
    }

    &:nth-child(2) {
      top: 0;
      right: 0;
      z-index: 3;
    }

    &:nth-child(3) {
      bottom: 0;
      left: 0;
      z-index: 3;
    }

    &:nth-child(4) {
      bottom: 0;
      right: 0;
      z-index: 2;
    }
  }
}

.principles {
  background: $color-general-dark;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 52px;
    padding: 100px 0;
  }
}

.clients {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 58px;
    padding: 100px 0 100px;
  }
}

.publications {
  &__content {
    padding: 100px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
}

@media (max-width: 1280px) {
  .hero {
    background-position: -10px -850px;
  }

  .approach {
    &__content {
      grid-column-gap: 32px;
    }
  }
}

@media (max-width: 1024px) {
  .hero {
    height: 972px;
    background-position: -250px -520px;
    background-size: 175%;

    &__content {
      padding: 779px 0 20px;
    }

    &__title {
      height: 2.65rem;
    }
  }

  .title {
    font-size: 40px;
  }

  .principles {
    &__content {
      gap: 48px;
    }
  }

  .publications__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
}

@media (max-width: 768px) {
  .approach {
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      padding: 100px 0;
    }

    &__intro {
      align-items: center;
      text-align: center;
    }

    &__subtitle {
      max-width: 500px;
    }
  }

  .clients {
    &__content {
      gap: 32px;
    }
  }
}

@media (max-width: 590px) {
  .hero {
    height: 757px;
    background-position: -260px -168px;

    &__content {
      padding: 512px 0 16px;
    }

    &__title {
      height: 2rem;
      display: block;

      .animate {
        display: block;
        text-align: right;
      }

      &:nth-child(1),
      &:nth-child(3) {
        height: 4rem;
      }
    }
  }

  .title {
    font-size: 32px;
  }

  .approach {
    margin-top: 72px;
    
    &__intro {
      gap: 16px;
    }

    &__content {
      gap: 48px;
      padding-top: 24px;
    }

    &__illustration {
      width: 344px;
      height: 344px;

      &-center {
        width: 178px;
        height: 178px;
        top: 89px;
        left: 89px;
      }
    }

    &__item {
      width: 178px;
      height: 178px;

      span {
        font-size: 15.4px;
      }
    }
  }
}

@media (max-width: 360px) {
  .approach {
    &__illustration {
      width: 232px;
      height: 232px;

      &-center {
        width: 120px;
        height: 120px;
        top: 60px;
        left: 60px;
      }
    }

    &__item {
      width: 120px;
      height: 120px;

      span {
        font-size: 12px;
      }
    }
  }
}
</style>
