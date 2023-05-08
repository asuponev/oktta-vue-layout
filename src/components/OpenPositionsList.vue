<script>
import CardTags from '@/components/CardTags.vue'

export default {
  components: {
    CardTags
  },
  data() {
    return {
      positions: [
        {
          id: 1,
          position: 'UX-дизайнер',
          tags: ['аналитика', 'фуллтайм', 'удаленно', 'от 75 000 ₽']
        },
        {
          id: 2,
          position: 'Senior фронтенд разработчик',
          tags: ['фронтенд', 'фуллтайм', 'удаленно', 'от 50 000 ₽']
        },
        {
          id: 3,
          position: 'UX-дизайнер',
          tags: ['аналитика']
        },
        {
          id: 4,
          position: 'Senior фронтенд разработчик',
          tags: ['фронтенд']
        },
      ]
    }
  }
}
</script>

<template>
  <section class="section">
    <p class="section__title">
      Откр<span class="italic">ы</span>тые вакансии
    </p>
    <div class="position">
      <div
        v-for="position in positions"
        :key="position.id"
        class="position__card"
        @click="$router.push(`/careers/${position.id}`)"
      >
        <card-tags :tags="position.tags" />
        <p class="position__card-title">{{ position.position }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin-top: 100px;

  &__title {
    font: $font-page-title-gilroy;
    letter-spacing: -0.04em;

    .italic {
      font: $font-page-title-playfair;
    }
  }
}

.position {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;

  &__card {
    width: calc(50% - 20px / 2);
    height: 200px;
    background: $color-bg-position-card;
    border: 1px solid $color-divider;
    border-radius: 24px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    &-title {
      font: $font-h3-gilroy;
      letter-spacing: -0.04em;
    }
  }
}

@media (max-width: 1024px) {
  .section {
    gap: 44px;

    &__title {
      font-size: 40px;

      .italic {
        font-size: 40px;
      }
    }
  }

  .position {
    &__card {
      height: 220px;
      padding: 24px;

      &-title {
        font-size: 24px;
      }
    }
  }
}

@media (max-width: 590px) {
  .section {
    gap: 48px;

    &__title {
      font-size: 32px;

      .italic {
        font-size: 32px;
      }
    }
  }

  .position {
    gap: 16px;

    &__card {
      width: 100%;
      height: auto;
      justify-content: flex-start;
      gap: 64px;
    }
  }
}
</style>