<template>
  <AuthLayout>
    <div class="p-[58.5px] h-full flex flex-col items-center justify-center">
      <div class="flex items-center justify-center">
        <div class="flex items-center gap-2 mb-[47px] lg:hidden">
          <img src="/logos/e6b999b32384ec535a0fa4a5c53ca55838c6f12f.png" class="h-[97px]" />
        </div>
      </div>

      <LoginForm />
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
</script>
