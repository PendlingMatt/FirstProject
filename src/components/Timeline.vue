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
      <div class="flex w-10/12">
      <UserCircleIcon class="h-8 rounded-md m-2 text-gray-400" />
      <div class="w-4/6 ml-2 text-gray-500">
        Applied to <strong class="text-black">Front End Developer</strong>
      </div>
</div>
      <div class="text-gray-500">Sep 20</div>
    </div>

    <div class="border-l-2 h-4 ml-6"></div>

    <div class="flex items-center">
      <div class="flex w-10/12">
      <ThumbUpIcon class="h-8 rounded-md m-2 text-blue-600" />
      <div class="w-4/6 ml-2 text-gray-500">
        Advanced to phone screening by
        <strong class="text-black">Bethany Blake</strong>
      </div>
      </div>
      <div class="text-gray-500">Sep 22</div>
    </div>

    <div class="border-l-2 h-4 ml-6"></div>

    <div class="flex items-center">
      <div class="flex w-10/12">
      
      <CheckCircleIcon class="h-8 rounded-md m-2 text-green-500" />
      <div class="w-4/6 ml-2 text-gray-500">
        Completed phone screening with
        <strong class="text-black">Martha Gardner </strong>
      </div>
    </div>
      <div class="text-gray-500">Sep 28</div>
    </div>

    <div class="border-l-2 h-4 ml-6"></div>

    <div class="flex items-center">
      <div class="flex w-10/12">
      
      <ThumbUpIcon class="h-8 rounded-md m-2 text-blue-600" />
      <div class="w-4/6 ml-2 text-gray-500">
        Advanced to interview by
        <strong class="text-black">Bethany Blake</strong>
      </div>
    </div>
      <div class="text-gray-500">Sep 30</div>
    </div>

    <div class="border-l-2 h-4 ml-6"></div>

    <div class="flex items-center mb-4">
      <div class="flex w-10/12">
      
      <CheckCircleIcon class="h-8 rounded-md m-2 text-green-500" />
      <div class="w-4/6 ml-2 text-gray-500">
        Completed interview with
        <strong class="text-black">Katherine Snyder</strong>
      </=>
    </div>
      <div class="text-gray-500">Sep 30</div>
    </div>

    <button class="bg-blue-600 text-white rounded-md p-2 w-full">
      Advance to Offer
    </button>
  </div>
</template>
