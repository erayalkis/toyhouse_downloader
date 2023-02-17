<template>
  <div class="shrink-0 w-14 lg:w-18 xl:w-20 text-center text-toyhouse-dark overflow-hidden">
    <img :src="data.image" />
    <h1 v-if="data.name.length < 13">{{ data.name }}</h1>
    <h1 v-else>{{ data.name.slice(0, 10) + "..." }}</h1>
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