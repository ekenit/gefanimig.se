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
    > <Icon
      v-if="icon && iconPosition === 'left'"
      :name="icon"
      :class="iconClasses"
    /> <span v-if="$slots.default"><slot /></span> <Icon
      v-if="icon && iconPosition === 'right'"
      :name="icon"
      :class="iconClasses"
    /> </component
  >
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

// Computed properties for proper external link handling
const computedTag = computed(() => {
  if (props.external && (props.to || props.href)) {
    return 'a'
  }
  return props.tag
})

const computedTo = computed(() => {
  if (props.external) {
    return undefined
  }
  return props.to
})

const computedHref = computed(() => {
  if (props.external) {
    return props.to || props.href
  }
  return props.href
})

const buttonClasses = computed(() => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-xl border border-transparent transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]'

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl focus:ring-blue-500 dark:focus:ring-blue-400',
    secondary:
      'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 shadow-sm hover:shadow-md focus:ring-gray-500 dark:focus:ring-gray-400',
    danger:
      'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl focus:ring-red-500 dark:focus:ring-red-400',
    success:
      'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl focus:ring-green-500 dark:focus:ring-green-400',
    warning:
      'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg hover:shadow-xl focus:ring-orange-500 dark:focus:ring-orange-400',
    ghost:
      'bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400',
  }

  return `${baseClasses} ${sizeClasses[props.size]} ${variantClasses[props.variant]}`
})

const iconClasses = computed(() => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }

  const spacingClasses = {
    sm: props.iconPosition === 'left' ? 'mr-2' : 'ml-2',
    md: props.iconPosition === 'left' ? 'mr-2' : 'ml-2',
    lg: props.iconPosition === 'left' ? 'mr-3' : 'ml-3',
  }

  return `${sizeClasses[props.size]} ${spacingClasses[props.size]}`
})
</script>

