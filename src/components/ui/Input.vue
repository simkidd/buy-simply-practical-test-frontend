<script setup lang="ts">
import { computed, ref } from 'vue'
import { Eye, EyeOff } from '@lucide/vue'

interface Props {
  label?: string
  type?: string
  placeholder?: string
  modelValue: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const showPassword = ref(false)

const inputType = computed(() => {
  if (props.type !== 'password') return props.type
  return showPassword.value ? 'text' : 'password'
})

const model = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val),
})
</script>

<template>
  <div>
    <label v-if="label" class="block text-sm font-medium mb-2 text-gray-900">
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>

    <div
      class="relative w-full flex items-stretch rounded-[8px] border border-gray-300 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition overflow-hidden"
    >
      <input
        :type="inputType"
        v-model="model"
        :placeholder="placeholder"
        :class="[
          'flex-1 px-3 py-2 outline-none bg-transparent',
          type === 'password' ? 'pr-14' : 'pr-3',
        ]"
      />

      <button
        v-if="type === 'password'"
        type="button"
        @click="showPassword = !showPassword"
        class="absolute right-0 top-0 h-full px-3 flex items-center justify-center bg-gray-100 text-gray-600"
      >
        <Eye v-if="!showPassword" class="w-4 h-4" />
        <EyeOff v-else class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>
