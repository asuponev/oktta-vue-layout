<script>
import HoverGreenBtn from '@/components/UI/HoverGreenBtn.vue'

export default {
  components: {
    HoverGreenBtn
  },
  data() {
    return {
      publications: [
        {
          id: 1,
          title: '5 эффективных способов развить soft skills у сотрудников',
          description: 'Про то, что soft skills прокачивать нужно, сейчас говорят все — от мотивационных ораторов до hr-специалистов. рассказываем, как это сделать, а главное, зачем.',
          url: '',
          vcru: 'vc.ru'
        },
        {
          id: 2,
          title: '20 фильмов и сериалов для дизайнеров',
          description: 'Расширить профессиональный кругозор можно и лежа на диване. советуем 20 фильмов для дизайнеров и о дизайнерах.',
          url: '',
          vcru: ''
        },
        {
          id: 3,
          title: 'А у вашего бренда есть tone of voice?',
          description: 'Четкий посыл и схожие с клиентом ценности. это поможет выделиться, а значит — заинтересовать аудиторию. разбираемся в понятии tone of voice и в том, как его сформировать.',
          url: '',
          vcru: 'vc.ru'
        },
        {
          id: 4,
          title: 'Нетворкинг: 6 площадок для знакомств по интересам',
          description: 'Перенимать опыт — хорошо. особенно в работе. куда пойти, чтобы общаться не только с соседом по рабочему столу, а и с экспертами из различных сфер? рассказываем о классных нетворкинг-платформах.',
          url: '',
          vcru: 'vc.ru'
        },
      ]
    }
  }
}
</script>

<template>
  <ul class="list">
    <li
      v-for="publication in publications"
      :key="publication.id"
      class="list__item"
    >
      <div class="list__item-title">
        <span>({{ publication.id < 10 ? `0${publication.id}` : publication.id }})</span>
        <h3>{{ publication.title }}</h3>
      </div>
      <p class="list__item-description">{{ publication.description }}</p>
      <button
        v-if="publication.vcru"
        class="list__item-btn"
      >
        vc.ru
        <svg>
          <use xlink:href="@/assets/icons/_sprite.svg#arrow-link">
          </use>
        </svg>
      </button>
      <hover-green-btn class="publications-hover-btn">
        читать
      </hover-green-btn>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  list-style-type: none;

  &__item {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px 0;
    border-bottom: 1px solid $color-divider;
    position: relative;

    &:first-child {
      padding-top: 16px;
    }

    &:last-child {
      border-bottom: none;
      padding-bottom: 0px;
    }

    &-title {
      display: flex;
      gap: 4px;

      span {
        font: $font-small-playfair;
        font-size: 13px;
        padding-top: 4px;
      }

      h3 {
        font: $font-h3-gilroy;
        letter-spacing: -0.04em;
      }
    }

    &-btn {
      width: 91px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      border: 1px solid $color-divider;
      border-radius: 57px;
      background: $color-general-white;
      color: $color-general-dark;
      cursor: pointer;
      font: $font-body;
      font-size: 18px;
      padding: 8px 16px;
      transition: border 0.2s ease-in-out, background 0.2s ease-in-out;

      svg {
        width: 13px;
        height: 13px;
        stroke: $color-general-black;
        transition: stroke 0.2s ease-in-out;
      }

      &:hover {
        border: 1px solid $color-general-dark;
        background: $color-general-dark;
        color: $color-general-white;

        svg {
          stroke: $color-general-white;
        }
      }

      &:active {
        background: $color-hover-bg;
        border: 1px solid $color-hover-bg;
      }
    }

    &-description {
      color: $color-text-secondary;
      letter-spacing: -0.03em;
    }
  }
}

.publications-hover-btn {
  display: none;
  opacity: 0;
  transform: rotate(-30deg);
  top: -24px;
  left: -134px;
}

@media (min-width: 1025px) {
  .publications-hover-btn {
    display: block;
  }

  .list__item:hover {
    .publications-hover-btn {
      opacity: 1;
    }
  }
}

@media (max-width: 900px) {
  .list__item-title {
    h3 {
      font-size: 24px;
    }
  }
}
</style>