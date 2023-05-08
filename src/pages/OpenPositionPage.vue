<script>
import OpenPositionView from '@/components/sections/OpenPositionView.vue'
import ComfortWorkSection from '@/components/sections/ComfortWorkSection.vue'
import FormCareers from '@/components/forms/FormCareers.vue'
import Breadcrumbs from '@/components/UI/Breadcrumbs.vue'

export default {
  components: {
    OpenPositionView,
    ComfortWorkSection,
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
  <breadcrumbs
    :items="[{ name: 'Вакансии', path: '/careers' }, { name: position.title }]"
  />
  <open-position-view :position="position" />
  <comfort-work-section />
  <form-careers
    :title="'Узнали себя?'"
    :description="'Оставляйте заявку — ответим в течение недели в Telegram или по почте'"
  />
</template>

<style lang="scss" scoped></style>