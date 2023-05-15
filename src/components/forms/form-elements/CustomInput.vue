<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
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
    isFile: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>
    <input
      :id="name"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      class="form-input"
    />
    <div
      v-if="isFile"
      class="form-group-file"
    >
      <div class="form-group-file-wrapper">
        <input
          type="file"
          class="form-input-file"
          title=" "
        />
        <svg>
          <use xlink:href="@/assets/icons/_sprite.svg#file" />
        </svg>
      </div>
    </div>
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
  position: relative;
}

.form-input {
  height: 48px;
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

  &::-webkit-file-upload-button {
    visibility: hidden;
  }
}

.form-group-file {
  width: 16px;
  height: 16px;
  background: inherit;
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 2;
  cursor: pointer;

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    svg {
      width: 16px;
      height: 16px;
      stroke: $color-general-white;
      transition: stroke 0.2s ease-in-out;
    }

    &:hover {
      svg {
        stroke: $color-general-green;
      }
    }
  }
}

.form-input-file {
  opacity: 0;
  width: 16px;
  height: 16px;
  position: absolute;
  cursor: pointer;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }
}
</style>