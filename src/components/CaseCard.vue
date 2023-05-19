<script>
import HoverGreenBtn from '@/components/UI/HoverGreenBtn.vue'

export default {
  components: {
    HoverGreenBtn
  },
  props: {
    caseItem: {
      type: Object,
    },
  }
}
</script>

<template>
  <div
    class="card"
    @click="$router.push(caseItem.url)"
  >
    <div class="card__image">
      <img
        :src="caseItem.image"
        alt="case-image"
      >
    </div>
    <div class="card__block">
      <h3 class="card__title">{{ caseItem.title }}</h3>
      <div class="card__category">
        <span>{{ caseItem.category }}</span>
      </div>
    </div>
    <hover-green-btn class="card__hover-btn">
      смотреть проект
    </hover-green-btn>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;

  &__image {
    width: 100%;
    height: 630px;
    border-radius: 32px;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: scale 0.3s ease-in-out;
    }
  }

  &__block {
    position: absolute;
    opacity: 0;
    bottom: 0;
    z-index: 3;
    color: $color-general-white;
    display: flex;
    justify-content: space-between;
    padding: 28px 40px;
    width: 100%;
    transition: opacity 0.3s ease-in-out;
  }

  &__title {
    font: $font-h3-gilroy;
    font-size: 24px;
    letter-spacing: -0.04em;
  }

  &__category {
    min-width: 93px;
    height: 28px;
    border: 1px solid $color-general-white;
    color: $color-general-white;
    border-radius: 100px;
    font: $font-body;
    letter-spacing: -0.03em;
    background: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__hover-btn {
    display: none;
    opacity: 0;
    width: 250px;
    height: 250px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(15deg);
    z-index: 3;
    font-size: 30px;
    padding-inline: 20px;
  }
}

@media (min-width: 1025px) {
  .card__image::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(28, 28, 28, 0.5);
    border-radius: 32px;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .card__hover-btn {
    display: block;
  }

  .card:hover {
    cursor: pointer;

    .card__block {
      opacity: 1;
    }

    .card__hover-btn {
      opacity: 1;
    }

    .card__image {
      img {
        scale: 1.04;
      }
    }

    .card__image::before {
      opacity: 1;
    }
  }
}

@media (max-width: 1024px) {
  .card {
    &__image {
      height: 360px;
    }

    &__block {
      position: static;
      opacity: 1;
      display: flex;
      padding: 0 8px;
      color: $color-general-dark;
    }

    &__category {
      border: 1px solid $color-general-dark;
      color: $color-general-dark;
    }
  }
}

@media (max-width: 590px) {
  .card {
    &__image {
      height: 350px;
    }
  }
}
</style>