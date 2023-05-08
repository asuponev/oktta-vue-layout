<script>
import OpenPositionView from '@/components/OpenPositionView.vue'
import CareersSlider from '@/components/sliders/CareersSlider.vue'
import FormCareers from '@/components/forms/FormCareers.vue'
import Breadcrumbs from '@/components/UI/Breadcrumbs.vue'

export default {
  components: {
    OpenPositionView,
    CareersSlider,
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
      <careers-slider />
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