<template>
  <div class="shrink-0 w-14 xl:w-32 text-center text-white shadow-2xl border-2 border-toyhouse-button-secondary overflow-hidden">
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