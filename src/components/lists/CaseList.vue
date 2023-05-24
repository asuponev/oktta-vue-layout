<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import CaseCard from '@/components/CaseCard.vue'

import caseImg1 from '@/assets/images/mock-content/cases-page-1.png'
import caseImg2 from '@/assets/images/mock-content/cases-page-2.png'
import caseImg3 from '@/assets/images/mock-content/cases-page-3.png'
import caseImg4 from '@/assets/images/mock-content/cases-page-4.png'
import caseImg5 from '@/assets/images/mock-content/cases-page-5.png'
import caseImg6 from '@/assets/images/mock-content/cases-page-6.png'

export default {
  components: {
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
          url: '/cases/b2cpl'
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
          url: '/cases/b2cpl'
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
          url: '/cases/b2cpl'
        },
      ]
    }
  },
  methods: {
    asynchronScroll() {
      if (window.innerWidth > 590) {
        const caseSection = document.querySelector('.case')

        gsap.to("[data-speed]", {
          y: (i, el) => (-1 * parseFloat(el.getAttribute("data-speed"))) * (caseSection.offsetHeight / 3),
          ease: 'none',
          scrollTrigger: {
            trigger: caseSection,
            invalidateOnRefresh: true,
            scrub: 0,
            // markers: true,
            start: '-200px top',
            end: 'bottom bottom'
          }
        })
      }
    }
  },
  mounted() {
    this.asynchronScroll()
  }
}
</script>

<template>
  <div class="case">
    <div
      v-for="(item, index) in cases"
      :key="item.id"
      :data-speed="index % 2 === 0 ? 0.15 : 0"
      class="case__box"
    >
      <case-card
        :key="item.id"
        :caseItem="item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.case {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  overflow: hidden;

  &__box {
    width: calc(50% - 20px / 2);
    transition: transform 1s ease;
  }
}

@media (max-width: 1024px) {
  .case {
    gap: 32px 8px;

    &__box {
      width: calc(50% - 8px / 2);
    }
  }
}

@media (max-width: 590px) {
  .case {
    gap: 32px;

    &__box {
      width: 100%;
    }
  }
}
</style>