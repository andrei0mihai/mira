<template>
  <div>
    <img
      v-for="(image, index) in images"
      :key="index"
      alt="'painting' + index"
      class="image"
      :src="'/painting' + index"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import Images from "@/services/Images";

export default defineComponent({
  head() {
    return {
      title: `Mira's artwork`
    };
  },
  setup: () => {
    const images = ref(Images.getImages());
    return { images };
  }
});
</script>

<style>
.image {
  width: 200px;
  height: 200px;
}
</style>
