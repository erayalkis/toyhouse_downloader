<template>
  <div class="flex w-full overflow-y-auto">
    <div class="bg-toyhouse-primary-200 w-min pl-6 pr-3 text-right">
      <h1 :class="{ invisible: rowNum === 0 }">
        {{ rowNum }}
      </h1>
    </div>
    <h1 class="pl-1 text-toyhouse-primary-400 opacity-70">{{ text }}</h1>
  </div>
</template>
<script setup lang="ts">

  defineProps({
    text: {
      type: String,
      default: " "
    },
    rowNum: {
      type: Number,
      default: undefined,
      required: false
    }
  })

</script>