<template>
  <div :class="cardClasses">
    <div v-if="$slots.header || title" class="p-6 pb-0">
      <slot name="header">
        <h3 v-if="title" class="text-lg font-semibold">{{ title }}</h3>
      </slot>
    </div>
    <div :class="contentClasses">
      <slot />
    </div>
    <div v-if="$slots.footer" class="p-6 pt-0">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'glass'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  title?: string
  hoverable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  hoverable: false
})

const cardClasses = computed(() => {
  const baseClasses = 'rounded-2xl border transition-all duration-200'
  
  const variantClasses = {
    default: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 shadow-sm',
    glass: 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-gray-200/30 dark:border-gray-700/30 shadow-lg'
  }
  
  const hoverClasses = props.hoverable 
    ? 'hover:shadow-lg hover:border-blue-200/60 dark:hover:border-blue-500/30 hover:shadow-blue-100/25 dark:hover:shadow-blue-900/25' 
    : ''
  
  return `${baseClasses} ${variantClasses[props.variant]} ${hoverClasses}`
})

const contentClasses = computed(() => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  return paddingClasses[props.padding]
})
</script> 