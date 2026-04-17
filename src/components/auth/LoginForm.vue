<script setup lang="ts">
import { ref } from 'vue'
import Input from '../ui/Input.vue'
import Button from '../ui/Button.vue'

const email = ref('')
const password = ref('')
const remember = ref(false)

const submit = () => {
  console.log({ email: email.value, password: password.value })
}
</script>

<template>
  <div class="w-full max-w-[520px] mx-auto">
    <h2 class="text-[24px] lg:text-[32px] font-bold mb-2 text-center text-primary font-lora">
      Welcome Back
    </h2>
    <p class="text-gray-700 mb-6 text-center text-sm md:text-base">
      Enter your email address and password to access your account.
    </p>

    <form @submit.prevent="submit">
      <div class="space-y-6">
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          v-model="email"
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          v-model="password"
          required
        />
      </div>

      <div class="flex items-center justify-between mt-4">
        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" v-model="remember" class="accent-primary" />
          <span class="text-gray-700">Remember me</span>
        </label>

        <a href="#" class="text-sm text-primary hover:underline"> Forgot Password? </a>
      </div>

      <Button class="mt-[40px]"> Sign in </Button>
    </form>

    <p class="text-sm text-center mt-2.5 text-gray-700">
      Don't have an account?
      <span class="text-primary font-medium cursor-pointer"> Sign up </span>
    </p>
  </div>
</template>
