<script setup lang="ts">
import { ref } from "vue";
import { QuestionMarkCircleIcon } from "@heroicons/vue/solid";
import Menu from "./Menu.vue";
import DeleteModal from "./DeleteModal.vue";

const notes = ref([]);
const text = ref("");
const editing = ref(false);
const editedNoteId = ref("");
const showDeleteModal = ref(false);
const deleteNoteId = ref("");
const noInput = ref(true);

// adds a new note and saves it to localStorage
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

// validates that input is not an empty string
const checkInput = () => {
  if (text.value.length > 0) {
    noInput.value = false;
  } else {
    noInput.value = true;
  }
};

// fetches notes from localStorage
const fetch = () => {
  const test = localStorage.getItem("notes");
  let testArray = [];
  if (test) {
    testArray = JSON.parse(test);
    notes.value = testArray;
  }
};
fetch();

// toggles the confirmation modal, fired when user clicks delete in dropdown menu
const toggleDeleteModal = (id) => {
  deleteNoteId.value = id;
  showDeleteModal.value = !showDeleteModal.value;
};

// does the actual deletion, fired when user confirms in confirmation modal
const confirmDeleteHandler = () => {
  const newArray = notes.value.filter((note) => note.id !== deleteNoteId.value);
  notes.value = newArray;
  localStorage.setItem("notes", JSON.stringify(notes.value));
  showDeleteModal.value = false;
  fetch();
};

// sets the text in the textfield to the old note, fired when user clicks edit note in dropdown
const editHandler = (id) => {
  editing.value = true;

  for (let i = 0; i < notes.value.length; i++) {
    if (id === notes.value[i].id) {
      text.value = notes.value[i].description;
      editedNoteId.value = id;
    }
  }
};

// updates the old note with the new note, fired when user clicks update
const saveNote = () => {
  for (let i = 0; i < notes.value.length; i++) {
    if (editedNoteId.value === notes.value[i].id) {
      notes.value[i].description = text.value;
    }
    localStorage.setItem("notes", JSON.stringify(notes.value));
    editing.value = false;
  }
  text.value = "";
  fetch();
};
</script>

<template>
  <div class="bg-white rounded-md p-6 m-6">
    <h1 class="text-2xl font-bold">Notes</h1>
    <hr class="my-4" />

    <div v-for="note in notes" class="flex items-start my-6">
      <div class="flex w-11/12">
        <img src="../assets/pic.jpg" class="rounded-full h-10 w-10" />
        <div class="mx-4 w-11/12">
          <p class="font-bold">{{ note.name }}</p>
          <p class="break-words">{{ note.description }}</p>
          <p class="text-gray-600 mt-2">
            4d ago &middot <strong class="text-black"> Reply </strong>
          </p>
        </div>
      </div>

      <Menu
        :id="note.id"
        @deleteEvent="toggleDeleteModal"
        @editEvent="editHandler"
      />
    </div>

    <div class="flex items-start">
      <img src="../assets/pic.jpg" class="rounded-full h-10 w-10" />
      <textarea
        placeholder="Add a note"
        class="w-11/12 rounded-md border-2 mx-2 p-2 h-32"
        v-model="text"
        @change="checkInput"
      />
    </div>
    <div class="flex justify-between">
      <div class="flex items-center pt-2 px-12">
        <QuestionMarkCircleIcon class="h-6 text-gray-400" />
        <p class="text-gray-400 px-2">Some HTML is okay.</p>
      </div>
      <button
        v-if="!editing"
        class="text-white bg-blue-600 rounded-md w-28 h-10 m-4 disabled:opacity-50"
        :disabled="noInput"
        @click="addNoteHandler"
      >
        Comment
      </button>

      <button
        v-if="editing"
        class="text-white bg-blue-600 rounded-md w-28 h-10 m-4"
        @click="saveNote"
      >
        Update
      </button>
    </div>
    <DeleteModal
      :showModal="showDeleteModal"
      @confirm-delete="confirmDeleteHandler"
      @close="toggleDeleteModal"
    />
  </div>
</template>
