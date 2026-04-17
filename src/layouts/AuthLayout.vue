<template>
  <div class="min-h-screen">
    <div class="w-full bg-primary-light overflow-hidden grid lg:grid-cols-2">
      <div class="w-full py-6 px-[45px] hidden lg:block">
        <div class="flex items-center gap-2 mb-[47px]">
          <img src="/logos/e6b999b32384ec535a0fa4a5c53ca55838c6f12f.png" class="h-[97px]" />
        </div>

        <div class="p-5">
          <img
            src="/images/33a703d09381baca770e67cf850494f0aa6202bc.png"
            class="rounded-[20px] w-full object-cover"
          />
        </div>

        <div class="text-center">
          <h3 class="font-semibold">Team Achieve</h3>
          <p class="text-gray-500 text-sm">Your perfect solution for funding your desires</p>
        </div>
      </div>

      <div class="w-full bg-white">
        <slot />
      </div>
    </div>
  </div>
</template>
