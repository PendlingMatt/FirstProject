<script setup lang="ts">
import { ref } from "vue";

const notes = ref([]);
const text = ref("");

const addNoteHandler = () => {
  const newNote = {
    name: "Matthew Chua",
    description: text.value,
    id: String(Math.random()),
  };

  notes.value.push(newNote);
  text.value = "";
  localStorage.setItem("notes", JSON.stringify(notes.value));
};

const fetch = () => {
    const test = localStorage.getItem("notes");
    let testArray = [];
    if (test){
        testArray = JSON.parse(test);
        console.log("HERE", testArray)
        notes.value = testArray;
    }
}
fetch();

</script>

<template>
  <div class="bg-white rounded-md p-6 m-6">
    <h1 class="text-2xl font-bold">Notes</h1>
    <hr class="my-4" />

    <div v-for="note in notes" class="flex items-start my-6">
      <img src="../assets/pic.jpg" class="rounded-full h-10 w-10" />
      <div class="mx-4">
        <p class="font-bold">{{ note.name }}</p>
        <p>{{ note.description }}</p>
        <p class="text-gray-600 mt-2">
          4d ago &middot <strong class="text-black"> Reply </strong>
        </p>
      </div>
    </div>

    <div>
      <div class="flex items-start">
        <img src="../assets/pic.jpg" class="rounded-full h-10 w-10" />
        <textarea
          placeholder="Add a note"
          class="w-11/12 rounded-md border-2 mx-2 p-2"
          v-model="text"
        />
      </div>
      <button
        class="text-white bg-blue-600 rounded-md w-28 h-10 m-4"
        @click="addNoteHandler"
      >
        Comment
      </button>
    </div>
  </div>
</template>
