<script>
import FormContact from '@/components/forms/FormContact.vue'

export default {
  components: {
    FormContact
  },
}
</script>

<template>
  <div class="wrapper">
    <section class="services">
      <div class="services__item">
        <span class="services__item-id">(01)</span>
        <a
          href="/"
          class="services__item-link"
        >
          <p>Ан<span class="italic">а</span>литика
            и иссл<span class="italic">е</span>дования</p>
        </a>
      </div>
      <div class="services__item">
        <span class="services__item-id">(02)</span>
        <a
          href="/"
          class="services__item-link"
        >
          <p>CX-исс<span class="italic">л</span>едования</p>
        </a>
      </div>
      <div class="services__item">
        <span class="services__item-id">(03)</span>
        <router-link
          to="/services/development"
          class="services__item-link"
        >
          <p>Мобил<span class="italic">ь</span>ная и
          веб-раз<span class="italic">р</span>аботка</p>
        </router-link>
      </div>
      <div class="services__item">
        <span class="services__item-id">(04)</span>
        <a
          href="/"
          class="services__item-link"
        >
          <p>Диза<span class="italic">й</span>н
          мобильн<span class="italic">ы</span>х и 
          веб-интер<span class="italic">ф</span>ейсов</p>
        </a>
      </div>
      <div class="services__item">
        <span class="services__item-id">(05)</span>
        <a
          href="/"
          class="services__item-link"
        >
          <p>Бр<span class="italic">е</span>ндинг и
          упа<span class="italic">к</span>овка</p>
        </a>
      </div>
      <div class="services__item">
        <span class="services__item-id">(06)</span>
        <a
          href="/"
          class="services__item-link"
        >
          <p>Спри<span class="italic">н</span>т за
          7 дне<span class="italic">й</span></p>
        </a>
      </div>
      <div class="services__item">
        <span class="services__item-id">(07)</span>
        <a
          href="/"
          class="services__item-link"
        >
          <p>Диза<span class="italic">й</span>н-поддер<span
            class="italic">ж</span>ка</p>
        </a>
      </div>
    </section>
    <form-contact />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 30px;
}

.services {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px 20px;
  margin-bottom: 96px;

  &__item {
    display: flex;
    gap: 4px;

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

      span:nth-child(1) {
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
    }

    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 3;
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

@media (max-width: 1250px) {
  .services {
    gap: 23px 8px;

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

@media (max-width: 768px) {
  .wrapper {
    padding: 20px;
  }
}

@media (max-width: 590px) {
  .wrapper {
    padding: 48px 16px 20px;
  }

  .services {
    display: flex;
    flex-direction: column;
    gap: 23px;
    margin-bottom: 68px;

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