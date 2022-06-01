<script setup lang="ts">
import { ref } from "vue";
import { DotsVerticalIcon } from "@heroicons/vue/solid";
import Menu from "./Menu.vue";
import DeleteModal from "./DeleteModal.vue";

const notes = ref([]);
const text = ref("");
const editing = ref(false);
const editedNoteId = ref("");
const showDeleteModal = ref(false);
const deleteNoteId = ref("");

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
  if (test) {
    testArray = JSON.parse(test);
    notes.value = testArray;
  }
};
fetch();

const toggleDeleteModal = (id) => {
  deleteNoteId.value = id;
  showDeleteModal.value = !showDeleteModal.value;
};

const confirmDeleteHandler = () => {
  console.log("PLS WORK", deleteNoteId.value);
  console.log("old array", notes.value);
  const newArray = notes.value.filter((note) => note.id !== deleteNoteId.value);
  console.log("new array", newArray);
  notes.value = newArray;
  localStorage.setItem("notes", JSON.stringify(notes.value));
  showDeleteModal.value = false;
  fetch();
};

const editHandler = (id) => {
  editing.value = true;

  for (let i = 0; i < notes.value.length; i++) {
    if (id === notes.value[i].id) {
      text.value = notes.value[i].description;
      editedNoteId.value = id;
    }
  }
};

const saveNote = () => {
  for (let i = 0; i < notes.value.length; i++) {
    if (editedNoteId.value === notes.value[i].id) {
      console.log(text.value);
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
        class="w-11/12 rounded-md border-2 mx-2 p-2"
        v-model="text"
      />
    </div>
    <button
      v-if="!editing"
      class="text-white bg-blue-600 rounded-md w-28 h-10 m-4"
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

    <DeleteModal
      :showModal="showDeleteModal"
      @confirm-delete="confirmDeleteHandler"
      @close="toggleDeleteModal"
    />
  </div>
</template>
