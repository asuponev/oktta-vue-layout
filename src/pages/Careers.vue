<script>
import gsap from 'gsap'
import { TextPlugin } from 'gsap/all'

import CareerInOkttaSection from '@/components/sections/CareerInOkttaSection.vue'
import OpenPositionsList from '@/components/sections/OpenPositionsList.vue'
import FormCareers from '@/components/forms/FormCareers.vue'

gsap.registerPlugin(TextPlugin)
export default {
  components: {
    CareerInOkttaSection,
    OpenPositionsList,
    FormCareers
  },
  methods: {
    moveTitleText() {
      document.querySelectorAll('.animate').forEach((elem) => {
        gsap.to(elem, {
          right: 0,
          duration: 3,
          delay: 1
        })
      })
    },
    typeWriter() {
      const text = document.querySelector('.typewriter')
      gsap.fromTo('.cursor',
        { autoAlpha: 0, x: -20 },
        { autoAlpha: 1, duration: 0.5, repeat: -1, ease: "steps(2)" }
      )
      gsap.from(text, {
        text: '',
        duration: text.innerHTML.length * 0.4,
        delay: 0.5,
        ease: "none",
      })
    }
  },
  mounted() {
    this.moveTitleText()
    this.typeWriter()
  },
}
</script>

<template>
  <div class="container">
    <section>
      <div class="wrapper">
        <div class="title">
          <h1 class="title__text">
            <span>Д<span class="italic">е</span>лаем&nbsp;</span>
            <span class="animate">гранд<span class="italic">и</span>озное,</span>
          </h1>
          <h1 class="title__text">
            <span>не хв<span class="italic">а</span>тает только</span>
          </h1>
          <h1 class="title__text">
            <span class="italic typewriter">тебя</span>
            <span class="italic cursor">|</span>
          </h1>
        </div>
      </div>
    </section>
    <career-in-oktta-section />
    <open-positions-list />
    <form-careers />
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;

  &__text {
    font: $font-h1-gilroy;
    letter-spacing: -0.04em;
    position: relative;

    .italic {
      font: $font-h1-playfair;
    }

    .animate {
      position: absolute;
    }

    &:last-child {
      text-align: center;
    }
  }
}

@media (max-width: 1024px) {
  .title {
    padding-top: 200px;

    &__text {
      font-size: 64px;

      .italic {
        font-size: 64px;
      }
    }
  }
}

@media (max-width: 640px) {
  .title {
    &__text {

      &:nth-child(1) {
        height: 115.2px;
      }

      .animate {
        display: block;
      }
    }
  }
}

@media (max-width: 590px) {
  .title {
    padding-top: 130px;

    &__text {
      font-size: 40px;

      &:nth-child(1) {
        height: 72px;
      }

      .italic {
        font-size: 40px;
      }
    }
  }
}
</style>