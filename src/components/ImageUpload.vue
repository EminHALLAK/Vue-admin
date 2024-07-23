<template>
  <label class="btn btn-primary">
    Upload <input type="file" hidden="hidden" @change="upload">
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'ImageUpload',
  emits: ['uploaded'],
  setup(_, context) {
    const upload = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const files: FileList | null = target.files;
      if (files === null || files.length === 0) return;

      const file = files.item(0);
      if (file === null) return; // additional check to ensure file is not null

      const formData = new FormData();
      formData.append('image', file);

      try {
        const { data } = await axios.post('upload', formData);
        context.emit('uploaded', data.url);
      } catch (error) {
        console.error('Upload failed:', error);
      }
    };

    return {
      upload,
    };
  },
});
</script>