<script setup lang="ts">
import { useRoute } from 'vue-router'
import Toast from 'primevue/toast'
import ConfirmDialog from 'primevue/confirmdialog'

const route = useRoute()
</script>

<template>
  <RouterView :key="route.fullPath" />

  <Toast position="bottom-right" />

  <ConfirmDialog :draggable="false" />
</template>

<style></style>
