<script>
import SocialBlock from '@/components/SocialBlock.vue'

export default {
  components: {
    SocialBlock,
  },
  // methods: {
  //   moveTitleText() {
  //     const titleLine = document.querySelector('.hero__title-line')
  //     const rightTitleLine = titleLine.getBoundingClientRect().right

  //     const animateTitleElems = document.querySelectorAll('.animate')
  //     animateTitleElems.forEach((elem) => {
  //       const rightAnimateText = elem.getBoundingClientRect().right
  //       const move = rightTitleLine - rightAnimateText
  //       elem.animate(
  //         [
  //           { transform: 'translateX(0)' },
  //           { transform: `translateX(${move}px)` }
  //         ],
  //         {
  //           delay: 1000,
  //           duration: 3000,
  //           fill: 'forwards',
  //           easing: 'ease-out'
  //         }
  //       )
  //     })
  //   }
  // },
  // mounted() {
  //   this.moveTitleText()
  //   window.addEventListener('resize', this.moveTitleText)
  // },
  // unmounted() {
  //   window.removeEventListener('resize', this.moveTitleText)
  // }
}
</script>

<template>
  <section class="hero">
    <div class="wrapper">
      <div class="hero__content">
        <div class="hero__title">
          <div class="hero__title-line">
            <p class="hero__title-text">Создаем бренды</p>
          </div>
          <div class="hero__title-line">
            <p class="hero__title-text">
              и ци<span class="italic">ф</span>ровые
            </p>
          </div>
          <div class="hero__title-line">
            <p class="hero__title-text">
              <span class="italic">продукты </span>&nbsp;
            </p>
            <p class="hero__title-text animate">
              в п<span class="italic">а</span>ртнерстве
            </p>
          </div>
          <div class="hero__title-line">
            <p class="hero__title-text animate">
              с ва<span class="italic">м</span>и
            </p>
          </div>
        </div>
        <div class="hero__subtitle">
          Компания Oktta более пяти лет помогает бизнесу налаживать эффективное
          взаимодействие с клиентами в цифровой среде.
        </div>
        <social-block
          class="hero__contacts"
          :light="true"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: relative;
  }

  &__title {
    grid-column: 1 / 5;

    &-line {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    &-text {
      font: $font-h1-gilroy;
      letter-spacing: -0.04em;

      .italic {
        font: $font-h1-playfair;
      }
    }
  }

  &__subtitle {
    grid-column: 2 / 3;
    color: $color-text-secondary;
    font: $font-small-gilroy;
    text-indent: 56px;
  }

  &__contacts {
    position: absolute;
    max-width: 230px;
    flex-wrap: wrap;
    justify-content: flex-end;
    bottom: -260px;
    right: 0;
  }
}

@media (max-width: 1024px) {
  .hero {
    &__content {
      row-gap: 44px;
    }

    &__title {
      &-text {
        font-size: 64px;

        .italic {
          font-size: 64px;
        }
      }
    }

    &__subtitle {
      grid-column: 1 / 3;
      padding-left: 16%;
      text-align: justify;
    }

    &__contacts {
      position: static;
      grid-column: 3 / 5;
      max-width: 300px;
      justify-self: end;
      padding-right: 16%;
    }
  }
}

@media (max-width: 590px) {
  .hero {
    &__content {
      row-gap: 40px;
    }

    &__title {
      order: 2;

      &-text {
        font-size: 40px;

        .italic {
          font-size: 40px;
        }
      }
    }

    &__subtitle {
      order: 3;
      grid-column: 1 / 5;
      padding-inline: 46px 20px;
      justify-self: end;
    }

    &__contacts {
      order: 1;
      grid-column: 1 / 4;
      max-width: 250px;
      justify-content: flex-start;
      justify-self: start;
      padding: 32px 8px;
    }
  }
}
</style>