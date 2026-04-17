<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  label?: string
  type?: string
  placeholder?: string
  modelValue: string
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
    <label v-if="label" class="block text-sm font-medium mb-1">
      {{ label }}
    </label>

    <div class="relative">
      <input
        :type="inputType"
        v-model="model"
        :placeholder="placeholder"
        class="w-full border px-3 py-2 pr-10 outline-none transition border-[--color-border] focus:ring-2 focus:ring-[--color-primary]/20 focus:border-[--color-primary]"
      />

      <!-- Password Toggle -->
      <button
        v-if="type === 'password'"
        type="button"
        @click="showPassword = !showPassword"
        class="absolute right-3 top-2.5 text-gray-400 text-sm"
      >
        {{ showPassword ? '🙈' : '👁' }}
      </button>
    </div>
  </div>
</template>
