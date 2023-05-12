<script>
import CareerInOkttaSection from '@/components/sections/CareerInOkttaSection.vue'
import OpenPositionsList from '@/components/sections/OpenPositionsList.vue'
import FormCareers from '@/components/forms/FormCareers.vue'

export default {
  components: {
    CareerInOkttaSection,
    OpenPositionsList,
    FormCareers
  },
}
</script>

<template>
  <div class="container">
    <section>
      <div class="wrapper">
        <h1 class="title">
          <span>Д<span class="italic">е</span>лаем
          гранд<span class="italic">и</span>озное,</span>
          <span>не хв<span class="italic">а</span>тает только</span>
          <span class="italic">тебя</span>
        </h1>
      </div>
    </section>
    <career-in-oktta-section />
    <open-positions-list />
    <form-careers />
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  font: $font-h1-gilroy;
  letter-spacing: -0.04em;

  .italic {
    font: $font-h1-playfair;
  }
}

@media (max-width: 1024px) {
  .title {
    padding-top: 200px;
    font-size: 64px;

    .italic {
      font-size: 64px;
    }
  }
}

@media (max-width: 590px) {
  .title {
    font-size: 40px;
    max-width: 350px;
    padding-top: 130px;

    .italic {
      font-size: 40px;
    }
  }
}
</style>