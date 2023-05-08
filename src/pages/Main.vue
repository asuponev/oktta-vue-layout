<script>
import MainTitleSection from '@/components/sections/MainTitleSection.vue'
import MainCaseSection from '@/components/sections/MainCaseSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ClientsSection from '@/components/sections/ClientsSection.vue'
import PublicationsSection from '@/components/sections/PublicationsSection.vue'

export default {
  components: {
    MainTitleSection,
    MainCaseSection,
    ServicesSection,
    ClientsSection,
    PublicationsSection,
  },
}
</script>

<template>
  <main-title-section />
  <main-case-section />
  <services-section />
  <clients-section />
  <publications-section />
</template>

<style lang="scss" scoped></style>