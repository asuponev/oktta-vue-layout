<script>
import Breadcrumbs from '@/components/UI/Breadcrumbs.vue'
import CardTags from '@/components/CardTags.vue'
import NextCase from '@/components/NextCase.vue'
import nextCaseImg from '@/assets/images/mock-content/cases-page-1.png'

export default {
  components: {
    Breadcrumbs,
    CardTags,
    NextCase
  },
  data() {
    return {
      links: ['сайт', 'приложение', 'кейс на behance', 'отзыв'],
      nextCase: {
        id: 2,
        title: 'Логотип Vybez',
        image: nextCaseImg,
        category: 'брендинг',
        url: '/cases'
      }
    }
  }
}
</script>

<template>
  <breadcrumbs :items="[{ name: 'Кейсы', path: '/cases' }, { name: 'Mesh3' }]" />
  <section class="intro">
    <div class="wrapper">
      <div class="intro__content">
        <div class="intro__links">
          <card-tags :tags="links" />
        </div>
        <div class="intro__title">
          <span class="intro__title-text">M<span class="italic">e</span>sh3</span>
          <span class="intro__title-year">{ 2022 }</span>
        </div>
        <p class="intro__description">
          Mesh3 — фонд, который инвестирует в современные проекты, объединяющие
          в себе культуру, искусство и технологии
        </p>
      </div>
    </div>
  </section>
  <section class="visual">
    <div class="wrapper">
      <div class="visual__content">
        <div class="visual__block visual__block--full-width">
          <img
            src="@/assets/images/case-mesh3/box1.jpg"
            alt="img"
          >
        </div>
        <div class="visual__block">
          <img
            src="@/assets/images/case-mesh3/box2.jpg"
            alt="img"
          >
        </div>
        <div class="visual__block">
          <img
            src="@/assets/images/case-mesh3/box3.jpg"
            alt="img"
          >
        </div>
      </div>
    </div>
  </section>
  <next-case :nextCase="nextCase" />
</template>

<style lang="scss" scoped>
.intro {
  margin-top: 16px;

  &__content {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__links {
    max-width: 330px;
    padding: 0 122px 16px 0;
  }

  &__title {
    display: flex;

    .italic {
      font: $font-h1-playfair;
      font-size: 100px;
    }

    &-text {
      font-size: 100px;
      line-height: 0.9;
      letter-spacing: -0.04em;
    }

    &-year {
      font: $font-small-playfair;
      font-size: 13px;
    }
  }

  &__description {
    font-size: 12px;
    color: $color-text-secondary;
    max-width: 330px;
    text-indent: 56px;
    line-height: 1.25;
    padding-bottom: 8px;
  }
}

.visual {
  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 40px;
  }

  &__block {
    width: calc(50% - 20px / 2);
    height: 630px;
    background: $color-general-dark;
    border-radius: 32px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
    }

    &--full-width {
      width: 100%;
      height: 725px;

      img {
        object-fit: contain;
      }
    }
  }
}

@media (max-width: 1400px) {
  .visual {
    &__block--full-width {
      img {
        object-fit: cover;
      }
    }
  }
}

@media (max-width: 1024px) {
  .intro {
    margin-top: 0;

    &__content {
      flex-wrap: wrap;
      gap: 10px;
    }

    &__links {
      order: 2;
      max-width: 208px;
      padding: 0 0 4px 0;
    }

    &__title {
      justify-content: center;
      width: 100%;
      order: 1;
    }

    &__description {
      order: 3;
      max-width: 275px;
      padding: 0;
    }
  }

  .visual {
    &__content {
      gap: 8px;
      margin-top: 23px;
    }

    &__block {
      width: calc(50% - 8px / 2);
      height: 400px;

      &--full-width {
        width: 100%;
        height: 400px;
      }
    }
  }
}

@media (max-width: 590px) {
  .intro {
    &__content {
      flex-direction: column;
      gap: 8px;
      align-items: center;
    }

    &__links {
      .tags {
        justify-content: center;
      }
    }

    &__title {
      display: flex;

      &-text {
        font-size: 64px;
      }

      .italic {
        font-size: 64px;
      }

      &-year {
        font-size: 10px;
      }
    }

    &__description {
      max-width: 100%;
      margin-top: 16px;
    }
  }

  .visual {
    &__block {
      width: 100%;
      height: 350px;
    }
  }
}
</style>