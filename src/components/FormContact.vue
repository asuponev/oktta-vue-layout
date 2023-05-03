<script>
export default {

}
</script>

<template>
  <section class="section">
    <p class="section__title">
      Готовы обсудить
      п<span class="italic">р</span>ое<span class="italic">к</span>т?
    </p>
    <form
      action=""
      class="form"
    >
      <div class="form__group">
        <label for="name">Как вас зовут?</label>
        <input
          id="name"
          name="name"
          placeholder="Ваше имя"
          class="form__input"
        />
      </div>
      <div class="form__group">
        <label for="phone">Номер телефона</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="+7 (_ _ _) _ _ _-_ _ -_ _"
          required
          class="form__input"
        />
      </div>
      <button class="form__button">
        отправить
        <svg>
          <use xlink:href="@/assets/icons/_sprite.svg#arrow-link">
          </use>
        </svg>
      </button>
      <p class="form__description">
        Отправляя данную форму вы соглашаетесь с
        <a href="/">политикой обработки персональных данных.</a>
      </p>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.section {
  width: 100%;
  padding: 70px;
  background: $color-bg-dark;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  border-radius: 32px;

  &__title {
    font: $font-card-title-gilroy;
    font-size: 64px;
    color: $color-general-white;
    letter-spacing: -0.04em;
    line-height: 0.88;

    .italic {
      font: $font-card-title-playfair;
      font-size: 64px;
    }
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__group {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
    color: $color-general-white;
    letter-spacing: -0.03em;
  }

  &__input {
    height: 50px;
    padding: 12px 24px;
    background: $color-bg-input;
    border: 1px solid $color-border-input;
    border-radius: 12px;
    font: $font-body;
    color: $color-general-white;
    outline: none;

    &:focus {
      border: 1px solid $color-general-white;
    }

    &--error {
      border: 1px solid $color-error-input;
    }
  }

  &__button {
    height: 60px;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font: $font-button;
    letter-spacing: -0.03em;
    color: $color-general-dark;
    background: $color-general-white;
    border: none;
    border-radius: 40px;
    margin-top: 16px;

    svg {
      width: 13px;
      height: 13px;
      stroke: $color-general-black;
      transition: stroke 0.2s ease-in-out;
    }
  }

  &__description {
    font-size: 14px;
    letter-spacing: -0.03em;
    color: $color-text-secondary;
    text-align: center;

    a {
      color: $color-text-secondary;
      text-underline-offset: 2px;
    }
  }
}

@media (max-width: 1280px) {
  .form__description {
    align-self: center;
    max-width: 400px;
  }
}

@media (max-width: 1024px) {
  .section {
    padding: 70px 48px 84px;
    grid-template-columns: 1fr;
    gap: 45px;

    &__title {
      font-size: 36px;
      text-align: center;
      margin: 0 auto;
      max-width: 305px;

      .italic {
        font-size: 36px;
      }
    }
  }

  .form {
    &__button {
      height: 46px;
      padding: 14px 0;
      font-size: 16px;
    }

    &__description {
      max-width: 100%;
    }
  }
}

@media (max-width: 590px) {
  .section {
    padding: 48px 24px 61px;
    gap: 26px;
  }
}
</style>