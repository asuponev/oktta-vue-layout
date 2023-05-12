<script>
import CaseList from '@/components/CaseList.vue'
import CaseFilters from '@/components/CaseFilters.vue'

export default {
  components: {
    CaseList,
    CaseFilters
  },
}
</script>

<template>
  <div class="wrapper">
    <section class="section">
      <h1 class="section__title">
        Ке<span class="italic">й</span>сы
      </h1>
      <case-filters />
    </section>
    <case-list />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 72px;
  padding: 64px 30px 80px;
  display: flex;
  flex-direction: column;
  gap: 88px;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  &__title {
    font: $font-h1-gilroy;
    font-size: 180px;
    letter-spacing: -0.07em;

    .italic {
      font: $font-h1-playfair;
      font-size: 180px;
    }
  }
}

@media (max-width: 1024px) {
  .section {
    gap: 32px;

    &__title {
      font-size: 120px;

      .italic {
        font-size: 120px;
      }
    }
  }
}

@media (max-width: 768px) {
  .wrapper {
    padding: 48px 20px 80px;
    gap: 40px;
  }
}

@media (max-width: 590px) {
  .wrapper {
    padding: 33px 16px 100px;
    gap: 38px;
  }

  .section {
    align-items: flex-start;
    gap: 32px;

    &__title {
      font-size: 80px;

      .italic {
        font-size: 80px;
      }
    }
  }
}
</style>