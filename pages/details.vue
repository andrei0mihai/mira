<template>
  <div>details</div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Images from "@/services/Images";

export default defineComponent({
async asyncData(context) {
    const response = await Images.getImage(parseInt(context.params.id));
    console.log(response.data);

    return { images: response.data };
  }
})
</script>

<style></style>
