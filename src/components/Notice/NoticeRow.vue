<template>
  <div class="flex w-full">
    <div class="bg-toyhouse-primary-200-alt w-min pl-6 pr-3 text-right text-sm">
      <h1 :class="{ invisible: rowNum === 0 }">
        {{ rowNum }}
      </h1>
    </div>
    <div class="pl-1 text-toyhouse-primary-500 opacity-70">
      <h1 v-if="text" >{{ text }}</h1>
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">

  defineProps({
    text: {
      type: String,
      default: ""
    },
    rowNum: {
      type: Number,
      default: undefined,
      required: false
    }
  })

</script>