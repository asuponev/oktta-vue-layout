<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/scrollbar'

SwiperCore.use([Mousewheel])
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<template>
  <section class="section">
    <div class="wrapper">
      <div class="section__content">
        <div class="section__block">
          <div class="section__intro">
            <h2 class="section__title">
              Кар<span class="italic">ь</span>ера в Oktta
            </h2>
            <p class="section__description">
              Опираясь на данные веб-аналитики, мы изучили
              типы пользователей, особенности их поведения.
            </p>
          </div>
        </div>
        <div class="section__block">
          <swiper
            :slidesPerView="'auto'"
            :mousewheel="{
              releaseOnEdges: true
            }"
            :grabCursor="true"
            :spaceBetween="8"
            :direction="'horizontal'"
            :breakpoints="{
              590: {
                spaceBetween: 16,
                direction: 'vertical',
              }
            }"
            class="profit"
          >
            <swiper-slide class="profit__card">
              <span class="profit__card-id">(01)</span>
              <h3 class="profit__card-title">
                Внутр<span class="italic">е</span>ннее обучение
              </h3>
              <p class="profit__card-description">
                проанализировали, из каких регионов идет наибольший трафик и
                какие
                из
                них имеют наивысший процент отказов
              </p>
            </swiper-slide>
            <swiper-slide class="profit__card">
              <span class="profit__card-id">(02)</span>
              <h3 class="profit__card-title">
                Опл<span class="italic">а</span>та курсов
              </h3>
              <p class="profit__card-description">
                проанализировали, из каких регионов идет наибольший трафик и
                какие
                из
                них имеют наивысший процент отказов
              </p>
            </swiper-slide>
            <swiper-slide class="profit__card">
              <span class="profit__card-id">(03)</span>
              <h3 class="profit__card-title">
                Корпо<span class="italic">р</span>ативы в VR
              </h3>
              <p class="profit__card-description">
                проанализировали, из каких регионов идет наибольший трафик и
                какие
                из
                них имеют наивысший процент отказов
              </p>
            </swiper-slide>
            <swiper-slide class="profit__card">
              <span class="profit__card-id">(04)</span>
              <h3 class="profit__card-title">
                Помо<span class="italic">щ</span>ь с релокацией
              </h3>
              <p class="profit__card-description">
                проанализировали, из каких регионов идет наибольший трафик и
                какие
                из
                них имеют наивысший процент отказов
              </p>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  margin-top: 100px;

  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background: $color-bg-dark;
    border-radius: 32px;
    padding: 0 70px;
    background-image: url("@/assets/images/careers-bg1.png");
    background-repeat: no-repeat, no-repeat;
    background-position: top right;
    height: 650px;
  }

  &__block {
    width: calc(50% - 20px / 2);
    height: 100%;
    overflow: hidden;
    display: flex;

    &:first-child {
      margin-top: 70px;
    }
  }

  &__intro {
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  &__title {
    font: $font-page-title-gilroy;
    color: $color-general-white;
    letter-spacing: -0.04em;

    .italic {
      font: $font-page-title-playfair;
    }
  }

  &__description {
    color: $color-text-secondary;
    letter-spacing: -0.03em;
  }
}

.profit {
  &__card {
    width: 392px;
    display: flex;
    flex-direction: column;
    color: $color-general-white;
    padding: 24px;
    border-radius: 24px;
    background: rgba(23, 23, 23, 0.01);
    -webkit-backdrop-filter: blur(8px) !important;
    -moz-backdrop-filter: blur(8px) !important;
    backdrop-filter: blur(8px) !important;
    background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' rx='24' style='fill: none; stroke: rgba(255, 255, 255, 0.09); stroke-width: 2; stroke-dasharray: 10 10'/></svg>");

    &-id {
      font: $font-small-playfair;
      font-size: 13px;
      font-variant-numeric: lining-nums;
    }

    &-title {
      font: $font-h3-gilroy;
      letter-spacing: -0.04em;
      margin: 66px 0 10px;

      .italic {
        font: $font-h3-playfair;
      }
    }

    &-description {
      color: $color-text-secondary;
      letter-spacing: -0.03em;
    }

    &:first-child {
      margin-top: 70px;
    }

    &:last-child {
      margin-bottom: 70px;
    }
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 392px;
  height: 238px;
}

@media (max-width: 1024px) {
  .section {
    margin-top: 50px;

    &__content {
      gap: 16px;
      padding: 48px;
      background-image: url("@/assets/images/careers-bg2.png");
      height: auto;
      justify-content: center;
    }

    &__block {
      width: auto;
      align-items: center;

      &:first-child {
        margin-top: 0;
      }
    }

    &__intro {
      max-width: 280px;
    }

    &__title {
      font-size: 40px;

      .italic {
        font-size: 40px;
      }
    }
  }

  .profit {
    overflow: hidden;

    &__card {
      width: 336px;

      &-title {
        margin: 50px 0 10px;
        font-size: 24px;

        .italic {
          font-size: 24px;
        }
      }

      &-description {
        font-size: 14px;
        line-height: 1.5;
      }

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .swiper-slide {
    width: 336px;
    height: 211px;
  }
}

@media (max-width: 590px) {
  .section {
    margin-top: 34px;

    &__content {
      gap: 48px;
      padding: 48px 0 44px;
      background-image: url("@/assets/images/careers-bg3.png");
      background-position: bottom right;
      height: 494px;
    }

    &__block {
      width: 100%;
      height: auto;

      &:first-child {
        justify-content: center;
      }
    }

    &__intro {
      gap: 24px;
      text-align: center;
    }

    &__title {
      font-size: 32px;

      .italic {
        font-size: 32px;
      }
    }
  }

  .profit {
    &__card {
      min-width: 320px;
      padding: 28px 24px 24px;

      &-id {
        font-size: 10px;
      }

      &-title {
        margin: 48px 0 10px;
      }
    }

    // &::-webkit-scrollbar {
    //   height: 4px;
    // }

    // &::-webkit-scrollbar-track {
    //   background: rgba(134, 144, 153, 0.2);
    //   border-radius: 25px;
    //   margin: 0 48px;
    // }

    // &::-webkit-scrollbar-thumb {
    //   background: $color-general-white;
    //   border-radius: 31px;
    // }
  }

  .swiper {
    padding: 0 24px 20px;
  }

  .swiper-slide {
    width: 310px;
    height: 208px;
  }
}
</style>