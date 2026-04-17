<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit'
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'submit',
  loading: false,
})
</script>

<template>
  <button
    :type="type"
    :disabled="loading"
    class="w-full flex items-center justify-center gap-2 px-4 py-2.5 font-medium text-white bg-[--color-primary] hover:bg-[--color-primary-hover] transition disabled:opacity-70 disabled:cursor-not-allowed"
  >
    <span v-if="loading">Loading...</span>
    <slot v-else />
  </button>
</template>
