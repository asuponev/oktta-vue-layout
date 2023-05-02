<script>
import ClientsList from '@/components/ClientsList.vue'
import ServicesSlider from '@/components/ServicesSlider.vue'
import PublicationsList from '@/components/PublicationsList.vue'

export default {
  components: {
    ClientsList,
    ServicesSlider,
    PublicationsList
  },
  data() {
    return {}
  },
  methods: {
    moveTitleText() {
      const titleLine = document.querySelector('.title__line')
      const rightTitleLine = titleLine.getBoundingClientRect().right

      const animateTitleElems = document.querySelectorAll('.animate')
      animateTitleElems.forEach((elem) => {
        const rightAnimateText = elem.getBoundingClientRect().right
        const move = rightTitleLine - rightAnimateText
        elem.animate(
          [
            { transform: 'translateX(0)' },
            { transform: `translateX(${move}px)` }
          ],
          {
            delay: 1000,
            duration: 3000,
            fill: 'forwards',
            easing: 'ease-out'
          }
        )
      })
    }
  },
  watch: {},
  mounted() {
    this.moveTitleText()
    window.addEventListener('resize', this.moveTitleText)
  },
  unmounted() {
    window.removeEventListener('resize', this.moveTitleText)
  }
}
</script>

<template>
  <div class="wrapper">
    <section class="hero">
      <div class="hero__content">
        <div class="title">
          <div class="title__line">
            <p class="title__text">Создаем бренды</p>
          </div>
          <div class="title__line">
            <p class="title__text">
              и ци<span class="title__text title__text--italic">ф</span>ровые
            </p>
          </div>
          <div class="title__line">
            <p class="title__text">
              <span class="title__text title__text--italic">продукты </span>&nbsp;
            </p>
            <p class="title__text animate">
              в п<span class="title__text title__text--italic">а</span>ртнерстве
            </p>
          </div>
          <div class="title__line">
            <p class="title__text animate">
              с ва<span class="title__text title__text--italic">м</span>и
            </p>
          </div>
        </div>
        <div class="subtitle">
          Компания Oktta более пяти лет помогает бизнесу налаживать эффективное
          взаимодействие с клиентами в цифровой среде.
        </div>
        <div class="contacts">
          <div class="tags">
            <div class="tags__item">behance</div>
            <div class="tags__item">linkedin</div>
            <div class="tags__item">dprofile</div>
          </div>
          <div class="tags">
            <div class="tags__item">vc.ru</div>
            <div class="tags__item">instagram</div>
            <div class="tags__item">ya.music</div>
          </div>
        </div>
        <div class="preview">
          <button class="preview__button">все кейсы</button>
        </div>
        <div class="cards">
          <div class="card card--first">
            <div class="card__section">
              <p class="card__subtitle">наши кейсы</p>
              <p class="card__counter">01 — 05</p>
            </div>
            <div class="card__section">
              <div class="card__content">
                <div class="tags">
                  <div class="tags__item">аналитика</div>
                  <div class="tags__item">дизайн</div>
                  <div class="tags__item">фронтенд</div>
                </div>
                <p class="card__title">Видеосервис для детей Kidsee</p>
              </div>
              <p class="card__description">
                Видеосервис для детей с безопасным контентом
              </p>
            </div>
          </div>
          <div class="card card--second"></div>
          <div class="card">
            <div class="card__section">
              <p class="card__subtitle">наши кейсы</p>
              <p class="card__counter">01 — 05</p>
            </div>
            <div class="card__section">
              <div class="card__content">
                <div class="tags">
                  <div class="tags__item">аналитика</div>
                  <div class="tags__item">дизайн</div>
                  <div class="tags__item">фронтенд</div>
                </div>
                <p class="card__title">
                  Сеть продуктовых магазинов
                  <span class="card__title card__title--italic">
                                                        “Вкустер”
                                                      </span>
                </p>
              </div>
              <p class="card__description">
                Сервис доставки продуктов для нового ритейлера
              </p>
            </div>
          </div>
        </div>
        <button class="button">все кейсы</button>
      </div>
    </section>
    <section class="services">
      <div class="services__intro">
        <h2 class="services__title">Услуги</h2>
        <p class="services__subtitle">
          Детальное исследование, интуитивно понятный дизайн и высокое качество
          разработки позволяют нам ответить на все запросы клиента и создать
          востребованный продукт.
        </p>
        <div class="services__buttons">
          <button>
            <svg>
              <use xlink:href="@/assets/icons/_sprite.svg#slider-left">
              </use>
            </svg>
          </button>
          <button>
            <svg>
              <use xlink:href="@/assets/icons/_sprite.svg#slider-right">
              </use>
            </svg>
          </button>
        </div>
      </div>
      <services-slider />
    </section>
    <section class="clients">
      <div class="clients__intro">
        <p class="clients__subtitle">
          Прозрачность в работе, доверие, открытость новому и нацеленность на
          результат лежат в основе видения ценностей нашей компании.
        </p>
        <h2 class="clients__title">
          Поработали более чем с <span class="italic">85 клиентами</span>
        </h2>
      </div>
      <clients-list />
    </section>
    <section class="publications">
      <p class="publications__title">
        Публик<span class="italic">а</span>ции
      </p>
      <publications-list />
    </section>
  </div>
</template>

<style lang="scss" scoped>

.hero {
  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 5px;
    padding: 0 30px;
  }
}

.title {
  grid-area: 1 / 1 / 5 / 5;

  &__line {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__text {
    font: $font-h1-gilroy;
    letter-spacing: -0.04em;

    &--italic {
      font: $font-h1-playfair;
    }
  }
}

.subtitle {
  grid-area: 5 / 2 / 6 / 3;
  color: $color-text-secondary;
  font: $font-small-gilroy;
  text-indent: 56px;
}

.contacts {
  grid-area: 10 / 4 / 11 / 5;
  justify-self: end;
}

.preview {
  grid-area: 6 / 2 / 13 / 4;
  border-radius: 24px;
  height: 492px;
  z-index: -1;
  background: url('@/assets/images/mock-content/case-card-kidsee-small.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &__button {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: none;
    font: $font-button;
    background: $color-general-green;
    color: $color-general-dark;
    position: absolute;
    top: 13%;
    left: -17%;
    transform: rotate(24.32deg);
  }
}

.cards {
  grid-area: 12 / 1 / 15 / 5;
  position: relative;
}

.card {
  border-radius: 32px;
  height: 592px;
  width: 100%;
  background: url('@/assets/images/mock-content/case-card-vkuster.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 28px 24px 29px;
  color: $color-general-white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    gap: 24px;
    max-width: 577px;
  }

  &__title {
    font: $font-card-title-gilroy;
    letter-spacing: -0.04em;

    &--italic {
      font: $font-card-title-playfair;
    }
  }

  &__description {
    max-width: 266px;
    align-self: flex-end;
    letter-spacing: -0.03em;
  }

  &--first {
    display: none;
    background: url('@/assets/images/mock-content/case-card-kidsee-xs.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &--second {
    position: absolute;
    background: url('@/assets/images/mock-content/case-card-skillcode.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
    top: -16px;

    @media (min-width: 1441px) {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
}

.button {
  grid-area: 16 / 1 / 17 / 5;
  height: 60px;
  border-radius: 40px;
  border: none;
  color: $color-general-white;
  background: $color-general-dark;
  font: $font-button;
  letter-spacing: -0.03em;
  margin-top: 12px;
  cursor: pointer;
}

.tags {
  display: flex;
  margin-bottom: -6px;

  &__item {
    padding: 3px 12px;
    background: $color-general-white;
    color: $color-general-dark;
    border: 1px solid $color-general-dark;
    border-radius: 100px;
    letter-spacing: -0.03em;
    margin-left: -10px;

    &:first-child {
      margin-left: 0;
    }
  }
}

.services {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__intro {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    padding: 0 30px;
  }

  &__title {
    grid-area: 1 / 3 / 2 / 4;
    font: $font-h1-playfair;
    letter-spacing: -0.04em;
  }

  &__subtitle {
    grid-area: 2 / 3 / 3 / 4;
    color: $color-text-secondary;
    font: $font-small-gilroy;
    text-indent: 56px;
    max-width: 290px;
  }

  &__buttons {
    grid-area: 2 / 4 / 3 / 5;
    align-self: end;
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 12px;

    button {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $color-divider;
      border-radius: 50%;
      background: inherit;
      cursor: pointer;

      svg {
        width: 10px;
        height: 10px;
        stroke: $color-general-black;
      }
    }
  }
}

.clients {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  &__intro {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    padding: 0 30px;
  }

  &__title {
    grid-area: 2 / 1 / 3 / 5;
    text-align: center;
    justify-self: center;
    font: $font-h1-gilroy;
    letter-spacing: -0.04em;
    max-width: 1020px;

    .italic {
      font: $font-h1-playfair;
      font-variant-numeric: lining-nums;
    }
  }

  &__subtitle {
    grid-area: 1 / 2 / 2 / 3;
    color: $color-text-secondary;
    font: $font-small-gilroy;
    text-indent: 56px;
  }
}

.publications {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 112px 30px 96px;

  &__title {
    grid-column: 1;
    font: $font-h1-gilroy;
    letter-spacing: -0.04em;
    max-width: 1020px;

    .italic {
      font: $font-h1-playfair;
      font-variant-numeric: lining-nums;
    }
  }
}

@media (max-width: 1280px) {
  .hero {
    &__content {
      grid-column-gap: 10px;
    }
  }

  .preview {
    height: 440px;

    &__button {
      top: 15%;
      left: -12%;
    }
  }

  .cards {
    grid-area: 12 / 1 / 16 / 5;
  }

  .button {
    margin-top: 20px;
  }

  .clients {
    gap: 55px;

    &__intro {
      grid-row-gap: 16px;
    }
  }
}

@media (max-width: 1110px) {

  .title__text,
  .publications__title,
  .clients__title,
  .services__title {
    font-size: 64px;

    .italic {
      font-size: 64px;
    }
  }
}

@media (max-width: 1000px) {
  .publications {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}

@media (max-width: 900px) {

  .hero {
    &__content {
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 20px;
      padding: 0 20px;
    }
  }

  .title {
    grid-area: 1 / 1 / 1 / 13;
  }

  .subtitle {
    grid-area: 3 / 2 / 4 / 9;
    text-indent: 42px;
    text-align: justify;
  }

  .contacts {
    grid-area: 3 / 11 / 4 / 12;
  }

  .preview {
    grid-area: 5 / 2 / 6 / 12;
    height: 393px;

    &__button {
      display: none;
    }
  }

  .cards {
    grid-area: 8 / 1 / 9 / 13;
  }

  .card {
    height: 740px;
    padding: 16px;
    position: relative;

    &__subtitle {
      font-size: 14px;
    }

    &__section:last-child {
      position: absolute;
      bottom: -110px;
      left: 0;
      width: 100%;
      color: $color-general-dark;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-width: 360px;
    }

    &__title {
      font-size: 24px;
    }

    &__description {
      max-width: 204px;
      align-self: flex-end;
      letter-spacing: -0.03em;
    }

    &--second {
      position: absolute;
    }
  }

  .button {
    grid-area: 14 / 1 / 15 / 13;
    height: 46px;
    font-size: 14px;
    margin-top: 12px;
  }

  .tags {
    &__item {
      font-size: 14px;
    }
  }

  .services {
    padding-top: 100px;
    gap: 32px;

    &__intro {
      grid-column-gap: 10px;
      grid-row-gap: 30px;
      padding: 0 20px;
    }


    &__subtitle {
      grid-area: 2 / 3 / 3 / 5;
    }

    &__buttons {
      display: none;
    }
  }

  .clients {
    gap: 48px;

    &__intro {
      grid-column-gap: 10px;
      grid-row-gap: 30px;
      padding: 0 20px;
    }

    &__title {
      max-width: 670px;
    }

    &__subtitle {
      grid-area: 1 / 2 / 2 / 4;
    }
  }

  .publications {
    padding: 100px 20px 91px;
  }
}

@media (max-width: 730px) {

  .title__text,
  .publications__title,
  .clients__title,
  .services__title {
    font-size: 40px;

    .italic {
      font-size: 40px;
    }
  }
}

@media (max-width: 500px) {

  .hero {
    &__content {
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 20px;
      padding: 0 16px;
    }
  }

  .title {
    grid-area: 5 / 1 / 6 / 13;
  }

  .subtitle {
    grid-area: 7 / 2 / 8 / 12;
    text-indent: 42px;
    text-align: justify;
  }

  .contacts {
    margin-top: 32px;
    grid-area: 1 / 1 / 2 / 9;
    justify-self: start;

    .tags__item {
      font-size: 16px;
    }
  }

  .preview {
    display: none;
  }

  .cards {
    grid-area: 9 / 1 / 10 / 13;
    display: flex;
    flex-direction: column;
    gap: 170px;
  }

  .card {
    height: 450px;
    padding: 16px;
    position: relative;

    &__subtitle {
      font-size: 14px;
    }

    &__section:last-child {
      position: absolute;
      top: 458px;
      left: 0;
      width: 100%;
      color: $color-general-dark;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 8px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
    }

    &__title {
      font-size: 24px;
    }

    &__description {
      max-width: 100%;
      font-size: 14px;
      align-self: auto;
      letter-spacing: -0.03em;
    }

    &--first {
      display: flex;
    }

    &--second {
      position: absolute;
      top: calc(100% - 466px);
    }
  }

  .button {
    grid-area: 16 / 1 / 17 / 13;
    height: 46px;
    font-size: 14px;
    margin-top: 0;
  }

  .tags {
    &__item {
      font-size: 14px;
    }
  }

  .services {
    padding-top: 44px;
    gap: 16px;

    &__intro {
      grid-column-gap: 0px;
      grid-row-gap: 26px;
      padding: 0 16px;
    }

    &__title {
      grid-area: 1 / 2 / 2 / 4;
    }

    &__subtitle {
      grid-area: 2 / 2 / 3 / 5;
      max-width: 230px;
    }
  }

  .clients {
    gap: 48px;

    &__intro {
      grid-column-gap: 0px;
      grid-row-gap: 32px;
      padding: 0 16px;
    }

    &__subtitle {
      grid-area: 1 / 1 / 2 / 5;
      max-width: 315px;
    }
  }

  .publications {
    padding: 96px 16px 118px;
    gap: 52px;
  }
}
</style>
