import NoticeRow from './NoticeRow.vue';

<template>
  <div
    class="flex flex-col mt-5 text-toyhouse-dark border border-toyhouse-primary-border rounded-sm"
  >
    <template v-for="(notice, idx) in notices" :key="idx">
      <NoticeRow :text="notice" :row-num="idx + 1" />
    </template>
    <NoticeRow :row-num="notices.length + 1">
      <template #content>
        <h1>
          Psst... You can remove these restrictions for your own characters by
          authorizing
          <a
            class="text-toyhouse-button-primary hover:text-toyhouse-button-secondary"
            href="https://toyhou.se/toyhouse_downloader"
            target="_blank"
            >this</a
          >
          account!
        </h1>
      </template>
    </NoticeRow>
    <NoticeRow :text="''" :row-num="0" />
    <NoticeRow :text="''" :row-num="0" />
  </div>
</template>
<script setup lang="ts">
import NoticeRow from "./NoticeRow.vue";
import { notices } from "./data/notices";
</script>
