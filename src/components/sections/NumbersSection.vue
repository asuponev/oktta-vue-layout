<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  methods: {
    parallaxNumbers() {
      gsap.to("[data-speed]", {
        scrollTrigger: {
          trigger: '.numbers',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          // markers: true
        },
        y: (i, el) => (parseFloat(el.getAttribute("data-speed"))) * 100,
        ease: "none"
      })
    }
  },
  mounted() {
    this.parallaxNumbers()
  }
}
</script>

<template>
  <section class="numbers">
    <div class="numbers__content">
      <h2 class="numbers__title">Об Okkta в цифрах</h2>
      <div
        class="numbers__item"
        data-speed="1.25"
      >
        <p class="numbers__item-title">12+</p>
        <p class="numbers__item-descr">профессионалов в команде</p>
      </div>
      <div
        class="numbers__item"
        data-speed="1.75"
      >
        <p class="numbers__item-title">2</p>
        <p class="numbers__item-descr">присутствие в странах</p>
      </div>
      <div
        class="numbers__item"
        data-speed="0.1"
      >
        <p class="numbers__item-title">85+</p>
        <p class="numbers__item-descr">реализованных проектов</p>
      </div>
      <div
        class="numbers__item"
        data-speed="1.9"
      >
        <p class="numbers__item-title">5+</p>
        <p class="numbers__item-descr">лет на рынке</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
    background: rgba(23, 23, 23, 0.01);
    -webkit-backdrop-filter: blur(8px) !important;
    -moz- : blur(8px) !important;
    backdrop-filter: blur(8px) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    color: $color-general-white;
    padding: 24px;
    transition: transform 0.3s ease-in-out;

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

  &__title {
    font: $font-page-title-gilroy;
    color: $color-general-white;
    letter-spacing: -0.04em;
  }
}

@media (max-width: 1280px) {
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

@media (max-width: 1024px) {
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

    &__title {
      font-size: 40px;
    }
  }
}

@media (max-width: 768px) {
  .numbers {
    background-position: top left -100px, top right -30px;
  }
}

@media (max-width: 590px) {
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

    &__title {
      font-size: 32px;
    }
  }
}
</style>