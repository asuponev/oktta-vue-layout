<script>
import SocialBlock from '@/components/SocialBlock.vue'
import HoverGreenBtn from '@/components/UI/HoverGreenBtn.vue'

export default {
  components: {
    SocialBlock,
    HoverGreenBtn
  },
  data() {
    return {
      contacts: [
        {
          id: 1,
          country: 'Россия',
          email: 'hello@oktta.ru',
          tel: '+7 961 156 66 64',
          telegram: '/',
          whatsapp: '/'
        },
        {
          id: 2,
          country: 'Грузия',
          email: 'hello@okttastudio.com',
          tel: '+995 555 411 407',
          telegram: '/',
          whatsapp: '/'
        },
      ]
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <h1 class="title">
      <span>Работаем с кл<span class="italic">и</span>ентами</span>
      <span>по всему <span class="italic">м</span>иру</span>
    </h1>
    <section class="contacts">
      <div
        v-for="contact in contacts"
        :key="contact.id"
        class="contacts__block"
      >
        <span class="contacts__country">{{ contact.country }}</span>
        <ul class="contacts__list">
          <li class="contacts__item">
            <span class="contacts__item-id">(01)</span>
            <a
              :href="'mailto:' + contact.email"
              class="contacts__item-link"
            >
              {{ contact.email }}
            </a>
          </li>
          <li class="contacts__list-divider"></li>
          <li class="contacts__item">
            <span class="contacts__item-id">(02)</span>
            <a
              :href="'tel:' + contact.tel.replace(/ +/g, '')"
              class="contacts__item-link"
            >
              {{ contact.tel }}
            </a>
          </li>
          <li class="contacts__list-divider"></li>
          <li class="contacts__item">
            <span class="contacts__item-id">(03)</span>
            <a
              :href="contact.telegram"
              class="contacts__item-link"
            >
              telegram
              <svg>
                <use xlink:href="@/assets/icons/_sprite.svg#arrow-link">
                </use>
              </svg>
            </a>
          </li>
          <li class="contacts__list-divider"></li>
          <li class="contacts__item">
            <span class="contacts__item-id">(04)</span>
            <a
              :href="contact.whatsapp"
              class="contacts__item-link"
            >
              whatsapp
              <svg>
                <use xlink:href="@/assets/icons/_sprite.svg#arrow-link">
                </use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <hover-green-btn
      @click="$router.push('/brief')"
      class="contacts-green-btn"
    >
      заполнить бриф
    </hover-green-btn>
    <social-block
      class="social--contacts"
      :light="true"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 0 30px 111px;
  display: flex;
  flex-direction: column;
  gap: 44px;
  position: relative;
}

.title {
  display: flex;
  flex-direction: column;
  font: $font-h1-gilroy;
  letter-spacing: -0.04em;

  .italic {
    font: $font-h1-playfair;
  }

  span {
    &:last-child {
      align-self: flex-end;
    }
  }
}

.contacts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;

  &__block {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__country {
    font: $font-small-gilroy;
    color: $color-text-secondary;
    text-indent: 56px;
  }

  &__list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 23px;

    &-divider {
      width: 50%;
      height: 1px;
      background: $color-divider;
    }
  }

  &__item {
    display: flex;
    gap: 4px;

    &-id {
      font: $font-small-playfair;
      font-size: 13px;
    }

    &-link {
      font: $font-h3-gilroy;
      color: $color-general-dark;
      text-decoration: none;
      letter-spacing: -0.04em;

      svg {
        width: 13px;
        height: 13px;
        stroke: $color-general-dark;
        transition: stroke 0.2s ease-in-out;
      }
    }
  }
}

.social--contacts {
  margin-top: 36px;
  margin-left: calc(50% + 20px);
  max-width: 230px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.contacts-green-btn {
  transform: rotate(15deg);
  left: 280px;
  bottom: 88px;
  width: 250px;
  height: 250px;
  font-size: 30px;
  padding-inline: 20px;
}

@media (max-width: 1024px) {
  .wrapper {
    padding: 0 20px 100px;
  }

  .title {
    // display: flex;
    // flex-direction: column;
    font-size: 64px;
    // font: $font-h1-gilroy;
    // letter-spacing: -0.04em;

    .italic {
      font-size: 64px;
      // font: $font-h1-playfair;
    }

    span {
      &:last-child {
        align-self: flex-end;
      }
    }

  }

  .contacts {
    gap: 8px;

    &__block {
      gap: 32px;
    }

    &__list {
      gap: 32px;

      &-divider {
        display: none;
      }
    }

    &__item {
      &-id {
        font-size: 10px;
      }

      &-link {
        font-size: 24px;
      }
    }
  }

  .social--contacts {
    margin-top: 180px;
    margin-left: calc(50% + 8px);
  }

  .contacts-green-btn {
    left: 52px;
    bottom: 94px;
    width: 220px;
    height: 220px;
    font-size: 24px;
    padding-inline: 30px;
  }
}

@media (max-width: 590px) {
  .wrapper {
    padding: 100px 16px 100px;
    gap: 48px;
  }

  .title {
    font-size: 40px;

    .italic {
      font-size: 40px;
    }
  }

  .contacts {
    grid-template-columns: 1fr;
    gap: 48px;

    &__country {
      font-size: 14px;
      text-indent: 0;
      letter-spacing: -0.03em;
    }
  }

  .social--contacts {
    margin-top: 0;
    margin-left: 12px;
  }

  .contacts-green-btn {
    position: static;
    margin-left: 12px;
    width: 220px;
    height: 220px;
    font-size: 24px;
    padding-inline: 30px;
  }
}
</style>