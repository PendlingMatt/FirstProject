<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { QuestionMarkCircleIcon } from "@heroicons/vue/solid";
import SingleNote from "./SingleNote.vue";

type Note = {
  name: string;
  description: string;
  id: string;
  time: Date
};
// const notes: Array<Note> = ref([]);
const notes = ref<Note[]>(
  localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []
);
const text = ref("");
const noInput = ref(true);

// adds a new note and saves it to localStorage
const addNoteHandler = (e) => {
  e.preventDefault();
  const newNote = {
    name: "Matthew Chua",
    description: text.value,
    id: String(Math.random()),
    time: new Date()
  };


  notes.value.push(newNote);
  text.value = "";
  localStorage.setItem("notes", JSON.stringify(notes.value));
};

// validates that input is not an empty string
const checkInput = () => {
  if (text.value.length > 0) {
    noInput.value = false;
  } else {
    noInput.value = true;
  }
};

// keeps the localstorage updated
watchEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes.value));
});

const deleteHandler = (id) => {
  const newArray = notes.value.filter((note) => note.id !== id);
  notes.value = newArray;
};

const editHandler = (id, newDesc) => {
  notes.value.forEach((note) => {
    if (note.id === id) {
      note.description = newDesc;
    }
  });
};
</script>

<template>
  <div class="bg-white rounded-md p-6 m-6">
    <h1 class="text-2xl font-bold">Notes</h1>
    <hr class="mt-4" />

    <SingleNote
      v-for="note in notes"
      :info="note"
      @delete-event="deleteHandler"
      @edit-event="editHandler"
    />
    <form @submit="addNoteHandler">
      <div class="flex items-start mt-8">
        <img src="../assets/pic.jpg" class="rounded-full h-10 w-10" />
        <textarea
          v-on:keyup.enter="addNoteHandler"
          placeholder="Add a note"
          rows="5"
          class="flex-grow rounded-md border-2 mx-2 p-2 resize-none"
          v-model="text"
          @input="checkInput"
        />
      </div>

      <div class="flex">
        <div class="flex items-center pt-2 px-12">
          <QuestionMarkCircleIcon class="h-6 text-gray-400" />
          <div class="text-gray-400 px-2">Some HTML is okay.</div>
        </div>
        <div class="flex-grow" />

        <button
          class="text-white bg-blue-600 rounded-md w-28 h-10 m-4 disabled:opacity-50"
          :disabled="noInput"
          type="submit"
        >
          Comment
        </button>
      </div>
    </form>
  </div>
</template>
