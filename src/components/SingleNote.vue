<script setup lang="ts">
import Menu from "./Menu.vue";
import DeleteModal from "./DeleteModal.vue";
import { ref } from "vue";

const showDeleteModal = ref(false);
const text = ref("");
const editing = ref(false);

type Note = {
  name: string;
  description: string;
  id: string;
  time: Date;
};
const props = defineProps<{
  info: Note;
}>();

const editHandler = () => {
  editing.value = !editing.value;
  text.value = props.info.description;
};

const saveEditHandler = () => {
  emit("edit-event", props.info.id, text);
  editing.value = false;
};

const toggleDeleteModal = () => {
  showDeleteModal.value = !showDeleteModal.value;
};

const deleteHandler = () => {
  emit("delete-event", props.info.id);
  showDeleteModal.value = false;
};

function timeDifference(previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;
  const newPrev = new Date(previous);
  const current = new Date();

  let elapsed: number = current.getTime() - newPrev.getTime();

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return "approximately " + Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
  }
}

const diff = timeDifference(props.info.time);

const emit = defineEmits(["edit-event", "delete-event"]);
</script>
<template>
  <div class="flex mt-6">
    <div class="flex">
      <img src="../assets/pic.jpg" class="rounded-full h-10 w-10" />
      <div class="mx-4">
        <div class="font-bold">{{ info.name }}</div>
        <div v-if="!editing" class="break-words">{{ info.description }}</div>
        <div v-if="editing" class="flex-col">
          <input class="border-2 rounded-md" v-model="text" />
        </div>
      </div>
    </div>
    <div class="flex-grow" />

    <Menu @delete-event="toggleDeleteModal" @edit-event="editHandler" />
  </div>
  <div class="flex">
    <div class="text-gray-600 mt-4 pl-14">
      {{ diff }}
      <strong class="text-black">· Reply </strong>
    </div>
    <div class="flex-grow" />
    <div v-if="editing">
      <button @click="editHandler" class="border-2 rounded-md p-2">
        Discard Changes
      </button>
      <button
        @click="saveEditHandler"
        class="bg-blue-500 rounded-md p-2 text-white ml-2"
      >
        Update
      </button>
    </div>
  </div>
  <DeleteModal
    :showModal="showDeleteModal"
    @confirm-delete="deleteHandler"
    @close="toggleDeleteModal"
  />
</template>
