<script>
import SocialLinks from '@/components/SocialLinks.vue'

export default {
  components: {
    SocialLinks
  },
}
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <a
        href="mailto:hello@okttastudio.com"
        class="footer__email"
      >
        hello<span class="italic">@</span>okttastudio.com
      </a>
      <button
        @click="$router.push('/brief')"
        class="footer__button"
      >
        заполнить бриф
      </button>
      <div class="footer__block">
        <p class="footer__notice">
          © oktta design studio
        </p>
        <div class="footer__links">
          <router-link to="/documents">
            <span>документы</span>
            <svg>
              <use xlink:href="@/assets/icons/_sprite.svg#arrow-link" />
            </svg>
          </router-link>
          <a href="/presentation">
            <span>презентация</span>
            <svg>
              <use xlink:href="@/assets/icons/_sprite.svg#arrow-link" />
            </svg>
          </a>
        </div>
        <social-links />
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
.footer {
  background: $color-bg-dark;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px 30px;
    max-width: 1440px;
    margin: 0 auto;
  }

  &__email {
    font: $font-h1-gilroy;
    color: $color-general-white;
    text-decoration: none;
    font-size: 140px;
    letter-spacing: -0.04em;
    cursor: pointer;
    line-height: 0.95;
    margin-bottom: 50px;

    .italic {
      font: $font-h1-playfair;
      font-size: 140px;
    }
  }

  &__button {
    width: 100%;
    height: 60px;
    border-radius: 40px;
    border: none;
    color: $color-general-dark;
    background: $color-general-green;
    font: $font-button;
    letter-spacing: -0.03em;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: $color-general-white;
    }
  }

  &__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;
  }

  &__notice {
    color: $color-general-white;
    letter-spacing: -0.04em;
    opacity: 0.5;
  }

  &__links {
    display: flex;
    align-items: center;
    margin-right: auto;

    a {
      display: flex;
      align-items: center;
      color: $color-general-white;
      font: $font-button;
      letter-spacing: -0.03em;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.2s ease-in-out;
      margin: 0 36px;

      svg {
        margin-left: 8px;
        width: 13px;
        height: 13px;
        stroke: $color-general-white;
        transition: stroke 0.2s ease-in-out, transform 0.2s ease-in-out;
      }

      &:hover {
        color: $color-general-green;

        svg {
          stroke: $color-general-green;
          transform: rotate(45deg);
        }
      }
    }
  }
}

@media (max-width: 1430px) {
  .footer {
    &__email {
      font-size: 126px;

      .italic {
        font-size: 126px;
      }
    }
  }
}

@media (max-width: 1270px) {
  .footer {
    &__email {
      font-size: 73px;

      .italic {
        font-size: 73px;
      }
    }
  }
}

@media (max-width: 970px) {
  .footer {
    &__content {
      padding-bottom: 16px;
    }

    &__email {
      margin-bottom: 24px;
    }

    &__button {
      height: 46px;
      margin-bottom: 8px;
    }

    &__block {
      flex-direction: column;
      margin-top: 24px;
    }

    &__notice {
      order: 3;
    }

    &__links {
      order: 2;
      margin: 32px 0;
    }
  }
}

@media (max-width: 760px) {
  .footer {
    &__email {
      font-size: 36px;

      .italic {
        font-size: 36px;
      }
    }
  }
}

@media (max-width: 500px) {
  .footer {
    &__content {
      padding: 40px 16px 16px
    }

    &__button {
      margin-bottom: 0px;
      font-size: 16px;
    }

    &__links {
      margin-bottom: 72px;

      a {
        font-size: 16px;
        margin: 0 20px;
      }

    }
  }
}

@media (max-width: 360px) {
  .footer {
    &__email {
      font-size: 24px;

      .italic {
        font-size: 24px;
      }
    }
  }
}
</style>