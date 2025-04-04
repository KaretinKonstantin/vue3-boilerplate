<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
// Components
import PButton from 'primevue/button'
// Composables
import { useNotification } from '@/composables/useNotification'

const props = defineProps<{
  severity?: string
  icon?: string
  label?: string
  rounded?: boolean
  outlined?: boolean
  disabled?: boolean
  iconPos?: 'left' | 'top' | 'right' | 'bottom'
  title?: string
  size?: string
}>()

const emit = defineEmits<{
  (e: 'click', v: MouseEvent): void
}>()

const thisInstance = getCurrentInstance()
const notification = useNotification()

const templateClick = (event: MouseEvent) => {
  thisInstance?.vnode?.props?.onClick
    ? emit('click', event)
    : notification.inProgress()
}
</script>

<template>
  <PButton
    :severity="props.severity"
    :icon="props.icon"
    :label="props.label"
    :rounded="rounded"
    :disabled="disabled"
    :outlined="outlined"
    :icon-pos="iconPos ?? 'right'"
    :size="size"
    v-bind="$attrs"
    @click="e => templateClick(e)"
  >
    <slot></slot>
  </PButton>
</template>

<style lang="scss" scoped></style>
