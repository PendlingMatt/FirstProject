<script lang="ts" setup>
import Information from "../components/Information.vue";
import Applicant from "../components/Applicant.vue";
import Timeline from "../components/Timeline.vue";
import Notes from "../components/Notes.vue";
</script>

<template>
  <div class="applicantDetails bg-gray-200 p-6">
    <Applicant />
    <div class="flex">
      <div class="flex-col w-4/6">
        <Information />
        <Notes />
      </div>
      <Timeline />
    </div>
  </div>
</template>
