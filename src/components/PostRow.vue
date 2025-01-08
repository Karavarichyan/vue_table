<template>
  <tr>
    <td class="px-3 py-4">
      <div v-if="!isEditing">{{ post.title }}</div>
      <input
        v-else
        v-model="editedPost.title"
        class="w-full border border-gray-300 rounded-lg p-2"
        placeholder="Edit title"
      />
    </td>
    <td class="px-3 py-4">
      <div v-if="!isEditing">{{ post.body }}</div>
      <textarea
        v-else
        v-model="editedPost.body"
        class="w-full border border-gray-300 rounded-lg p-2"
        placeholder="Edit description"
      ></textarea>
    </td>
    <td class="px-3 py-4 text-right space-x-2">
      <ButtonComponent
        v-if="!isEditing"
        label="Edit"
        color="blue"
        :onClick="startEditing"
      />
      <ButtonComponent
        v-if="!isEditing"
        label="Delete"
        color="red"
        :onClick="() => postStore.removePost(post.id)"
      />
      <ButtonComponent
        v-if="isEditing"
        label="Save"
        color="green"
        :onClick="saveChanges"
      />
      <ButtonComponent
        v-if="isEditing"
        label="Cancel"
        color="gray"
        :onClick="cancelEdit"
      />
    </td>
  </tr>
</template>

<script setup>
import { ref } from 'vue';
import { usePostStore } from '@/stores/postStore';
import ButtonComponent from '@/components/ButtonComponent.vue';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const postStore = usePostStore();

const isEditing = ref(false);
const editedPost = ref({
  title: props.post.title,
  body: props.post.body,
});

const startEditing = () => {
  isEditing.value = true;
};

const saveChanges = () => {
  postStore.updatePost({ ...props.post, ...editedPost.value });
  isEditing.value = false;
};

const cancelEdit = () => {
  editedPost.value = { title: props.post.title, body: props.post.body };
  isEditing.value = false;
};
</script>
