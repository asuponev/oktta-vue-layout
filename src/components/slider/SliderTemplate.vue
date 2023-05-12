<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    },
  },
  methods: {
    // Mock functions for demonstrate how buttons work
    sliderRight() {
      const sliderItems = document.querySelector('.slider__items'),
        leftItems = sliderItems.getBoundingClientRect().left,
        rightItems = sliderItems.getBoundingClientRect().right;

      if (rightItems > 0) {
        sliderItems.style.transform = `translateX(${leftItems - 398}px)`
      }
    },
    sliderLeft() {
      const sliderItems = document.querySelector('.slider__items'),
        leftItems = sliderItems.getBoundingClientRect().left;

      if (leftItems < 0) {
        sliderItems.style.transform = `translateX(${leftItems + 398}px)`
      }
    },
  }
}
</script>

<template>
  <div class="slider">
    <div class="slider__buttons">
      <button @click="sliderLeft">
        <svg>
          <use xlink:href="@/assets/icons/_sprite.svg#slider-left" />
        </svg>
      </button>
      <button @click="sliderRight">
        <svg>
          <use xlink:href="@/assets/icons/_sprite.svg#slider-right" />
        </svg>
      </button>
    </div>
    <div class="slider__wrapper">
      <div class="slider__items">
        <div
          v-for="item in items"
          :key="item.id"
          class="slider__item"
        >
          <div class="slider__item-cover">
            <img
              :src="item.image"
              alt="visual"
            >
          </div>
          <div class="slider__item-title">
            <span>({{ item.id < 10 ? `0${item.id}` : item.id }})</span>
            <h3>{{ item.title }}</h3>
          </div>
          <p class="slider__item-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  position: relative;

  &__wrapper {
    width: 100%;
    overflow-x: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__items {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 12px;
    border-right: 1px solid $color-divider;
    padding: 0 8px;

    &:first-child {
      padding-left: 30px;
    }

    &:last-child {
      border-right: none;
      padding-right: 30px;
    }

    &-cover {
      width: 380px;
      height: 260px;
      border-radius: 21px;
      overflow: hidden;

      img {
        width: 380px;
        height: 260px;
        object-fit: cover;
      }
    }

    &-title {
      display: flex;
      gap: 4px;
      margin-top: 12px;
      max-width: 98%;

      span {
        font: $font-small-playfair;
        font-size: 13px;
        padding-top: 2px;
        // font-variant-numeric: lining-nums;
      }

      h3 {
        font: $font-h3-gilroy;
        letter-spacing: -0.04em;
      }
    }

    &-description {
      color: $color-text-secondary;
      letter-spacing: -0.03em;
      max-width: 98%;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 12px;
    position: absolute;
    right: 30px;
    top: -104px;

    button {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $color-divider;
      border-radius: 50%;
      background: inherit;
      cursor: pointer;
      transition: background 0.2s ease-in-out, border 0.2s ease-in-out;

      svg {
        width: 10px;
        height: 10px;
        stroke: $color-general-black;
        transition: stroke 0.2s ease-in-out;
      }

      &:hover {
        border: 1px solid $color-general-dark;
        background: $color-general-dark;

        svg {
          stroke: $color-general-white;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .slider {
    &__item {
      &-cover {
        width: 330px;
        height: 218px;

        img {
          width: 330px;
          height: 218px;
        }
      }

      &-title {
        span {
          font-size: 10px;
        }

        h3 {
          font-size: 24px;
        }
      }

      &:first-child {
        padding-left: 20px;
      }

      &:last-child {
        padding-right: 20px;
      }
    }

    &__buttons {
      display: none;
    }
  }
}

@media (max-width: 590px) {
  .slider__item {

    &:first-child {
      padding-left: 16px;
    }

    &:last-child {
      padding-right: 16px;
    }
  }
}
</style>