<template>
  <tr>
    <td class="px-3 py-4 sm:px-6">
      <div v-if="!isEditing">{{ post.title }}</div>
      <input
        v-else
        v-model="editedPost.title"
        class="w-full border border-gray-300 rounded-lg p-2"
        placeholder="Edit title"
      />
    </td>

    <td class="px-3 py-4 sm:px-6">
      <div v-if="!isEditing">{{ post.body }}</div>
      <textarea
        v-else
        v-model="editedPost.body"
        class="w-full border border-gray-300 rounded-lg p-2"
        placeholder="Edit description"
      ></textarea>
    </td>

    <td class="px-3 py-4 sm:px-6 text-right">
      <div v-if="!isEditing" class="flex justify-end space-x-2">
        <ButtonComponent label="Edit" color="blue" :onClick="startEditing" />
        <ButtonComponent label="Delete" color="red" :onClick="() => $emit('remove', post.id)" />
      </div>

      <div v-else class="flex justify-end space-x-2">
        <ButtonComponent label="Save" color="green" :onClick="saveChanges" />
        <ButtonComponent label="Cancel" color="gray" :onClick="cancelEdit" />
      </div>
    </td>
  </tr>
</template>

<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import { ref } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['remove', 'update'])

const isEditing = ref(false)

const editedPost = ref({
  title: props.post.title,
  body: props.post.body,
})

const startEditing = () => {
  isEditing.value = true
}

const saveChanges = () => {
  emit('update', { ...props.post, ...editedPost.value })
  isEditing.value = false
}

const cancelEdit = () => {
  editedPost.value = { title: props.post.title, body: props.post.body }
  isEditing.value = false
}
</script>
