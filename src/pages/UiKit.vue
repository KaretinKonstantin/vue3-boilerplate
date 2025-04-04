<script setup lang="ts">
import { ref } from 'vue'

import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Checkbox from 'primevue/checkbox'
import RadioButton from 'primevue/radiobutton'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import AutoComplete from 'primevue/autocomplete'
import Dropdown from 'primevue/dropdown'
import MultiSelect from 'primevue/multiselect'
import Textarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'
import FloatLabel from 'primevue/floatlabel'
import PrimaryButtons from '@/components/_ui_kit/PrimaryButtons.vue'
import SecondaryButtons from '@/components/_ui_kit/SecondaryButtons.vue'
import TertiaryButtons from '@/components/_ui_kit/TertiaryButtons.vue'

const checkboxValue = ref(true)
const radioValue = ref(true)
const inputValue = ref(null)
const inputValueOne = ref(null)
const passwordValue = ref()
const autocompleteValue = ref()
const dropdownValue = ref()
const multiselectValue = ref()
const textareaValue = ref()
const calendarValue = ref(new Date())

const options = ref([
  {
    title: 'Option 1',
    value: 'option-1',
  },
  {
    title: 'Option 2',
    value: 'option-2',
  },
  {
    title: 'Option 3',
    value: 'option-3',
  },
  {
    title: 'Option 4',
    value: 'option-4',
  },
  {
    title: 'Option 5',
    value: 'option-5',
  },
])

const search = () => {
  options.value = [
    {
      title: 'Search Option 1',
      value: 'search-option-1',
    },
    {
      title: 'Search Option 2',
      value: 'search-option-2',
    },
  ]
}
</script>

<template>
  <div class="uikit p-5">
    <div class="uikit__wrapper">
      <div class="uikit__buttons">
        <h2 class="heading text-violet text-2xl font-medium mb-5">Buttons</h2>

        <Tabs value="0">
          <TabList>
            <Tab value="0">Primary</Tab>
            <Tab value="1">Secondary</Tab>
            <Tab value="2">Tertiary(secondary outlined)</Tab>
            <Tab value="3">Error(4)</Tab>
            <Tab value="4">Default(5)</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <PrimaryButtons></PrimaryButtons>
            </TabPanel>
            <TabPanel value="1">
              <SecondaryButtons></SecondaryButtons>
            </TabPanel>
            <TabPanel value="2">
              <TertiaryButtons></TertiaryButtons>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <!-- <div class="grid grid-cols-4 gap-x-10 gap-y-5">
          <div>
            <span class="block mb-2">Normal</span>
            <Button class="w-full" label="Button" icon="mdi-search">
              <template #icon>
                <svg></svg>
              </template>
            </Button>
          </div>

          <div>
            <span class="block mb-2">Disabled</span>
            <Button class="w-full" label="Button" :disabled="true"></Button>
          </div>

          <div>
            <span class="block mb-2">Icon left</span>
            <Button
              class="w-full"
              label="Button"
              icon="icon-[uil--airplay]"
              icon-pos="left"
            ></Button>
          </div>

          <div>
            <span class="block mb-2">Icon right</span>
            <Button
              class="w-full"
              icon="icon-[material-symbols--add]"
              label="Button"
            ></Button>
          </div>

          <div>
            <span class="block mb-2">Default</span>
            <Button class="w-full" label="Button" outlined></Button>
          </div>

          <div>
            <span class="block mb-2">Disabled</span>
            <Button class="w-full" label="Button" disabled outlined></Button>
          </div>

          <div>
            <span class="block mb-2">Icon left</span>
            <Button
              class="w-full"
              label="Button"
              icon="icon-[material-symbols--add]"
              icon-pos="left"
              outlined
            ></Button>
          </div>

          <div>
            <span class="block mb-2">Icon right</span>
            <Button
              class="w-full"
              icon="icon-[material-symbols--add]"
              label="Button"
              outlined
            ></Button>
          </div>

          <div>
            <span class="block mb-2">Normal</span>
            <Button class="w-full" label="Button" severity="warning"></Button>
          </div>

          <div>
            <span class="block mb-2">Disabled</span>
            <Button
              class="w-full"
              label="Button"
              severity="warning"
              :disabled="true"
            ></Button>
          </div>

          <div>
            <span class="block mb-2">Icon left</span>
            <Button
              class="w-full"
              label="Button"
              icon="icon-[material-symbols--add]"
              icon-pos="left"
              severity="warning"
            ></Button>
          </div>

          <div>
            <span class="block mb-2">Icon right</span>
            <Button
              class="w-full"
              icon="icon-[material-symbols--add]"
              label="Button"
              severity="warning"
            ></Button>
          </div>

          <div>
            <span class="block mb-2">Default</span>
            <Button
              class="w-full"
              label="Button"
              severity="warning"
              outlined
            ></Button>
          </div>

          <div>
            <span class="block mb-2">Disabled</span>
            <Button
              class="w-full"
              label="Button"
              severity="warning"
              disabled
              outlined
            ></Button>
          </div>

          <div>
            <span class="block mb-2">Icon left</span>
            <Button
              class="w-full"
              label="Button"
              icon="icon-[material-symbols--add]"
              icon-pos="left"
              severity="warning"
              outlined
            ></Button>
          </div>

          <div>
            <span class="block mb-2">Icon right</span>
            <Button
              class="w-full"
              icon="icon-[material-symbols--add]"
              label="Button"
              severity="warning"
              outlined
            ></Button>
          </div>
        </div> -->
      </div>

      <div class="uikit__inputs">
        <h2 class="heading text-violet text-2xl font-medium mb-5">Inputs</h2>
        <div class="grid grid-cols-4 gap-x-10 gap-y-5">
          <FloatLabel class="mt-1" variant="on">
            <InputText
              id="username"
              v-model="inputValue"
              placeholder="Введите что-то"
              class="w-full"
            ></InputText>
            <label for="username">Default *</label>
          </FloatLabel>

          <FloatLabel class="mt-1" variant="on">
            <InputText
              id="input1"
              v-model="inputValueOne"
              placeholder="Введите что-то"
              class="w-full"
              disabled
            ></InputText>
            <label for="input1">Disabled *</label>
          </FloatLabel>
        </div>
      </div>

      <div class="uikit__checkboxes">
        <h2 class="heading text-violet text-2xl font-medium mb-5">Checkbox</h2>
        <div class="grid grid-cols-4 gap-x-10 gap-y-5">
          <div>
            <span class="block mb-2">Normal</span>
            <span class="flex align-items-center gap-2">
              <Checkbox
                v-model="checkboxValue"
                input-id="checkbox-1"
                binary
              ></Checkbox>
              <label for="checkbox-1">Checkbox</label>
            </span>
          </div>

          <div>
            <span class="block mb-2">Disabled</span>
            <span class="flex align-items-center gap-2">
              <Checkbox
                v-model="checkboxValue"
                input-id="checkbox-1"
                binary
                disabled
              ></Checkbox>
              <label for="checkbox-1">Checkbox</label>
            </span>
          </div>

          <div>
            <span class="block mb-2">Error</span>
            <span class="flex align-items-center gap-2">
              <Checkbox
                v-model="checkboxValue"
                input-id="checkbox-1"
                binary
                invalid
              ></Checkbox>
              <label for="checkbox-1">Checkbox</label>
            </span>
          </div>
        </div>
      </div>

      <div class="uikit__radio">
        <h2 class="heading text-violet text-2xl font-medium mb-5">Radio</h2>
        <div class="grid grid-cols-4 gap-x-10 gap-y-5">
          <div>
            <span class="block mb-2">Normal</span>
            <span class="flex align-items-center gap-2">
              <RadioButton
                v-model="radioValue"
                input-id="radio-1"
                name="radio"
                value="1"
              ></RadioButton>
              <label for="radio-1">Radio</label>
            </span>
          </div>

          <div>
            <span class="block mb-2">Disabled</span>
            <span class="flex align-items-center gap-2">
              <RadioButton
                v-model="radioValue"
                input-id="radio-1"
                name="radio"
                value="1"
                disabled
              ></RadioButton>
              <label for="radio-1">Radio</label>
            </span>
          </div>

          <div>
            <span class="block mb-2">Error</span>
            <span class="flex align-items-center gap-2">
              <RadioButton
                v-model="radioValue"
                input-id="radio-1"
                name="radio"
                value="3"
                invalid
              ></RadioButton>
              <label for="radio-1">Radio</label>
            </span>
          </div>
        </div>
      </div>

      <div class="uikit__inputs">
        <h2 class="heading text-violet text-2xl font-medium mb-5">Inputs</h2>
        <div class="grid grid-cols-4 gap-x-10 gap-y-5">
          <div>
            <span class="block mb-2">Normal</span>
            <InputText
              v-model="inputValue"
              class="w-full"
              placeholder="Text"
            ></InputText>
          </div>

          <div>
            <span class="block mb-2">Disabled</span>
            <span class="p-icon-field p-icon-field-right">
              <i class="p-input-icon icon-[material-symbols--search]" />
              <InputText
                v-model="inputValue"
                class="w-full"
                placeholder="Text"
              ></InputText>
            </span>
          </div>

          <div>
            <span class="block mb-2">Disabled</span>
            <InputText
              v-model="inputValue"
              class="w-full"
              placeholder="Text"
              disabled
            ></InputText>
          </div>

          <div>
            <span class="block mb-2">Error</span>
            <InputText
              v-model="inputValue"
              class="w-full"
              placeholder="Text"
              invalid
            ></InputText>
          </div>

          <div>
            <span class="block mb-2">Password</span>
            <Password
              v-model="passwordValue"
              class="w-full"
              placeholder="Text"
              :feedback="false"
              toggle-mask
            ></Password>
          </div>

          <div>
            <span class="block mb-2">Password Disabled</span>
            <Password
              v-model="passwordValue"
              class="w-full"
              placeholder="Text"
              :feedback="false"
              toggle-mask
              disabled
            ></Password>
          </div>

          <div>
            <span class="block mb-2">Password Invalid</span>
            <Password
              v-model="passwordValue"
              class="w-full"
              placeholder="Text"
              :feedback="false"
              toggle-mask
              invalid
            ></Password>
          </div>
        </div>
      </div>

      <div class="uikit__autocomplete">
        <h2 class="heading text-violet text-2xl font-medium mb-5">
          AutoComplete
        </h2>
        <div class="grid grid-cols-4 gap-x-10 gap-y-5">
          <div>
            <span class="block mb-2">Normal</span>
            <AutoComplete
              v-model="autocompleteValue"
              :suggestions="options"
              class="w-full"
              option-label="title"
              placeholder="Text"
              @complete="search"
            ></AutoComplete>
          </div>

          <div>
            <span class="block mb-2">Icon</span>
            <span class="p-icon-field p-icon-field-right">
              <i class="p-input-icon icon-[material-symbols--search]" />
              <AutoComplete
                v-model="autocompleteValue"
                :suggestions="options"
                class="w-full"
                option-label="title"
                placeholder="Text"
                @complete="search"
              ></AutoComplete>
            </span>
          </div>

          <div>
            <span class="block mb-2">Disabled</span>
            <AutoComplete
              v-model="autocompleteValue"
              :suggestions="options"
              class="w-full"
              option-label="title"
              placeholder="Text"
              disabled
              @complete="search"
            ></AutoComplete>
          </div>

          <div>
            <span class="block mb-2">Dropdown</span>
            <AutoComplete
              v-model="autocompleteValue"
              :suggestions="options"
              class="w-full"
              option-label="title"
              placeholder="Text"
              dropdown
              @complete="search"
            ></AutoComplete>
          </div>

          <div>
            <span class="block mb-2">Error</span>
            <AutoComplete
              v-model="autocompleteValue"
              :suggestions="options"
              class="w-full"
              option-label="title"
              placeholder="Text"
              invalid
              @complete="search"
            ></AutoComplete>
          </div>
        </div>
      </div>

      <div class="uikit__dropdown">
        <h2 class="heading text-violet text-2xl font-medium mb-5">Dropdown</h2>
        <div class="grid grid-cols-4 gap-x-10 gap-y-5">
          <div>
            <span class="block mb-2">Normal</span>
            <Dropdown
              v-model="dropdownValue"
              :options="options"
              class="w-full"
              option-label="title"
              placeholder="Text"
              show-clear
              append-to="self"
            ></Dropdown>
          </div>

          <div>
            <span class="block mb-2">Disabled</span>
            <Dropdown
              v-model="dropdownValue"
              :options="options"
              class="w-full"
              option-label="title"
              placeholder="Text"
              disabled
              show-clear
              append-to="self"
            ></Dropdown>
          </div>

          <div>
            <span class="block mb-2">Error</span>
            <Dropdown
              v-model="dropdownValue"
              :options="options"
              class="w-full"
              option-label="title"
              placeholder="Text"
              invalid
              show-clear
              append-to="self"
            ></Dropdown>
          </div>
        </div>
      </div>

      <div class="uikit__multiselect">
        <h2 class="heading text-violet text-2xl font-medium mb-5">
          MultiSelect
        </h2>
        <div class="grid grid-cols-4 gap-x-10 gap-y-5">
          <div>
            <span class="block mb-2">Normal</span>
            <MultiSelect
              v-model="multiselectValue"
              :options="options"
              option-label="title"
              class="w-full"
              placeholder="Text"
              filter
              append-to="self"
            ></MultiSelect>
          </div>

          <div>
            <span class="block mb-2">Disabled</span>
            <MultiSelect
              v-model="multiselectValue"
              :options="options"
              option-label="title"
              class="w-full"
              placeholder="Text"
              filter
              disabled
              append-to="self"
            ></MultiSelect>
          </div>

          <div>
            <span class="block mb-2">Error</span>
            <MultiSelect
              v-model="multiselectValue"
              :options="options"
              option-label="title"
              class="w-full"
              placeholder="Text"
              filter
              invalid
              append-to="self"
            ></MultiSelect>
          </div>
        </div>
      </div>

      <!-- <div class="uikit__textarea">
        <h2 class="heading text-violet text-2xl font-medium mb-5">Textarea</h2>
        <div class="grid grid-cols-4 gap-x-10 gap-y-5">
          <div>
            <span class="block mb-2">Normal</span>
            <Textarea
              v-model="textareaValue"
              class="w-full"
              placeholder="Text"
              rows="3"
              auto-resize
            ></Textarea>
          </div>

          <div>
            <span class="block mb-2">Outlined</span>
            <Textarea
              v-model="textareaValue"
              class="outlined w-full"
              placeholder="Text"
              rows="3"
              auto-resize
            ></Textarea>
          </div>

          <div>
            <span class="block mb-2">Disabled</span>
            <Textarea
              v-model="textareaValue"
              class="w-full"
              placeholder="Text"
              rows="3"
              auto-resize
              disabled
            ></Textarea>
          </div>

          <div>
            <span class="block mb-2">Error</span>
            <Textarea
              v-model="textareaValue"
              class="w-full"
              placeholder="Text"
              rows="3"
              auto-resize
              invalid
            ></Textarea>
          </div>
        </div>
      </div> -->

      <div class="uikit__calendar">
        <h2 class="heading text-violet text-2xl font-medium mb-5">Textarea</h2>
        <div class="grid grid-cols-4 gap-x-10 gap-y-5">
          <div>
            <span class="block mb-2">Normal</span>
            <Calendar
              v-model="calendarValue"
              class="w-full"
              date-format="dd/mm/yy"
              show-button-bar
              :manual-input="false"
            ></Calendar>
          </div>

          <div>
            <span class="block mb-2">Icon</span>
            <Calendar
              v-model="calendarValue"
              class="w-full"
              date-format="dd/mm/yy"
              show-button-bar
              show-icon
              :manual-input="false"
            ></Calendar>
          </div>

          <div>
            <span class="block mb-2">Disabled</span>
            <Calendar
              v-model="calendarValue"
              class="w-full"
              date-format="dd/mm/yy"
              show-button-bar
              :manual-input="false"
              disabled
            ></Calendar>
          </div>

          <div>
            <span class="block mb-2">Error</span>
            <Calendar
              v-model="calendarValue"
              class="w-full"
              date-format="dd/mm/yy"
              show-button-bar
              :manual-input="false"
              invalid
            ></Calendar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.uikit__wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}
</style>
