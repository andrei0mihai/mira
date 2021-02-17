<template>
  <div>
    <img
      v-for="(image, index) in images"
      :key="index"
      class="image"
      :alt="image.src"
      :src="image.src"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Images from "@/services/Images";

export default defineComponent({
  async asyncData() {
    const response = await Images.getImages();
    return { images: response.data };
  },
  head() {
    return {
      title: `Mira's artwork`
    };
  },
  setup: () => {}
});
</script>

<style>
.image {
  width: 200px;
  height: 200px;
}
</style>
