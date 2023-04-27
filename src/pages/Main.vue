<script>
export default {
  components: {},
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
  <section class="hero">
    <div class="wrapper">
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
              <span class="title__text title__text--italic">продукты </span
              >&nbsp;
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 30px;
}

.hero {
  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 5px;
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

    @media (max-width: 1110px) {
      font-size: 64px;
    }

    @media (max-width: 730px) {
      font-size: 40px;
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
  padding: 32px 24px 29px;
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
}

@media (max-width: 900px) {
  .wrapper {
    padding: 0 20px;
  }
  .hero {
    &__content {
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 20px;
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
}

@media (max-width: 500px) {
  .wrapper {
    padding: 0 16px;
  }
  .hero {
    &__content {
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 20px;
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
}
</style>
