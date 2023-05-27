<script>
import CaseList from '@/components/lists/CaseList.vue'
import CaseFilters from '@/components/CaseFilters.vue'

export default {
  components: {
    CaseList,
    CaseFilters
  },
}
</script>

<template>
  <div class="container">
    <section class="section">
      <div class="wrapper">
        <h1 class="section__title">
          Ке<span class="italic">й</span>сы
        </h1>
        <case-filters />
      </div>
    </section>
    <case-list />
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 64px 0 80px;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 88px;

  &__title {
    font: $font-h1-gilroy;
    font-size: 180px;
    letter-spacing: -0.07em;
    text-align: center;
    margin-bottom: 48px;

    .italic {
      font: $font-h1-playfair;
      font-size: 180px;
    }
  }
}

@media (max-width: 1024px) {
  .section {
    &__title {
      font-size: 120px;
      margin-bottom: 32px;

      .italic {
        font-size: 120px;
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    padding: 48px 0 80px;
  }

  .section {
    margin-bottom: 40px;
  }
}

@media (max-width: 590px) {
  .container {
    padding: 33px 0 100px;
  }

  .section {
    align-items: flex-start;
    margin-bottom: 38px;

    &__title {
      font-size: 80px;

      .italic {
        font-size: 80px;
      }
    }
  }
}
</style>