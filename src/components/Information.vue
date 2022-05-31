<script lang="ts" setup>
import resume from "../assets/document.pdf";
import {
  PaperClipIcon,
} from "@heroicons/vue/solid";
</script>

<template>
  <div class="information bg-white rounded-md p-6 m-6">
    <h1 class="text-2xl font-bold">Applicant Information</h1>
    <h2 class="text-gray-500 mb-4">Personal details and application.</h2>
    <hr />
    <div class="flex justify-between">
      <div class="w-2/4">
        <p class="text-gray-500 mt-4">Application for</p>
        <p class="text-lg">Backend Developer</p>
        <p class="text-gray-500 mt-4">Salary Expectation</p>
        <p class="text-lg">$120,000</p>
      </div>

      <div class="w-2/4">
        <p class="text-gray-500 mt-4">Email Address</p>
        <p class="text-lg">ricardocooper@gmail.com</p>
        <p class="text-gray-500 mt-4">Phone</p>
        <p class="text-lg">+1 555-555-5555</p>
      </div>
    </div>
    <p class="text-gray-500 mt-4">About</p>
    <p class="text-lg">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>

    <p class="text-gray-500 mt-4">Attachments</p>
    <div class="rounded-md border-2 my-2">
    <div class="flex border-b-2 p-2 items-center">
      <PaperClipIcon class="h-8 mr-2"/>
      <p>resume_front_end_developer.pdf</p>
      <div class="flex justify-end w-full mr-4">
      <a
        :href="resume"
        target="_blank"
        rel="noreferrer noopener"
        class="text-blue-600 font-bold"
        >Download</a
      >
      </div>
    </div>
    <div class="flex p-2 items-center">
      <PaperClipIcon class="h-8 mr-2"/>
      <p>resume_front_end_developer.pdf</p>
      <div class="flex justify-end w-full mr-4">
      <a
        :href="resume"
        target="_blank"
        rel="noreferrer noopener"
        class="text-blue-600 font-bold"
        >Download</a
      >
      </div>
    </div>
    </div>
    <div class="bg-gray-200 flex justify-center p-4">
      <p class="text-gray-600">Read full application</p>
    </div>
  </div>
</template>
