<script setup lang="ts">
import {
  UserCircleIcon,
  ThumbUpIcon,
  CheckCircleIcon,
} from "@heroicons/vue/solid";
</script>

<template>
  <div class="bg-white rounded-md p-6 m-6 w-2/6 h-full flex-col justify-center">
    <h1 class="text-2xl font-bold">Timeline</h1>

    <div class="flex items-center mt-4">
      <UserCircleIcon class="h-8 rounded-md m-2" />
      <p class="w-4/6 ml-2 text-gray-500">
        Applied to <strong class="text-black">Front End Developer</strong>
      </p>

      <p class="text-gray-500">Sep 20</p>
    </div>

    <div class="border-l-2 h-4 ml-6"></div>

    <div class="flex items-center">
      <ThumbUpIcon class="h-8 rounded-md m-2" />
      <p class="w-4/6 ml-2 text-gray-500">
        Advanced to phone screening by
        <strong class="text-black">Bethany Blake</strong>
      </p>
      <p class="text-gray-500">Sep 22</p>
    </div>

    <div class="border-l-2 h-4 ml-6"></div>

    <div class="flex items-center">
      <CheckCircleIcon class="h-8 rounded-md m-2" />
      <p class="w-4/6 ml-2 text-gray-500">
        Completed phone screening with
        <strong class="text-black">Martha Gardner </strong>
      </p>
      <p class="text-gray-500">Sep 28</p>
    </div>

    <div class="border-l-2 h-4 ml-6"></div>

    <div class="flex items-center">
      <ThumbUpIcon class="h-8 rounded-md m-2" />
      <p class="w-4/6 ml-2 text-gray-500">
        Advanced to interview by
        <strong class="text-black">Bethany Blake</strong>
      </p>
      <p class="text-gray-500">Sep 30</p>
    </div>

    <div class="border-l-2 h-4 ml-6"></div>

    <div class="flex items-center mb-4">
      <CheckCircleIcon class="h-8 rounded-md m-2" />
      <p class="w-4/6 ml-2 text-gray-500">
        Completed interview with
        <strong class="text-black">Katherine Snyder</strong>
      </p>
      <p class="text-gray-500">Sep 30</p>
    </div>

    <button class="bg-blue-600 text-white rounded-md p-2 w-full">
      Advance to Offer
    </button>
  </div>
</template>
