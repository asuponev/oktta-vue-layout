<script>
import CustomInput from '@/components/forms/form-elements/CustomInput.vue'
import SendButton from '@/components/forms/form-elements/SendButton.vue'
import AgreementText from '@/components/forms/form-elements/AgreementText.vue'

export default {
  components: {
    CustomInput,
    SendButton,
    AgreementText
  },
}
</script>

<template>
  <section class="section">
    <div>
      <h2 class="section__title">
        Готовы обсудить
        п<span class="italic">р</span>ое<span class="italic">к</span>т?
      </h2>
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
      />
      <custom-input
        :name="'phone'"
        :type="'tel'"
        :label="'Номер телефона'"
        :placeholder="'+7 (_ _ _) _ _ _-_ _ -_ _'"
        :required="true"
      />
      <send-button />
      <agreement-text />
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
}

@media (max-width: 1024px) {
  .section {
    padding: 70px 48px;
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