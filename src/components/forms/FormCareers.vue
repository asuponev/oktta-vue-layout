<script>
import CustomInput from '@/components/forms/form-elements/CustomInput.vue'
import CustomTextarea from '@/components/forms/form-elements/CustomTextarea.vue'
import SendButton from '@/components/forms/form-elements/SendButton.vue'
import AgreementText from '@/components/forms/form-elements/AgreementText.vue'

export default {
  props: {
    title: {
      type: String,
      default: 'Не нашли подходящую вакансию?'
    },
    description: {
      type: String,
      default: 'Всё равно рассмотрим вашу заявку и ответим в течение недели'
    },
  },
  components: {
    CustomInput,
    CustomTextarea,
    SendButton,
    AgreementText
  },
}
</script>

<template>
  <section>
    <div class="wrapper">
      <div class="form-block">
        <div class="form-block__intro">
          <h2 class="form-block__title">
            {{ title }}
          </h2>
          <p class="form-block__description">
            {{ description }}
          </p>
        </div>
        <form
          action=""
          class="form"
        >
          <custom-input
            :name="'name'"
            :label="'Как вас зовут?'"
            :placeholder="'Ваше имя'"
            :required="true"
            class="form__box"
          />
          <custom-input
            :name="'city'"
            :label="'Город'"
            :placeholder="'Санкт-Петербург'"
            :required="true"
            class="form__box"
          />
          <custom-input
            :name="'email'"
            :type="'email'"
            :label="'Почта'"
            :placeholder="'hi@oktta.ru'"
            :required="true"
            class="form__box"
          />
          <custom-input
            :name="'contact'"
            :label="'Номер телефона или Telegram'"
            :placeholder="'@oktta'"
            :required="true"
            class="form__box"
          />
          <custom-textarea
            :name="'text'"
            :label="'Рассказ о себе'"
            :placeholder="'В свободной форме'"
            :required="false"
            class="form__box"
          />
          <custom-input
            :name="'resume'"
            :label="'Резюме и портфолио'"
            :placeholder="'Ссылка на резюме'"
            :required="true"
            :isFile="true"
            class="form__box"
          />
          <send-button class="form__box" />
          <agreement-text />
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  padding-bottom: 30px;
}

.form-block {
  width: 100%;
  padding: 70px;
  background: $color-bg-dark;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 32px;
  margin-top: 100px;

  &__intro {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font: $font-card-title-gilroy;
    color: $color-general-white;
    letter-spacing: -0.04em;
    margin-bottom: 16px;
  }

  &__description {
    color: $color-text-secondary;
    max-width: 332px;
    letter-spacing: -0.03em;
  }
}

.form {
  display: flex;
  flex-direction: column;

  &__box {
    margin-bottom: 16px;
  }
}

@media (max-width: 1024px) {
  .wrapper {
    padding-bottom: 20px;
  }

  .form-block {
    padding: 70px 48px 72px;
    grid-template-columns: 1fr;

    &__title {
      font-size: 40px;
      text-align: center;
      padding: 0 20px;
      margin-bottom: 32px;
    }

    &__description {
      text-align: center;
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 590px) {
  .form-block {
    padding: 48px 24px 72px;

    &__title {
      font-size: 32px;
    }
  }
}
</style>