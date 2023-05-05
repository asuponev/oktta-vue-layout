<script>
export default {

}
</script>

<template>
  <button class="hover-green-btn">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.hover-green-btn {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: none;
  font: $font-button;
  background: $color-general-green;
  color: $color-general-dark;
  letter-spacing: -0.03em;
  position: absolute;
  transform: rotate(24.32deg);
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
}
</style>