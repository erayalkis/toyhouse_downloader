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
    <NoticeRow :row-num="notices.length + 2">
      <template #content>
        <h1>
          ...or, alternatively, to avoid fiddling with image settings, download
          the desktop app
          <a
            class="text-toyhouse-button-primary hover:text-toyhouse-button-secondary"
            href="https://github.com/erayalkis/toyhouse_api/releases/latest"
            target="_blank"
            >here!</a
          >
        </h1>
      </template>
    </NoticeRow>

    <!-- <NoticeRow :row-num="notices.length + 1">
      <template #content>
        <h1>
          Alternatively, download the desktop app
          <a
            class="text-toyhouse-button-primary hover:text-toyhouse-button-secondary"
            href="https://github.com/erayalkis/toyhouse_api/releases/latest"
            target="_blank"
            >here!</a
          >
        </h1>
      </template>
    </NoticeRow> -->
  </div>
</template>
<script setup lang="ts">
import NoticeRow from "./NoticeRow.vue";
import { notices } from "./data/notices";
</script>
