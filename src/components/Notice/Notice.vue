
import NoticeRow from './NoticeRow.vue';

<template>
  <div class="flex flex-col mt-5 text-toyhouse-dark border border-toyhouse-primary-200 w-10/12 rounded-sm xl:w-7/12">
    <!-- This app will not fetch galleries for locked (private) profiles.
This app will not remove watermarks unless it's authorized.
This app might not fetch galleries that have custom HTML.
Psst... You can remove watermarks by authorizing this account! -->
    <NoticeRow text="Help me!" :row-num="1" />
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
</script>
