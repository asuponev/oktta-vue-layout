<script>
export default {

}
</script>

<template>
  <section class="section">
    <div class="section__block">
      <div class="section__intro">
        <p class="section__title">
          Кар<span class="italic">ь</span>ера в Oktta
        </p>
        <p class="section__description">
          Опираясь на данные веб-аналитики, мы изучили
          типы пользователей, особенности их поведения.
        </p>
      </div>
    </div>
    <div class="section__block">
      <div class="profit">
        <div class="profit__card">
          <span class="profit__card-id">(01)</span>
          <p class="profit__card-title">
            Внутр<span class="italic">е</span>ннее обучение
          </p>
          <p class="profit__card-description">
            проанализировали, из каких регионов идет наибольший трафик и какие из
            них имеют наивысший процент отказов
          </p>
        </div>
        <div class="profit__card">
          <span class="profit__card-id">(02)</span>
          <p class="profit__card-title">
            Опл<span class="italic">а</span>та курсов
          </p>
          <p class="profit__card-description">
            проанализировали, из каких регионов идет наибольший трафик и какие из
            них имеют наивысший процент отказов
          </p>
        </div>
        <div class="profit__card">
          <span class="profit__card-id">(03)</span>
          <p class="profit__card-title">
            Корпо<span class="italic">р</span>ативы в VR
          </p>
          <p class="profit__card-description">
            проанализировали, из каких регионов идет наибольший трафик и какие из
            них имеют наивысший процент отказов
          </p>
        </div>
        <div class="profit__card">
          <span class="profit__card-id">(04)</span>
          <p class="profit__card-title">
            Помо<span class="italic">щ</span>ь с релокацией
          </p>
          <p class="profit__card-description">
            проанализировали, из каких регионов идет наибольший трафик и какие из
            них имеют наивысший процент отказов
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: $color-bg-dark;
  border-radius: 32px;
  padding-inline: 70px;
  background-image: url("@/assets/images/careers-bg1.png");
  background-repeat: no-repeat, no-repeat;
  background-position: top right;
  height: 650px;
  margin-top: 100px;

  &__block {
    width: calc(50% - 20px / 2);
    height: 100%;

    &:first-child {
      margin-top: 70px;
    }

    &:last-child {
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 0;
      }
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
  display: flex;
  flex-direction: column;
  gap: 18px;

  &__card {
    width: 392px;
    display: flex;
    flex-direction: column;
    color: $color-general-white;
    padding: 24px;
    border-radius: 24px;
    background: rgba(23, 23, 23, 0.01);
    backdrop-filter: blur(82px);
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

@media (max-width: 1024px) {
  .section {
    gap: 16px;
    padding: 48px;
    background-image: url("@/assets/images/careers-bg2.png");
    height: auto;
    justify-content: center;
    margin-top: 50px;

    &__block {
      width: auto;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        overflow: hidden;
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
}

@media (max-width: 590px) {
  .section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    gap: 48px;
    padding: 48px 0 44px;
    background-image: url("@/assets/images/careers-bg3.png");
    background-position: bottom right;
    height: 494px;
    margin-top: 34px;

    &__block {
      height: auto;

      &:first-child {
        align-self: center;
      }

      &:last-child {
        overflow-x: scroll;
        padding-bottom: 20px;

        &::-webkit-scrollbar {
          height: 4px;
        }

        &::-webkit-scrollbar-track {
          background: rgba(134, 144, 153, 0.2);
          border-radius: 25px;
          margin: 0 48px;
        }

        &::-webkit-scrollbar-thumb {
          background: $color-general-white;
          border-radius: 31px;
        }
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
    flex-direction: row;
    gap: 8px;

    &__card {
      min-width: 320px;
      padding: 28px 24px 24px;

      &-id {
        font-size: 10px;
      }

      &-title {
        margin: 48px 0 10px;
      }

      &:first-child {
        margin-left: 24px;
      }
    }
  }
}
</style>