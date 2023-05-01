<script>
export default {
  data() {
    return {
      clients: [
        { id: 1, name: 'No Kids Stickers' },
        { id: 2, name: 'Вкустер' },
        { id: 3, name: 'DataFix' },
        { id: 4, name: 'СНГБ Банк' },
        { id: 5, name: 'Нейва Банк' },
        { id: 6, name: 'Цветовик' },
        { id: 7, name: 'Mirrolla' },
        { id: 8, name: 'Гейзер' },
        { id: 9, name: 'Espadro' },
        { id: 10, name: 'Kidsee' },
      ]
    }
  }
}
</script>

<template>
  <ul class="list">
    <li
      v-for="client in clients"
      :key="client.id"
      class="list__item"
    >
      <div class="list__item-wrapper">
        <p class="list__item-title">{{ client.name }}</p>
        <button class="list__item-btn">
          <svg>
            <use xlink:href="@/assets/icons/_sprite.svg#arrow-link">
            </use>
          </svg>
        </button>
      </div>
      <div class="list__item-cover">
        <div>
          <p>{{ client.name }}</p>
        </div>
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
    }

    &-btn {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $color-divider;
      border-radius: 50%;
      transition: border 0.2s ease-in-out, background 0.2s ease-in-out;
      cursor: pointer;

      svg {
        width: 16px;
        height: 16px;
        stroke: $color-general-black;
        transition: stroke 0.2s ease-in-out;
      }
    }

    &-cover {
      display: none;
      position: absolute;
      top: -48px;
      left: calc(25% + 20px);
      height: 360px;
      width: 260px;
      background: $color-orange;
      border-radius: 21px;

      div {
        width: 0;
        height: 100%;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
      }
    }
  }
}

@media (min-width: 769px) {
  .list {
    &__item:hover {
      background: $color-general-green;

      .list__item-link {
        border: 1px solid $color-general-dark;
        background: $color-general-dark;

        svg {
          stroke: $color-general-white;
        }
      }

      .list__item-cover {
        display: block;

        div {
          opacity: 1;
          width: 100%;
        }
      }
    }
  }
}
</style>