<script lang="ts" setup>
interface Text {
  tagName: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
  bold?: boolean
}

const props = defineProps<Text>()
</script>

<template>
  <component
    :is="props.tagName"
    class="typography"
    :class="[`tag--${tagName}`, size ? `size--${size}` : '', bold ? 'typography--bold' : '']"
  >
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
.typography {
  font-style: normal;
  line-height: 150%;

  &--bold {
    font-weight: 700;
  }
}

.tag {
  &--h1 {
    font-size: 64px;
  }
  &--h2 {
    font-size: 48px;
  }
  &--h3 {
    font-size: 36px;
  }
  &--h4 {
    font-size: 24px;
  }
  &--h5 {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    &--h1 {
      font-size: 48px;
    }
    &--h2 {
      font-size: 36px;
    }
    &--h3 {
      font-size: 24px;
    }
    &--h4 {
      font-size: 20px;
    }
    &--h5 {
      font-size: 16px;
    }
  }
}
.size {
  &--xs {
    font-size: 12px;
  }
  &--s {
    font-size: 16px;
  }
  &--m {
    font-size: 18px;
  }
  &--l {
    font-size: 24px;
  }
  &--xl {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    &--xs {
      font-size: 8px;
    }
    &--s {
      font-size: 12px;
    }
    &--m {
      font-size: 14px;
    }
    &--l {
      font-size: 20px;
    }
    &--xl {
      font-size: 32px;
    }
  }
}
</style>
