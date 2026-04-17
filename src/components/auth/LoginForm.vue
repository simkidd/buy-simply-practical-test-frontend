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
  <div>
    <h2 class="text-2xl font-bold mb-2 text-center text-primary">Welcome Back</h2>
    <p class="text-gray-500 mb-6">Enter your email address and password to access your account.</p>

    <form @submit.prevent="submit" class="space-y-4">
      <Input label="Email Address *" type="email" placeholder="Enter your email" v-model="email" />

      <Input
        label="Password *"
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />

      <div class="flex items-center justify-between">
        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" v-model="remember" />
          <span>Remember me</span>
        </label>

        <a href="#" class="text-sm text-purple-600 hover:underline"> Forgot Password </a>
      </div>

      <Button> Sign in </Button>
    </form>

    <p class="text-sm text-center mt-6">
      Don't have an account?
      <span class="text-purple-600 font-medium cursor-pointer"> Sign up </span>
    </p>
  </div>
</template>
