<template>
  <div>
    <img
      v-for="(image, index) in images"
      :key="index"
      :alt="image.src"
      class="image"
      :src="image.src"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Images from "@/services/Images";

export default defineComponent({
  asyncData() {
    return Images.getImages().then(response => {
      return { images: response.data };
    });
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
