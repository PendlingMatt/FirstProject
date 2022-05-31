<template>
  <div class="applicants-view">
    <h1>applicants page</h1>
    <div v-for="applicant in applicants" :key="applicant.id">
      <router-link :to="{ name: 'applicantDetails', params: {id: applicant.id} }">applicant.name</router-link>
    </div>
  </div>
</template>

<script>
export default{
    data(){
        return{
            applicants: [
                {
                    name: "Matthew",
                    email: "matt@gmail.com",
                    id: 1
                },
                {
                    name: "Dev",
                    email: "pendle@gmail.com",
                    id: 2
                }
            ]
        }
    }
}

</script>

