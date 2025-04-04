<script lang="ts" setup>
import Button from '../buttons/Button.vue'
</script>

<template>
  <div class="grid grid-cols-4 gap-x-10 gap-y-5">
    <div>
      <span class="block mb-2">Normal lg</span>
      <Button
        class="w-full"
        label="Button"
        size="large"
        severity="secondary"
      ></Button>
    </div>

    <div>
      <span class="block mb-2">Disabled lg</span>
      <Button
        class="w-full"
        label="Button"
        size="large"
        severity="secondary"
        :disabled="true"
      ></Button>
    </div>

    <div>
      <span class="block mb-2">Icon left LG</span>
      <Button
        class="w-full"
        label="Button"
        size="large"
        severity="secondary"
        icon="icon-[uil--airplay]"
        icon-pos="left"
      ></Button>
    </div>

    <div>
      <span class="block mb-2">Icon right LG</span>
      <Button
        class="w-full"
        icon="icon-[material-symbols--add]"
        label="Button"
        size="large"
        severity="secondary"
        icon-pos="right"
      ></Button>
    </div>

    <div>
      <span class="block mb-2">Normal</span>
      <Button class="w-full" label="Button" severity="secondary"></Button>
    </div>

    <div>
      <span class="block mb-2">Disabled</span>
      <Button
        class="w-full"
        label="Button"
        severity="secondary"
        :disabled="true"
      ></Button>
    </div>

    <div>
      <span class="block mb-2">Icon left</span>
      <Button
        class="w-full"
        label="Button"
        icon="icon-[uil--airplay]"
        icon-pos="left"
        severity="secondary"
      ></Button>
    </div>

    <div>
      <span class="block mb-2">Icon right</span>
      <Button
        class="w-full"
        icon="icon-[material-symbols--add]"
        label="Button"
        icon-pos="right"
        severity="secondary"
      ></Button>
    </div>

    <div>
      <span class="block mb-2">Normal sm</span>
      <Button
        class="w-full"
        label="Button"
        size="small"
        severity="secondary"
      ></Button>
    </div>

    <div>
      <span class="block mb-2">Disabled sm</span>
      <Button
        class="w-full"
        label="Button"
        size="small"
        severity="secondary"
        :disabled="true"
      ></Button>
    </div>

    <div>
      <span class="block mb-2">Icon left sm</span>
      <Button
        class="w-full"
        label="Button"
        icon="icon-[uil--airplay]"
        icon-pos="left"
        size="small"
        severity="secondary"
      ></Button>
    </div>

    <div>
      <span class="block mb-2">Icon right sm</span>
      <Button
        class="w-full"
        icon="icon-[material-symbols--add]"
        label="Button"
        icon-pos="right"
        size="small"
        severity="secondary"
      ></Button>
    </div>
  </div>
</template>

<style scoped></style>
