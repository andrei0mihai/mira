<template>
  <img :alt="image.src" :src="image.src" />
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Images from "@/services/Images";

export default defineComponent({
  async asyncData(context) {
    const response = await Images.getImage(parseInt(context.params.details));
    return { image: response.data };
  }
});
</script>

<style></style>
