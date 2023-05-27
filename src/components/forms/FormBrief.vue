<script>
import CustomInput from '@/components/forms/form-elements/CustomInput.vue'
import CustomTextarea from '@/components/forms/form-elements/CustomTextarea.vue'
import SendButton from '@/components/forms/form-elements/SendButton.vue'
import AgreementText from '@/components/forms/form-elements/AgreementText.vue'
import CustomCheckbox from '@/components/forms/form-elements/CustomCheckbox.vue'
import CustomRadio from '@/components/forms/form-elements/CustomRadio.vue'

export default {
  components: {
    CustomInput,
    CustomTextarea,
    SendButton,
    AgreementText,
    CustomCheckbox,
    CustomRadio
  },
  data() {
    return {
      typesProject: [
        {
          value: 'design-site',
          label: 'Дизайн сайта'
        },
        {
          value: 'development-site',
          label: 'Разработка сайта'
        },
        {
          value: 'html-layout',
          label: 'HTML/CSS верстка'
        },
        {
          value: 'design-concept',
          label: 'Дизайн-концепция'
        },
        {
          value: 'design-app',
          label: 'Дизайн приложения'
        },
        {
          value: 'development-app',
          label: 'Разработка приложения'
        },
        {
          value: 'ux-analytics',
          label: 'UX-аналитика'
        },
        {
          value: 'branding',
          label: 'Брендинг'
        },
        {
          value: 'illustrations',
          label: 'Иллюстрации'
        },
        {
          value: 'support',
          label: 'Поддержка'
        },
        {
          value: 'chatbots',
          label: 'Чат боты'
        },
      ],
      budgets: [
        {
          value: 'less-300',
          label: 'Менее 300 т.р'
        },
        {
          value: '300-500',
          label: '300-500 т.р'
        },
        {
          value: '500-800',
          label: '500-800 т.р'
        },
        {
          value: '800-1000',
          label: '800-1 млн'
        },
        {
          value: '1000-2000',
          label: '1-2 млн'
        },
        {
          value: '2000-3000',
          label: '2-3 млн'
        },
        {
          value: 'more-3000',
          label: 'Более 3 млн'
        },
      ],
      sources: [
        {
          value: 'recommendations',
          label: 'Рекомендации'
        },
        {
          value: 'cases',
          label: 'Работы'
        },
        {
          value: 'social-networks',
          label: 'Соцсети'
        },
      ]
    }
  },
}
</script>

<template>
  <div class="form-container">
    <form class="form">
      <custom-checkbox
        :items="typesProject"
        :legend="'Тип проекта'"
        class="form__box"
      />
      <custom-radio
        :items="budgets"
        :legend="'Бюджет'"
        :name="'budget'"
        class="form__box"
      />
      <custom-textarea
        :name="'task'"
        :label="'Задача'"
        :placeholder="'Опишите задачу'"
        :required="true"
        :heightTextarea="90"
        class="form__textarea-brief form__box"
      />
      <div class="form__contacts form__box">
        <p class="form__contacts-label">Контакты</p>
        <div class="form__contacts-wrapper">
          <custom-input
            :name="'name'"
            :placeholder="'Ваше имя'"
            :required="true"
            class="form__contacts-item"
          />
          <custom-input
            :name="'company'"
            :placeholder="'Компания'"
            class="form__contacts-item"
          />
          <custom-input
            :name="'email'"
            :type="'email'"
            :placeholder="'Почта'"
            :required="true"
            class="form__contacts-item"
          />
          <custom-input
            :name="'phone'"
            :type="'tel'"
            :placeholder="'(_ _ _) _ _ _-_ _ -_ _'"
            :required="true"
            class="form__contacts-item"
          />
        </div>
      </div>
      <custom-checkbox
        :items="sources"
        :legend="'Откуда вы узнали о нас?'"
        class="form__box"
      />
      <send-button class="form__brief-btn form__box" />
      <agreement-text class="form__brief-text" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
}

.form {
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  flex-direction: column;

  &__box {
    margin-bottom: 24px;
  }

  &__textarea-brief {
    font-size: 18px;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    color: $color-general-white;
    font-size: 18px;

    &-wrapper {
      margin-top: 12px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &-item {
      width: calc(50% - 8px / 2);

      &:nth-child(1),
      &:nth-child(2) {
        margin-bottom: 8px;
      }
    }
  }

  &__brief-btn {
    margin-top: 6px;
  }
}

@media (max-width: 1024px) {
  .form {
    grid-area: 1 / 1 / 2 / 5;
    padding: 0 48px;
  }
}

@media (max-width: 590px) {
  .form {
    padding: 0px;

    &__textarea-brief {
      padding-right: 24px;
    }

    &__contacts {
      padding-right: 24px;

      &-item {
        width: 100%;
      }
    }

    &__brief-btn {
      margin-right: 24px;
    }

    &__brief-text {
      margin-right: 24px;
    }
  }
}
</style>