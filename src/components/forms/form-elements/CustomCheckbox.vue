<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },
    legend: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div class="checkbox-group">
    <legend>{{ legend }}</legend>
    <div class="checkbox-group-wrapper">
      <div class="checkbox-group-items">
        <div
          v-for="item in items"
          :key="item.value"
          class="checkbox-item"
        >
          <input
            type="checkbox"
            :id="item.value"
            :name="item.value"
            :value="item.value"
            hidden
            class="checkbox-input"
          />
          <label
            class="checkbox-label"
            :for="item.value"
          >
            <span>{{ item.label }}</span>
            <div class="checkbox-icon">
              <svg>
                <use xlink:href="@/assets/icons/_sprite.svg#close" />
              </svg>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkbox-group {
  color: $color-general-white;
  background: none;
  border: none;
  font-size: 18px;

  legend {
    width: 100%;
    margin-bottom: 12px;
  }

  &-items {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}

.checkbox-label {
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

.checkbox-icon {
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
  transition: opacity 0.2s ease-in-out, position 0.2s ease-in-out, background 0.2s ease-in-out;

  svg {
    stroke: $color-general-dark;
    width: 10px;
    height: 10px;
    transition: stroke 0.2s ease-in-out;
  }
}

.checkbox-input:checked+.checkbox-label {
  padding-inline: 16px 4px;
  color: $color-general-dark;
  background: $color-general-green;
  border: 1px solid $color-border-green;

  .checkbox-icon {
    position: static;
    z-index: 1;
    opacity: 1;
  }
}

.checkbox-input:hover+.checkbox-label {
  background: rgba(255, 255, 255, 0.14);
}

.checkbox-input:checked:hover+.checkbox-label {
  background: $color-general-green;

  .checkbox-icon {
    background: $color-general-dark;

    svg {
      stroke: $color-general-white;
    }
  }
}

@media (max-width: 590px) {

  .checkbox-group-wrapper {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .checkbox-group-items {
    flex-wrap: nowrap;
  }

  .checkbox-label {
    span {
      white-space: nowrap;
    }
  }

  .checkbox-item:last-child {
    padding-right: 24px;
  }
}
</style>