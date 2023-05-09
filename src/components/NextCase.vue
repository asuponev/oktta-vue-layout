<script>
import CaseCard from '@/components/CaseCard.vue'

export default {
  components: {
    CaseCard
  },
  props: {
    nextCase: {
      type: Object,
    },
  }
}
</script>

<template>
  <section class="next">
    <div class="wrapper">
      <div class="next__content">
        <div class="next__title">
          <span class="italic">Следующий</span><br />
          кейс
        </div>
        <case-card :caseItem="nextCase" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.next {
  margin: 100px 0;

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    .card {
      width: 100%;
    }
  }

  &__title {
    font: $font-h1-gilroy;
    letter-spacing: -0.04em;
    line-height: 90%;

    .italic {
      font: $font-h1-playfair;
    }
  }
}

@media (max-width: 1024px) {
  .next {
    &__content {
      gap: 0;
    }

    &__title {
      font-size: 64px;

      .italic {
        font-size: 64px;
      }
    }
  }
}

@media (max-width: 590px) {
  .next {
    margin: 80px 0;

    &__content {
      grid-template-columns: 1fr;
      gap: 26px;
    }

    &__title {
      font-size: 40px;
      width: 100%;

      .italic {
        font-size: 64px;
        font-size: 40px;
      }
    }
  }
}
</style>