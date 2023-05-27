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
      ],
      positionYImg: -13
    }
  },
  methods: {
    onListHover(clientId) {
      this.getPositionImg()
      document.querySelector('.list-visual__inner').classList.add('active')
      document.querySelectorAll('.list-visual__item').forEach(cover => {
        if (clientId == cover.dataset.client) {
          cover.classList.add('active')
        }
      })
    },
    onItemLeave(clientId) {
      document.querySelectorAll('.list-visual__item').forEach(cover => {
        if (clientId == cover.dataset.client) {
          cover.classList.remove('active')
        }
      })
    },
    onListLeave() {
      document.querySelector('.list-visual__inner').classList.remove('active')
      document.querySelectorAll('.list-visual__item').forEach(cover => cover.classList.remove('active'))
    },
    getPositionImg() {
      const clientsWrapper = document.querySelector('.clients-list')
      if (clientsWrapper.getBoundingClientRect().top > window.innerHeight * 0.3) {
        this.positionYImg = -13
      } else if (clientsWrapper.getBoundingClientRect().bottom < window.innerHeight * 0.7) {
        this.positionYImg = 113
      } else {
        this.positionYImg = 50
      }
    }
  },
}
</script>

<template>
  <div
    class="clients-list"
    @mouseleave="() => onListLeave()"
  >
    <ul class="list">
      <li
        v-for="client in clients"
        :key="client.id"
        @mouseover="() => onListHover(client.id)"
        @mouseleave="() => onItemLeave(client.id)"
        class="list__item"
      >
        <div class="list__item-wrapper">
          <h3 class="list__item-title">{{ client.name }}</h3>
          <button class="list__item-btn">
            <svg>
              <use xlink:href="@/assets/icons/_sprite.svg#arrow-link" />
            </svg>
          </button>
        </div>
      </li>
    </ul>
    <div class="list-visual">
      <div
        class="list-visual__inner"
        :style="{ 'transform': `translate3d(146%, ${positionYImg}%, 0)` }"
      >
        <div
          v-for="client in clients"
          :key="client.id"
          :data-client="client.id"
          class="list-visual__item"
        >
          <div>
            <p>{{ client.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      margin: 0 auto;
      max-width: 1440px;
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

    &-cover {
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(25% + 20px);
      margin: auto;
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

.clients-list {
  position: relative;
  width: 100%;
}

.list-visual {
  display: none;
}

@media (min-width: 1025px) {
  .list-visual {
    display: block;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;

    &__inner {
      border-radius: 21px;
      overflow: hidden;
      position: relative;
      background: $color-orange;
      width: 260px;
      height: 360px;
      opacity: 0;
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

      &.active {
        opacity: 1;
      }
    }

    &__item {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      background: $color-orange;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
      transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;

      &.active {
        transform: translate3d(0, 0, 0);
        opacity: 1;
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
</style>