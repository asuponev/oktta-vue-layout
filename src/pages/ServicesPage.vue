<script>
import FormContact from '@/components/forms/FormContact.vue'

import sliderImage1 from '@/assets/images/services-slider/card1.svg'
import sliderImage2 from '@/assets/images/services-slider/card2.svg'
import sliderImage3 from '@/assets/images/services-slider/card3.svg'
import sliderImage4 from '@/assets/images/services-slider/card4.svg'
import sliderImage5 from '@/assets/images/services-slider/card5.svg'
import sliderImage6 from '@/assets/images/services-slider/card6.svg'
import sliderImage7 from '@/assets/images/services-slider/card7.svg'

export default {
  components: {
    FormContact
  },
  data() {
    return {
      sliderImage1,
      sliderImage2,
      sliderImage3,
      sliderImage4,
      sliderImage5,
      sliderImage6,
      sliderImage7
    }
  }
}
</script>

<template>
  <div class="container">
    <section class="services">
      <div class="wrapper">
        <div class="services__content">
          <div class="services__item">
            <span class="services__item-id">(01)</span>
            <router-link
              to="/services/development"
              class="services__item-link"
            >
              <p>Ан<span class="italic">а</span>литика
                и иссл<span class="italic">е</span>дования</p>
              <div
                class="services__item-img"
                :style="{ 'background': `center / cover no-repeat url(${sliderImage1})` }"
              >
              </div>
            </router-link>
          </div>
          <div class="services__item">
            <span class="services__item-id">(02)</span>
            <router-link
              to="/services/development"
              class="services__item-link"
            >
              <p>CX-исс<span class="italic">л</span>едования</p>
              <div
                class="services__item-img"
                :style="{ 'background': `center / cover no-repeat url(${sliderImage2})` }"
              >
              </div>
            </router-link>
          </div>
          <div class="services__item">
            <span class="services__item-id">(03)</span>
            <router-link
              to="/services/development"
              class="services__item-link"
            >
              <p>Мобил<span class="italic">ь</span>ная и
                веб-раз<span class="italic">р</span>аботка</p>
              <div
                class="services__item-img"
                :style="{ 'background': `center / cover no-repeat url(${sliderImage3})` }"
              >
              </div>
            </router-link>
          </div>
          <div class="services__item">
            <span class="services__item-id">(04)</span>
            <router-link
              to="/services/development"
              class="services__item-link"
            >
              <p>Диза<span class="italic">й</span>н
                мобильн<span class="italic">ы</span>х и 
                веб-интер<span class="italic">ф</span>ейсов</p>
                <div
                class="services__item-img"
                :style="{ 'background': `center / cover no-repeat url(${sliderImage4})` }"
              >
              </div>
            </router-link>
          </div>
          <div class="services__item">
            <span class="services__item-id">(05)</span>
            <router-link
              to="/services/development"
              class="services__item-link"
            >
              <p>Бр<span class="italic">е</span>ндинг и
                упа<span class="italic">к</span>овка</p>
                <div
                class="services__item-img"
                :style="{ 'background': `center / cover no-repeat url(${sliderImage5})` }"
              >
              </div>
            </router-link>
          </div>
          <div class="services__item">
            <span class="services__item-id">(06)</span>
            <router-link
              to="/services/development"
              class="services__item-link"
            >
              <p>Спри<span class="italic">н</span>т за
                7 дне<span class="italic">й</span></p>
                <div
                class="services__item-img"
                :style="{ 'background': `center / cover no-repeat url(${sliderImage6})` }"
              >
              </div>
            </router-link>
          </div>
          <div class="services__item">
            <span class="services__item-id">(07)</span>
            <router-link
              to="/services/development"
              class="services__item-link"
            >
              <p>Диза<span class="italic">й</span>н-поддер<span
                  class="italic">ж</span>ка</p>
                  <div
                class="services__item-img"
                :style="{ 'background': `center / cover no-repeat url(${sliderImage7})` }"
              >
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="form-contacts">
      <div class="wrapper">
        <form-contact />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.services {
  margin: 100px 0;

  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px 20px;
  }

  &__item {
    display: flex;
    gap: 4px;
    position: relative;

    &-id {
      font: $font-small-playfair;
      font-size: 13px;
    }

    &-link {
      font: $font-page-title-gilroy;
      color: $color-general-dark;
      letter-spacing: -0.04em;
      line-height: 90%;
      text-decoration: none;

      .italic {
        font: $font-page-title-playfair;
        color: $color-general-dark;
      }

      p:nth-child(1) {
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
        display: inline;
        background: no-repeat 0 100%;
        background-image: linear-gradient(to right, $color-general-dark, $color-general-dark);
        background-size: 0 4px;
        transition: background-size .3s;

        &:hover {
          background-size: 100% 4px;
        }
      }

      &:hover {
        .services__item-img {
          scale: 1;
        }
      }
    }

    &-img {
      position: absolute;
      z-index: 2;
      top: -160px;
      left: 134px;
      width: 380px;
      height: 260px;
      scale: 0;
      transition: scale 0.3s ease-in-out;
    }

    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 3;

      .services__item-img {
        top: -80px;
      }
    }

    &:nth-child(2) {
      grid-area: 2 / 2 / 3 / 4;
    }

    &:nth-child(3) {
      grid-area: 3 / 3 / 4 / 5;
    }

    &:nth-child(4) {
      grid-area: 4 / 2 / 5 / 5;
    }

    &:nth-child(5) {
      grid-area: 5 / 1 / 6 / 4;
    }

    &:nth-child(6) {
      grid-area: 6 / 3 / 7 / 5;
    }

    &:nth-child(7) {
      grid-area: 7 / 2 / 8 / 5;
    }
  }
}

.form-contacts {
  margin-bottom: 30px;
}

@media (max-width: 1250px) {
  .services {
    &__content {
      gap: 23px 8px;
    }

    &__item {
      &-link {
        font-size: 40px;

        .italic {
          font-size: 40px;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .services {
    margin: 92px 0;

    &__item-img {
      display: none;
    }
  }

  .form-contacts {
    margin-bottom: 20px;
  }
}

@media (max-width: 590px) {
  .services {
    margin: 120px 0 68px;

    &__content {
      display: flex;
      flex-direction: column;
      gap: 23px;
    }

    &__item {
      &-id {
        font-size: 10px;
      }

      &-link {
        font-size: 32px;

        .italic {
          font-size: 32px;
        }
      }
    }
  }
}
</style>