<script>
import OpenPositionView from '@/components/OpenPositionView.vue'
import CustomSlider from '@/components/CustomSlider.vue'
import FormCareers from '@/components/forms/FormCareers.vue'
import Breadcrumbs from '@/components/UI/Breadcrumbs.vue'

import sliderImage1 from '@/assets/images/careers-slider/card1.svg'
import sliderImage2 from '@/assets/images/careers-slider/card2.svg'
import sliderImage3 from '@/assets/images/careers-slider/card3.svg'
import sliderImage4 from '@/assets/images/careers-slider/card4.svg'

export default {
  components: {
    OpenPositionView,
    CustomSlider,
    FormCareers,
    Breadcrumbs
  },
  data() {
    return {
      position: {
        id: 1,
        title: 'Junior-дизайнер',
        tags: ['фуллтайм', 'удаленно', 'от 50 000 ₽'],
        tasks: [
          'Проектирование пользовательских интерфейсов на основе бизнес-требований',
          'Проектирование mobile интерфейсов (IOS/Android)',
          'Взаимодействие с аналитиком и разработчиками',
          'Разработка и описание пользовательских сценариев',
          'Умение предложить несколько концепций решения задач',
          'Презентация макетов и навыки защиты своих решений',
          'Составление гипотез для исследований, участие в проведении UX-тестов'
        ],
        requirements: [
          'Опыт работы от 2 лет',
          'Знание методологий UX-тестирования, понимание основ юзабилити',
          'Уверенный пользователь Figma, Adobe, Principle/Ae',
          'Опыт проектирования e-commerce и мобильных приложений',
          'Знание современных тенденций UX/UI дизайна',
          'Ответственность и самостоятельность',
          'Умение проектировать интерфейсы на основе данных',
          'Понимание продуктового подхода'
        ],
        conditions: [
          'Удаленная работа: 5/2, гибкий график',
          'Возможность профессиональной самореализации',
          'Понятно выстроенные рабочие процессы',
          'Интересные и разнообразные проекты'
        ]
      },
      sliderItems: [
        {
          id: 1,
          title: 'Свобода мысли и действий',
          description: 'Нет бюрократической кабалы и микроменеджмента.',
          image: sliderImage1
        },
        {
          id: 2,
          title: 'Неформальное общение',
          description: 'Не желаем доброго времени суток и не обращаемся на Вы.',
          image: sliderImage2
        },
        {
          id: 3,
          title: 'Удалёнка',
          description: 'Каждый может выбрать удобный график. И никто не будет осуждать за поздние ответы.',
          image: sliderImage3
        },
        {
          id: 4,
          title: 'Инструменты',
          description: 'Используем современный стек, оплачиваем английский и подписки на сервисы.',
          image: sliderImage4
        },
      ]
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <breadcrumbs
      :items="[{ name: 'Вакансии', path: '/careers' }, { name: position.title }]"
    />
    <open-position-view :position="position" />
    <section>
      <div class="title">
        <span>Ком<span class="italic">ф</span>ортная работа без рутины</span>
      </div>
      <custom-slider :items="sliderItems" />
    </section>
    <section class="section-form">
      <form-careers
        :title="'Узнали себя?'"
        :description="'Оставляйте заявку — ответим в течение недели в Telegram или по почте'"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 16px 0 30px;
}

.title {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 100px 30px 0;
  font: $font-page-title-gilroy;
  letter-spacing: -0.04em;
  margin-bottom: 50px;

  .italic {
    font: $font-page-title-playfair;
  }

  span:first-child {
    grid-area: 1 / 2 / 2 / 4;
    max-width: 600px;
  }
}

.section-form {
  padding-inline: 30px;
}

@media (max-width: 1024px) {
  .title {
    gap: 8px;
    padding-inline: 20px;
    font-size: 40px;

    .italic {
      font-size: 40px;
    }

    span:first-child {
      grid-area: 1 / 3 / 2 / 5;
      max-width: 358px;
    }
  }

  .section-form {
    padding-inline: 20px;
  }
}

@media (max-width: 590px) {
  .title {
    gap: 8px;
    padding-inline: 16px;
    font-size: 32px;

    .italic {
      font-size: 32px;
    }

    span:first-child {
      grid-area: 1 / 1 / 2 / 5;
    }
  }

  .section-form {
    padding-inline: 16px;
  }
}
</style>