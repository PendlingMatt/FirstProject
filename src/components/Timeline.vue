<script setup lang="ts">
import {
  UserCircleIcon,
  ThumbUpIcon,
  CheckCircleIcon,
} from "@heroicons/vue/solid";

const timelineData = [
  {
    action: "Applied to",
    person: "Front End Developer",
    icon: UserCircleIcon,
    date: new Date(),
    color: "gray",
  },
  {
    action: "Advanced to phone screening by",
    person: "Bethany Blake",
    icon: ThumbUpIcon,
    date: new Date(),
    color: "blue",
  },
  {
    action: "Completed phone screening with",
    person: "Martha Gardner",
    icon: CheckCircleIcon,
    date: new Date(),
    color: "green",
  },
  {
    action: "Advanced to interview by",
    person: "Bethany Blake",
    icon: ThumbUpIcon,
    date: new Date(),
    color: "blue",
  },
  {
    action: "Completed interview with",
    person: "Katherine Snyder",
    icon: CheckCircleIcon,
    date: new Date(),
    color: "green",
  },
];
</script>

<template>
  <div class="bg-white rounded-md p-6 m-6 w-2/6 h-full flex-col justify-center">
    <h1 class="text-2xl font-bold">Timeline</h1>

    <div v-for="item in timelineData">
      <div class="flex items-center mt-4">
        <div class="flex">
          <component :is="item.icon" class="h-8 rounded-md m-2 text-gray-400" />
          <div class="ml-2 text-gray-500">
            {{ item.action }}
            <strong class="text-black">{{ item.person }}</strong>
          </div>
        </div>
        <div class="flex-grow ml-4" />
        <div class="text-gray-500 whitespace-nowrap">
          {{ item.date.getDate() }}{{ " " + String(item.date).split(" ")[1] }}
        </div>
      </div>

      <div class="border-l-2 h-4 ml-6"></div>
    </div>

    <button class="bg-blue-600 text-white rounded-md p-2 w-full">
      Advance to Offer
    </button>
  </div>
</template>
