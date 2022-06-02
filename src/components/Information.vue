<script lang="ts" setup>
import resume from "../assets/document.pdf";
import { PaperClipIcon } from "@heroicons/vue/solid";
</script>

<template>
  <div class="information bg-white rounded-md m-6">
    <div class="p-6">
      <h1 class="text-2xl font-bold">Applicant Information</h1>
      <h2 class="text-gray-500 mb-4">Personal details and application.</h2>
    </div>
    <hr />
    <div class="flex justify-between pt-6 pl-6">
      <div class="w-2/4">
        <div class="text-gray-500 mt-4">Application for</div>
        <div class="text-lg">Backend Developer</div>
        <div class="text-gray-500 mt-4">Salary Expectation</div>
        <div class="text-lg">$120,000</div>
      </div>

      <div class="w-2/4">
        <div class="text-gray-500 mt-4">Email Address</div>
        <div class="text-lg">ricardocooper@gmail.com</div>
        <div class="text-gray-500 mt-4">Phone</div>
        <div class="text-lg">+1 555-555-5555</div>
      </div>
    </div>
    <div class="px-6">
      <div class="text-gray-500 mt-4">About</div>
      <p class="text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
    <div class="px-6">
      <div class="text-gray-500 mt-4">Attachments</div>
      <div class="rounded-md border-2 my-2">
        <div class="flex border-b-2 p-2 items-center">
          <PaperClipIcon class="h-8 mr-2" />
          <div>resume_front_end_developer.pdf</div>
          <div class="flex justify-end w-full mr-4">
            <a :href="resume" download class="text-blue-600 font-bold"
              >Download</a
            >
          </div>
        </div>
        <div class="flex p-2 items-center">
          <PaperClipIcon class="h-8 mr-2" />
          <div>resume_front_end_developer.pdf</div>
          <div class="flex justify-end w-full mr-4">
            <a :href="resume" download class="text-blue-600 font-bold"
              >Download</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 flex justify-center p-4 rounded-b-md">
      <button class="text-gray-600">Read full application</button>
    </div>
  </div>
</template>
