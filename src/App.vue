<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/dashboard">Dashboard</RouterLink> |
        <RouterLink to="/jobs">Jobs</RouterLink> |
        <RouterLink to="/applicants">Applicants</RouterLink> |
        <RouterLink to="/company">Company</RouterLink> 
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style></style>
