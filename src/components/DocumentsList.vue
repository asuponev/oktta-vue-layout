<script>
export default {

}
</script>

<template>
  <ul class="list">
    <li class="list__item">
      <div class="list__item-wrapper">
        <h3 class="list__item-title">
          През<span class="italic">е</span>нтация
        </h3>
        <button class="list__item-btn">
          <svg>
            <use xlink:href="@/assets/icons/_sprite.svg#arrow-link" />
          </svg>
        </button>
      </div>
    </li>
    <li class="list__item">
      <div class="list__item-wrapper">
        <h3 class="list__item-title">
          Согл<span class="italic">а</span>сие на обработку персональных данных
        </h3>
        <button class="list__item-btn">
          <svg>
            <use xlink:href="@/assets/icons/_sprite.svg#arrow-link" />
          </svg>
        </button>
      </div>
    </li>
    <li class="list__item">
      <div class="list__item-wrapper">
        <h3 class="list__item-title">
          Политика кон<span class="italic">ф</span>иденциальности
        </h3>
        <button class="list__item-btn">
          <svg>
            <use xlink:href="@/assets/icons/_sprite.svg#arrow-link" />
          </svg>
        </button>
      </div>
    </li>
    <li class="list__item">
      <div class="list__item-wrapper">
        <h3 class="list__item-title">
          Рекв<span class="italic">и</span>зиты
        </h3>
        <button class="list__item-btn">
          <svg>
            <use xlink:href="@/assets/icons/_sprite.svg#arrow-link" />
          </svg>
        </button>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  position: relative;
  width: 100%;

  &__item {
    width: 100%;
    border-bottom: 1px solid $color-divider;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:last-child {
      border-bottom: none;
    }

    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 11.5px 30px;
    }

    &-title {
      font: $font-h3-gilroy;
      letter-spacing: -0.04em;

      .italic {
        font: $font-h3-playfair;
      }
    }

    &-btn {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $color-divider;
      border-radius: 50%;
      background: $color-general-white;
      transition: border 0.2s ease-in-out, background 0.2s ease-in-out;
      cursor: pointer;

      svg {
        width: 16px;
        height: 16px;
        stroke: $color-general-black;
        transition: stroke 0.2s ease-in-out;
      }
    }

    &:hover {
      background: $color-general-green;

      .list__item-btn {
        border: 1px solid $color-general-dark;
        background: $color-general-dark;

        svg {
          stroke: $color-general-white;
        }

        &:active {
          background: $color-hover-bg;
          border: 1px solid $color-hover-bg;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .list {
    &__item {

      &-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 20px;
      }

      &-title {
        font-size: 24px;

        .italic {
          font-size: 24px;
        }
      }

      &-btn {
        width: 38px;
        height: 38px;

        svg {
          width: 12px;
          height: 12px;
        }
      }
    }
  }
}

@media (max-width: 590px) {
  .list {
    &__item {

      &-wrapper {
        padding: 16px 20px;
      }

      &-title {
        max-width: 250px;
        line-height: 1.2;
      }
    }
  }
}
</style>