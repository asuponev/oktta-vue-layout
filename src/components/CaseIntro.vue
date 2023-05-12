<script>
export default {
  props: {
    caseItem: {
      type: Object,
    },
  },
}
</script>

<template>
  <section class="intro">
    <div class="wrapper">
      <div class="intro__content">
        <div class="intro__links">
          <a
            v-for="(item, index) in caseItem.links"
            :key="index"
            :href="item.link"
            class="intro__link"
            target="_blank"
          >
            <span>{{ item.name }}</span>
          </a>
        </div>
        <div class="intro__title">
          <h1 class="intro__title-text">{{ caseItem.title }}</h1>
          <span class="intro__title-year">{ {{ caseItem.year }} }</span>
        </div>
        <p class="intro__description">{{ caseItem.description }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  margin-top: 16px;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: end;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    max-width: 204px;
    margin: 0 0 4px 10px;
  }

  &__link {
    padding: 3px 12px;
    background: inherit;
    color: $color-general-dark;
    border: 1px solid $color-general-dark;
    border-radius: 100px;
    background: $color-general-white;
    letter-spacing: -0.03em;
    line-height: 120%;
    margin-left: -10px;
    margin-top: -4px;
    cursor: pointer;
    transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      color: $color-general-white;
      background: $color-general-dark;
    }
  }

  &__title {
    display: flex;
    justify-self: center;

    &-text {
      font: $font-h1-gilroy;
      font-size: 100px;
      line-height: 90%;
      letter-spacing: -0.04em;
    }

    &-year {
      font: $font-small-playfair;
      font-size: 13px;
    }
  }

  &__description {
    justify-self: end;
    font-size: 12px;
    color: $color-text-secondary;
    max-width: 330px;
    text-indent: 56px;
    line-height: 125%;
  }
}

@media (max-width: 1280px) {
  .intro {
    &__description {
      max-width: 310px;
    }
  }
}

@media (max-width: 1024px) {
  .intro {
    margin-top: 0;

    &__content {
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    &__links {
      order: 2;
      margin-bottom: 0;
    }

    &__title {
      grid-column: 1 / 3;
      order: 1;
      position: relative;

      &-year {
        position: absolute;
        right: -44px;
      }
    }

    &__description {
      order: 3;
      max-width: 275px;
    }
  }
}

@media (max-width: 590px) {
  .intro {
    &__content {
      grid-template-columns: 1fr;
    }

    &__links {
      grid-column: 1 / 2;
      justify-self: center;
      justify-content: center;
    }

    &__title {
      grid-column: 1 / 2;
      display: flex;

      &-text {
        font-size: 64px;
      }

      &-year {
        font-size: 10px;
      }
    }

    &__description {
      grid-column: 1 / 2;
      max-width: 100%;
    }
  }
}
</style>