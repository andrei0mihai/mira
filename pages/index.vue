<template>
  <div class="product-list">
    <nuxt-link
      v-for="(image, index) in images"
      :key="index"
      no-prefetch
      class="product"
      :to="`/details/${index}`"
    >
      <img class="image" :alt="image.src" :src="image.src" />
    </nuxt-link>
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

<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-flow: row wrap;
  .product {
    flex: 1 0 290px;
    height: 420px;
    max-width: 290px;
    padding: 10px;
    .image {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
