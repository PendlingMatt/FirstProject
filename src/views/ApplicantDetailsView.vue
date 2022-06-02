<script lang="ts" setup>
import Information from "../components/Information.vue";
import Applicant from "../components/Applicant.vue";
import Timeline from "../components/Timeline.vue";
import Notes from "../components/Notes.vue";

const user = {
  name: "Ricardo Cooper",
  role: "Front End Developer",
  date: new Date(),
  salary: 120000,
  phone: "+1 555-555-5555",
  email: "ricardo@gmail.com",
  about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}
</script>

<template>
  <div class="applicantDetails bg-gray-200 p-6">
    <Applicant :user-info="user"/>
    <div class="flex">
      <div class="flex-col w-4/6">
        <Information :user-info="user"/>
        <Notes />
      </div>
      <Timeline />
    </div>
  </div>
</template>
