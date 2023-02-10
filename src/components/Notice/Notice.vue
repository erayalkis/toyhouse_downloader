
import NoticeRow from './NoticeRow.vue';

<template>
  <div class="flex flex-col mt-5 text-toyhouse-dark border border-toyhouse-primary-border w-10/12 rounded-sm xl:w-7/12">
    <template v-for="(notice, idx) in notices">
      <NoticeRow :text="notice" :row-num="idx + 1" />
    </template>
    <NoticeRow text="" :row-num="0" />
    <NoticeRow text="" :row-num="0" />
    <NoticeRow text="" :row-num="0" />
    <NoticeRow text="" :row-num="0" />
    <NoticeRow text="" :row-num="0" />
    <NoticeRow text="" :row-num="0" />
  </div>
</template>
<script setup lang="ts">
  import NoticeRow from './NoticeRow.vue';
  import { notices } from './data/notices';
</script>
