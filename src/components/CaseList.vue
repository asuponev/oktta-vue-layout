<script>
import HoverGreenBtn from '@/components/UI/HoverGreenBtn.vue'
import CaseCard from '@/components/CaseCard.vue'

import caseImg1 from '@/assets/images/mock-content/cases-page-1.png'
import caseImg2 from '@/assets/images/mock-content/cases-page-2.png'
import caseImg3 from '@/assets/images/mock-content/cases-page-3.png'
import caseImg4 from '@/assets/images/mock-content/cases-page-4.png'
import caseImg5 from '@/assets/images/mock-content/cases-page-5.png'
import caseImg6 from '@/assets/images/mock-content/cases-page-6.png'

export default {
  components: {
    HoverGreenBtn,
    CaseCard
  },
  data() {
    return {
      cases: [
        {
          id: 1,
          title: 'Логотип Vybez',
          image: caseImg1,
          category: 'брендинг',
          url: '/cases/mesh-3'
        },
        {
          id: 2,
          title: 'Логотип Vybez',
          image: caseImg2,
          category: 'брендинг',
          url: '/cases/mesh-3'
        },
        {
          id: 3,
          title: 'Логотип Vybez',
          image: caseImg3,
          category: 'брендинг',
          url: '/cases/mesh-3'
        },
        {
          id: 4,
          title: 'Сеть продуктовых магазинов «Вкустер»',
          image: caseImg4,
          category: 'брендинг',
          url: '/cases/mesh-3'
        },
        {
          id: 5,
          title: 'Логотип Vybez',
          image: caseImg5,
          category: 'брендинг',
          url: '/cases/mesh-3'
        },
        {
          id: 6,
          title: 'Сеть продуктовых магазинов «Вкустер»',
          image: caseImg6,
          category: 'брендинг',
          url: '/cases/mesh-3'
        },
      ]
    }
  },
}
</script>

<template>
  <div class="case">
    <case-card
      v-for="item in cases"
      :key="item.id"
      :caseItem="item"
    />
  </div>
</template>

<style lang="scss" scoped>
.case {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}

@media (max-width: 1024px) {
  .case {
    gap: 32px 8px;
  }
}

@media (max-width: 590px) {
  .case {
    gap: 32px;
  }
}
</style>