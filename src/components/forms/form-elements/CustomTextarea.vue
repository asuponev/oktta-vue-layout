<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    heightTextarea: {
      type: Number,
      default: 120
    }
  },
  computed: {
    cssProps() {
      return {
        'height': (this.heightTextarea) + 'px'
      }
    }
  }
}
</script>

<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>
    <textarea
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :style="cssProps"
      class="form-textarea"
    ></textarea>
  </div>
</template>

<style lang="scss" scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  color: $color-general-white;
  letter-spacing: -0.03em;
}

.form-textarea {
  resize: none;
  // height: 120px;
  padding: 12px 16px;
  background: $color-bg-input;
  border: 1px solid $color-border-input;
  border-radius: 12px;
  font: $font-body;
  color: $color-general-white;
  outline: none;
  letter-spacing: -0.03em;

  &:focus {
    border: 1px solid $color-general-white;
  }

  &--error {
    border: 1px solid $color-error-input;
  }
}
</style>