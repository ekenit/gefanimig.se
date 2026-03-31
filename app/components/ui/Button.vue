<template>
  <component
    :is="computedTag"
    :to="computedTo"
    :href="computedHref"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :type="tag === 'button' ? type : undefined"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <Icon v-if="icon && iconPosition === 'left'" :name="icon" :class="iconClasses" />
    <span v-if="$slots.default"><slot /></span>
    <Icon v-if="icon && iconPosition === 'right'" :name="icon" :class="iconClasses" />
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  tag?: 'button' | 'a' | 'NuxtLink'
  to?: string
  href?: string
  external?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button',
  iconPosition: 'left',
  type: 'button',
  disabled: false,
  external: false,
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const computedTag = computed(() => {
  if (props.external && (props.to || props.href)) return 'a'
  return props.tag
})

const computedTo = computed(() => {
  if (props.external) return undefined
  return props.to
})

const computedHref = computed(() => {
  if (props.external) return props.to || props.href
  return props.href
})

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950 disabled:opacity-50 disabled:cursor-not-allowed'

  const sizes: Record<string, string> = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-3.5 py-2 text-sm',
    lg: 'px-5 py-2.5 text-sm',
  }

  const variants: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    warning: 'bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500',
    ghost: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400',
  }

  return `${base} ${sizes[props.size]} ${variants[props.variant]}`
})

const iconClasses = computed(() => {
  const size = props.size === 'lg' ? 'h-4 w-4' : 'h-3.5 w-3.5'
  const spacing = props.iconPosition === 'left' ? 'mr-1.5' : 'ml-1.5'
  return `${size} ${spacing}`
})
</script>
