<script>
import CareerProfits from '@/components/CareerProfits.vue'
import OpenPositionsList from '@/components/OpenPositionsList.vue'
import FormCareers from '@/components/forms/FormCareers.vue'

export default {
  components: {
    CareerProfits,
    OpenPositionsList,
    FormCareers
  },
}
</script>

<template>
  <div class="wrapper">
    <section class="title">
      <span>Д<span class="italic">е</span>лаем
      гранд<span class="italic">и</span>озное,</span>
      <span>не хв<span class="italic">а</span>тает только</span>
      <span class="italic">тебя</span>
    </section>
    <career-profits />
    <open-positions-list />
    <form-careers />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 0 30px 30px;
  display: flex;
  flex-direction: column;
}

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
  .wrapper {
    padding: 200px 20px 20px;
  }

  .title {
    font-size: 64px;

    .italic {
      font-size: 64px;
    }
  }
}

@media (max-width: 590px) {
  .wrapper {
    padding: 130px 16px 20px;
  }

  .title {
    font-size: 40px;
    max-width: 350px;
    
    .italic {
      font-size: 40px;
    }
  }
}
</style>