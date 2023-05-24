<script>
import DocumentsList from '@/components/lists/DocumentsList.vue'

export default {
  components: {
    DocumentsList
  },
}
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <h1 class="title">
        Доку<span class="italic">м</span>енты
      </h1>
      <documents-list />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 56px 0 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
}

.title {
  text-align: center;
  font: $font-h1-gilroy;
  letter-spacing: -0.04em;

  .italic {
    font: $font-h1-playfair;
  }
}

@media (max-width: 1024px) {
  .wrapper {
    padding: 56px 0;
    gap: 48px;
  }

  .title {
    font-size: 40px;

    .italic {
      font-size: 40px;
    }
  }
}

@media (max-width: 590px) {
  .wrapper {
    padding: 56px 0;
    gap: 48px;
  }

  .title {
    font-size: 32px;

    .italic {
      font-size: 32px;
    }
  }
}
</style>