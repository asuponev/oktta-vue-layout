<script>
import SocialBlock from './SocialBlock.vue'

export default {
  components: {
    SocialBlock
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div :class="[isOpen ? 'open' : '', 'menu']">
    <nav class="menu__nav">
      <div class="menu__nav-item">
        <a
          @click="$router.push('/cases')"
          class="menu__nav-link"
        >
          <span>Ке<span class="italic">й</span>сы</span>
        </a>
        <p class="menu__nav-count">(13)</p>
      </div>
      <div class="menu__nav-item">
        <a
          @click="$router.push('/company')"
          class="menu__nav-link"
        >
          <span>Ко<span class="italic">м</span>пания</span>
        </a>
        <p class="menu__nav-count"></p>
      </div>
      <div class="menu__nav-item">
        <a
          @click="$router.push('/services')"
          class="menu__nav-link"
        >
          <span>Услу<span class="italic">г</span>и</span>
        </a>
        <p class="menu__nav-count"></p>
      </div>
      <div class="menu__nav-item">
        <a
          @click="$router.push('/contacts')"
          class="menu__nav-link"
        >
          <span>Конта<span class="italic">к</span>ты</span>
        </a>
        <p class="menu__nav-count"></p>
      </div>
      <div class="menu__nav-item">
        <a
          @click="$router.push('/careers')"
          class="menu__nav-link"
        >
          <span>Ка<span class="italic">р</span>ьера</span>
        </a>
        <p class="menu__nav-count">(4)</p>
      </div>
    </nav>
    <div class="menu__footer">
      <div class="menu__footer-contacts">
        <a href="tel:+995555411407">+995 555 411 407</a>
        <a href="mailto:hello@okttastudio.com">hello@okttastudio.com</a>
      </div>
      <social-block />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  height: 0;
  width: 100vw;
  position: absolute;
  top: -1000px;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: $color-general-dark;
  z-index: 100;
  color: $color-general-white;
  padding: 56px 30px 24px;
  transition: height 0.5s ease-in-out, top 0.5s ease-in-out;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  &.open {
    top: 72px;
    height: calc(100vh - 72px);
  }

  &__nav {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(5, 91px);
    width: 100%;
    grid-column-gap: 24px;
    grid-row-gap: 0px;

    &-item {
      display: flex;
      align-items: flex-end;
      gap: 20px;

      &:nth-child(1) {
        grid-area: 1 / 2 / 2 / 4;
      }

      &:nth-child(2) {
        grid-area: 2 / 4 / 3 / 8;
      }

      &:nth-child(3) {
        grid-area: 3 / 5 / 4 / 8;
      }

      &:nth-child(4) {
        grid-area: 4 / 8 / 5 / 12;
      }

      &:nth-child(5) {
        grid-area: 5 / 4 / 6 / 8;
      }
    }

    &-link {
      font: $font-h1-gilroy;
      color: $color-general-white;
      letter-spacing: -0.04em;
      text-decoration: none;
      cursor: pointer;

      .italic {
        font: $font-h1-playfair;
      }

      &::after {
        content: '';
        width: 0px;
        height: 4px;
        display: block;
        background: $color-general-white;
        transition: width 0.2s ease-in-out;
      }

      &:hover::after {
        width: 100%;
      }
    }

    &-count {
      font: $font-card-title-playfair;
      font-size: 32px;
      color: $color-general-green;
      font-variant-numeric: lining-nums;
      letter-spacing: -0.04em;
      margin-bottom: 12px;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-contacts {
      display: flex;
      align-items: center;
      gap: 28px;

      a {
        letter-spacing: -0.03em;
        text-decoration: none;
        color: $color-general-white;
      }
    }
  }
}

@media (max-width: 1060px) {
  .menu {
    padding: 240px 20px 20px;

    &__nav {
      grid-template-rows: repeat(5, 61px);
      grid-column-gap: 8px;

      &-item {
        gap: 10px;
      }

      &-link {
        letter-spacing: -2px;
        font-size: 64px;

        .italic {
          font-size: 64px;
        }
      }

      &-count {
        font-size: 16px;
        margin-bottom: 8px;
      }
    }

    &__footer {
      &-contacts {
        align-self: flex-end;
      }

      &-social {
        max-width: 200px;
        flex-wrap: wrap;
        justify-content: flex-end;

        a:nth-child(1),
        a:nth-child(2),
        a:nth-child(3) {
          margin-bottom: -2px;
        }

        a {
          font-size: 14px;
          padding: 1px 10px;
          margin-left: -8px;
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .menu {
    padding: 152px 16px 92px;

    &__nav {
      grid-template-rows: repeat(5, 38px);
      grid-row-gap: 8px;

      &-item:nth-child(4) {
        grid-area: 4 / 7 / 5 / 11;
      }

      &-link {
        font-size: 40px;

        .italic {
          font-size: 40px;
        }
      }
    }

    &__footer {
      flex-direction: column-reverse;
      gap: 32px;

      &-contacts {
        align-self: center;
      }

      &-social {
        justify-content: center;
      }
    }
  }
}
</style>
