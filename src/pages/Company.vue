<script>
import PrinciplesList from '@/components/PrinciplesList.vue'
import ClientsList from '@/components/ClientsList.vue'
import PublicationsList from '@/components/PublicationsList.vue'

export default {
  components: {
    PrinciplesList,
    ClientsList,
    PublicationsList
  },
}
</script>

<template>
  <section class="hero">
    <div class="wrapper">
      <div class="hero__content">
        <p class="title">
          Более <span class="title title--italic">четырех</span> лет
          помогаем<br />
          бизнесу налаживать<br />
          эффективное взаимоде<span
            class="title title--italic">й</span>ствие<br />
          с клиентами в ци<span class="title title--italic">ф</span>ровой среде
        </p>
      </div>
    </div>
  </section>
  <section class="approach">
    <div class="wrapper">
      <div class="approach__content">
        <div class="approach__intro">
          <p class="title title--black title--italic">Подход</p>
          <p class="approach__subtitle">
            Мы создаем функциональные и удобные
            продукты на основе исследований. Строим отношения с клиентами на
            принципах долгосрочного сотрудничества и помогаем бизнесу решать
            продуктовые задачи.
          </p>
        </div>
        <div class="approach__illustration">
          <div class="approach__item">
            <span>Функционал и удобство</span>
          </div>
          <div class="approach__item">
            <span>Визуальная коммуникация</span>
          </div>
          <div class="approach__item">
            <span>Аналитика и исследования</span>
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
        <p class="title">
          Прин<span class="title title--italic">ц</span>ипы
        </p>
        <principles-list />
      </div>
    </div>
  </section>
  <section class="clients">
    <div class="wrapper">
      <div class="clients__content">
        <p class="title title--black">
          Кл<span class="title title--italic title--black">и</span>енты
        </p>
        <clients-list />
      </div>
    </div>
  </section>
  <section class="numbers">
    <div class="wrapper">
      <div class="numbers__content">
        <p class="title">Об Okkta в цифрах</p>
        <div class="numbers__item">
          <p class="numbers__item-title">12+</p>
          <p class="numbers__item-descr">профессионалов в команде</p>
        </div>
        <div class="numbers__item">
          <p class="numbers__item-title">2</p>
          <p class="numbers__item-descr">присутствие в странах</p>
        </div>
        <div class="numbers__item">
          <p class="numbers__item-title">85+</p>
          <p class="numbers__item-descr">реализованных проектов</p>
        </div>
        <div class="numbers__item">
          <p class="numbers__item-title">5+</p>
          <p class="numbers__item-descr">лет на рынке</p>
        </div>
      </div>
    </div>
  </section>
  <section class="publications">
    <div class="wrapper">
      <div class="publications__content">
        <p class="title title--black">
          Публик<span class="title title--italic title--black">а</span>ции
        </p>
        <publications-list />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 0;
}

.hero {
  height: 672px;
  background: $color-general-dark;
  background-image: url("@/assets/images/company-bg.png");
  background-repeat: no-repeat;
  background-position: -90px -970px;
  background-size: cover;

  &__content {
    padding: 349px 30px 20px;
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
    padding: 100px 30px;
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
    padding: 100px 30px;
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

.numbers {
  background: $color-general-dark;
  background-image: url("@/assets/images/numbers-bg1.png"), url("@/assets/images/numbers-bg2.png");
  background-repeat: no-repeat, no-repeat;
  background-position: top left, top right;

  &__content {
    width: 100%;
    height: 584px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item {
    position: absolute;
    width: 201px;
    border: 1px solid rgba(129, 129, 129, 0.1);
    border-radius: 24px;
    backdrop-filter: blur(34px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    color: $color-general-white;
    padding: 24px;

    &-title {
      font: $font-page-title-playfair;
      // font-variant-numeric: lining-nums;
      font-feature-settings: 'pnum' on, 'lnum' on;
      letter-spacing: -0.04em;
    }

    &-descr {
      font-size: 18px;
      opacity: 0.5;
      text-align: center;
      letter-spacing: -0.02em;
      font-feature-settings: 'kern' off;
    }

    &:nth-child(2) {
      top: 110px;
      left: 17.4%;
    }

    &:nth-child(3) {
      top: -64px;
      right: 26%;
    }

    &:nth-child(4) {
      bottom: -25px;
      left: 32.3%;
    }

    &:nth-child(5) {
      bottom: 130px;
      right: 16.8%;
    }

  }
}

.publications {
  &__content {
    padding: 100px 30px;
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

  .numbers {
    &__item {
      &:nth-child(2) {
        top: 110px;
        left: 14%;
      }

      &:nth-child(3) {
        top: -64px;
        right: 23%;
      }

      &:nth-child(4) {
        bottom: -25px;
        left: 30%;
      }

      &:nth-child(5) {
        bottom: 130px;
        right: 13%;
      }
    }
  }
}

@media (max-width: 1050px) {
  .hero {
    height: 972px;
    background-position: -250px -520px;
    background-size: 175%;

    &__content {
      padding: 779px 20px 20px;
    }
  }

  .title {
    font-size: 40px;
  }

  .principles {
    &__content {
      gap: 48px;
      padding-inline: 20px;
    }
  }

  .numbers {
    &__item {
      &-title {
        font-size: 40px;
      }

      &:nth-child(2) {
        top: 66px;
        left: 10%;
      }

      &:nth-child(3) {
        top: -24px;
        right: 20%;
      }

      &:nth-child(4) {
        bottom: -4px;
        left: 18%;
      }

      &:nth-child(5) {
        bottom: 135px;
        right: 10%;
      }
    }
  }

  .publications__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-inline: 20px;
  }
}

@media (max-width: 768px) {
  .approach {
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      padding: 100px 20px;
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

  .numbers {
    background-position: top left -100px, top right -30px;
  }
}

@media (max-width: 590px) {
  .hero {
    height: 757px;
    background-position: -260px -168px;

    &__content {
      padding: 512px 16px 16px;
    }
  }

  .title {
    font-size: 32px;
  }

  .approach {
    &__intro {
      gap: 16px;
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

  .numbers {
    background-image: url("@/assets/images/numbers-bg3.png"), url("@/assets/images/numbers-bg4.png");
    background-repeat: no-repeat, no-repeat;
    background-position: bottom 350px right, top 400px right;

    &__content {
      height: 700px;
    }

    &__item {
      &:nth-child(2) {
        top: 152px;
        left: calc(max(6%, 16px));
      }

      &:nth-child(3) {
        top: -46px;
        right: calc(max(5%, 16px));
      }

      &:nth-child(4) {
        bottom: -33px;
        left: calc(max(10%, 16px));
      }

      &:nth-child(5) {
        bottom: 175px;
        right: calc(max(5%, 16px));
      }
    }
  }

  .publications__content {
    padding-inline: 16px;
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
