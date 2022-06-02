<script setup lang="ts">
const props = defineProps<{
  userInfo;
}>();
</script>

<template>
  <div class="applicant flex items-center m-6">
    <img src="../assets/pic.jpg" class="rounded-full h-20 w-20" />
    <div class="container m-4">
      <h1 class="text-4xl font-bold">{{ userInfo.name }}</h1>
      <div class="mt-2">
        Applied for <b> {{ userInfo.role }} </b> on
        {{
          String(userInfo.date).split(" ")[2] +
          " " +
          String(userInfo.date).split(" ")[1] +
          " " +
          String(userInfo.date).split(" ")[3]
        }}
      </div>
    </div>
    <button
      class="rounded-md bg-white m-4 px-4 h-10 text-gray-600 border-2 border-gray-300"
    >
      Disqualify
    </button>
    <button
      class="rounded-md bg-blue-600 m-4 px-4 whitespace-nowrap h-10 text-white"
    >
      Advance to Offer
    </button>
  </div>
</template>
