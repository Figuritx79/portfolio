<script setup lang="ts">
import { computed } from 'vue'
// defineProps(['className','size', 'children'])

const props = defineProps<{
  className?: string
  size?: 'sm' | 'default' | 'large'
}>()

const basesClasses =
  'relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25'
const sizeClasess = {
  sm: 'px-4 py-2 text-sm',
  default: 'px-6 py-3 text-base',
  large: 'px-8 py-4 text-lg',
}
const clasess = computed(
  () => `${basesClasses} ${sizeClasess[props.size ?? 'default']} ${props.className ?? ''}`,
)
</script>

<template>
  <button :class="clasess">
    <span class="relative flex items-center justify-center gap-2">
      <slot />
    </span>
  </button>
</template>
