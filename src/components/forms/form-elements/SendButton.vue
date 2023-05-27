<script>
export default {

}
</script>

<template>
  <button class="form-send-button">
    отправить
    <svg>
      <use xlink:href="@/assets/icons/_sprite.svg#arrow-link" />
    </svg>
  </button>
</template>

<style lang="scss" scoped>
.form-send-button {
  height: 60px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font: $font-button;
  letter-spacing: -0.03em;
  color: $color-general-dark;
  background: $color-general-white;
  border: none;
  cursor: pointer;
  border-radius: 40px;
  margin-top: 18px;
  transition: background 0.2s ease-in-out;

  svg {
    margin-left: 8px;
    width: 13px;
    height: 13px;
    stroke: $color-general-black;
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    background: $color-general-green;

    svg {
      transform: rotate(45deg);
    }
  }
}

@media (max-width: 1024px) {
  .form-send-button {
    height: 46px;
    padding: 14px 0;
    font-size: 16px;
  }
}
</style>