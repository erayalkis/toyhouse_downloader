<template>
  <div class="shrink-0 w-14 xl:w-24 text-center text-toyhouse-dark overflow-hidden">
    <img :src="data.image" />
    <h1>{{ data.name }}</h1>
  </div>
</template>
<script setup lang="ts">

  defineProps({
    data: {
      type: Object,
      default: {}
    }
  })
</script>