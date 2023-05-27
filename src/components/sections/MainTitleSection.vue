<script>
import gsap from 'gsap'

import SocialLinks from '@/components/SocialLinks.vue'

export default {
  components: {
    SocialLinks,
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
        <div class="hero__title">
          <h1 class="hero__title-text">
            Создаем бренды
          </h1>
          <h1 class="hero__title-text">
            и ци<span class="italic">ф</span>ровые
          </h1>
          <h1 class="hero__title-text">
            <span class="italic">продукты&nbsp;</span>
            <span class="animate">в п<span class="italic">а</span>ртнерстве</span>
          </h1>
          <h1 class="hero__title-text">
            <span class="animate">с ва<span class="italic">м</span>и</span>
          </h1>
        </div>
        <p class="hero__subtitle">
          Компания Oktta более пяти лет помогает бизнесу налаживать эффективное
          взаимодействие с клиентами в цифровой среде.
        </p>
        <social-links
          class="hero__contacts"
          :light="true"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  margin-top: 72px;

  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    position: relative;
  }

  &__title {
    grid-column: 1 / 5;

    &-text {
      font: $font-h1-gilroy;
      height: 5.4rem;
      letter-spacing: -0.04em;
      position: relative;

      .italic {
        font: $font-h1-playfair;
      }

      .animate {
        display: inline-block;
        position: absolute;
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
    z-index: 5;
  }
}

@media (max-width: 1100px) {
  .hero {
    &__content {
      gap: 44px 8px;
    }

    &__title {
      &-text {
        font-size: 64px;
        height: 3.6rem;

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

@media (max-width: 767px) {
  .hero {
    &__content {
      row-gap: 32px;
    }

    &__title {
      order: 2;

      &-text {
        font-size: 40px;
        height: 2.5rem;
        line-height: 100%;

        .italic {
          font-size: 40px;
        }
      }
    }

    &__subtitle {
      order: 3;
      grid-column: 1 / 5;
      padding: 0 20px 0 46px;
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

@media (max-width: 500px) {
  .hero__title-text {
    .animate {
      display: block;
    }

    &:nth-child(3) {
      height: 5rem;
    }
  }
}
</style>