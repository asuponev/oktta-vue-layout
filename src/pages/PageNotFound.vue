<script>
export default {

}
</script>

<template>
  <section class="not-found">
    <div class="wrapper">
      <div class="not-found__content">
        <h1 class="not-found__title">
          З<span class="italic">а</span>блуд<span class="italic">и</span>лись<span class="italic">?</span>
        </h1>
        <p class="not-found__description">
          Страница, которую вы ищете, не найдена — такое бывает, всегда можно
          вернуться на главную или посмотреть наши работы
        </p>
        <div class="not-found__actions">
          <button
            @click="$router.push('/')"
            class="not-found__button"
          >на главную</button>
          <router-link
            to="/cases"
            class="not-found__link"
          >
            <span>изучить кейсы</span>
            <svg>
              <use xlink:href="@/assets/icons/_sprite.svg#arrow-link">
              </use>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.not-found {
  background-image: url("@/assets/images/404-bg.png");
  background-repeat: no-repeat;
  background-position: -100% 100%;
  background-size: cover;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;
    height: max(calc(100vh - 405px), 545px);
  }

  &__title {
    font: $font-h1-gilroy;

    .italic {
      font: $font-h1-playfair;
    }
  }

  &__description {
    text-align: center;
    max-width: 416px;
    margin-bottom: 12px;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 11px;
  }

  &__button {
    width: 153px;
    height: 60px;
    background: $color-general-dark;
    border-radius: 40px;
    border: none;
    color: $color-general-white;
    font: $font-button;
    line-height: 110%;
    letter-spacing: -0.03em;
    cursor: pointer;
    transition: color 0.2s ease-in-out, background 0.2s ease-in-out;

    &:hover {
      color: $color-general-dark;
      background: $color-general-green;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: $color-general-dark;
    font: $font-button;
    letter-spacing: -0.03em;
    text-decoration: none;
    cursor: pointer;

    svg {
      width: 13px;
      height: 13px;
      stroke: $color-general-dark;
      transition: stroke 0.2s ease-in-out, transform 0.2s ease-in-out;
    }

    span {
      display: inline-flex;
      background: no-repeat 0 100%;
      background-image: linear-gradient(to right, $color-general-dark, $color-general-dark);
      background-size: 0 2px;
      transition: background-size 0.2s ease-in-out;
    }

    &:hover {
      span {
        background-size: 100% 2px;
      }

      svg {
        transform: rotate(45deg);
      }
    }
  }
}

@media (max-width: 1024px) {
  .not-found {
    background-position: -100px 150%;

    &__title {
      font-size: 64px;

      .italic {
        font-size: 64px;
      }
    }

    &__description {
      max-width: 480px;
    }

    &__button {
      width: 143px;
      height: 46px;
      font-size: 16px;
    }

    &__link {
      font-size: 16px;
    }
  }
}

@media (max-width: 590px) {
  .not-found {
    background-position: -200px -200px;

    &__title {
      font-size: 40px;

      .italic {
        font-size: 40px;
      }
    }
  }
}
</style>