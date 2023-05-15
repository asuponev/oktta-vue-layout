<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    },
    legend: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'name'
    }
  }
}
</script>

<template>
  <div class="radio-group">
    <p class="radio-group-legend">{{ legend }}</p>
    <div class="radio-group-wrapper">
      <div class="radio-group-items">
        <div
          v-for="(item, index) in items"
          :key="item.value"
          class="radio-item"
        >
          <input
            type="radio"
            :id="`${name}Choice${index}`"
            :name="name"
            :value="item.value"
            hidden
            class="radio-input"
          />
          <label
            class="radio-label"
            :for="`${name}Choice${index}`"
          >
            <span>{{ item.label }}</span>
            <div class="radio-icon">
              <svg>
                <use xlink:href="@/assets/icons/_sprite.svg#tick" />
              </svg>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.radio-group {
  color: $color-general-white;
  background: none;
  border: none;
  font-size: 18px;

  &-legend {
    width: 100%;
    margin-bottom: 12px;
  }

  &-items {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding-inline: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 29px;
  font-size: 14px;
  letter-spacing: -0.03em;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out, border 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
}

.radio-icon {
  position: absolute;
  z-index: -1;
  opacity: 1;
  right: 0;
  width: 28px;
  height: 28px;
  background: rgba(0, 0, 0, 0.14);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in-out, position 0.2s ease-in-out;

  svg {
    width: 10px;
    height: 10px;
  }
}

.radio-input:checked+.radio-label {
  padding-inline: 16px 4px;
  color: $color-general-dark;
  background: $color-general-green;
  border: 1px solid $color-border-green;

  .radio-icon {
    position: static;
    z-index: 1;
    opacity: 1;
  }
}

.radio-input:hover+.radio-label {
  background: rgba(255, 255, 255, 0.14);
}

.radio-input:checked:hover+.radio-label {
  background: $color-general-green;
}

@media (max-width: 590px) {

  .radio-group-wrapper {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .radio-group-items {
    flex-wrap: nowrap;
  }

  .radio-label {
    span {
      white-space: nowrap;
    }
  }

  .radio-item:last-child {
    padding-right: 24px;
  }
}
</style>