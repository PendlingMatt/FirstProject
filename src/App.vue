<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { BeakerIcon, SearchIcon } from "@heroicons/vue/solid";
import { BellIcon } from "@heroicons/vue/outline";

</script>

<template >
  <header>
    <div>
      <nav class="flex items-center px-6">

        <div class="container flex w-6/12 items-center">
        <RouterLink to="/" class="m-4">
          <BeakerIcon class="h-10 w-10 text-blue-600"/>
          
        </RouterLink>
         <RouterLink to="/dashboard" class="m-4 font-bold">Dashboard</RouterLink> 
        <RouterLink to="/jobs" class="m-4 font-bold">Jobs</RouterLink> 
        <RouterLink to="/applicants" class="m-4 font-bold">Applicants</RouterLink> 
        <RouterLink to="/company" class="m-4 font-bold">Company</RouterLink>
</div>
        <div class="container w-6/12 flex items-center justify-end">
        <input placeholder="Search" class="rounded-md border-2 w-80 h-10 px-5 mx-4"/>
        <BellIcon class="h-6 w-6 mx-4"/>
        <img src="./assets/pic.jpg" class="rounded-full w-10 h-10 mx-4"/>
        </div>
      </nav>
    </div>
  </header>

  <RouterView/>
</template>

<style src="./assets/tailwind.css"></style>
