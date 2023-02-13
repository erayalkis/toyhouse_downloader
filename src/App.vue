<template>
  <main>
    <div class="flex flex-col items-center justify-center w-screen h-screen">
      <Nav />
      <Queue />
      <Download />
      <Notice />
      <Footer />
    </div>
  </main>
</template>
<script setup lang="ts">
import Nav from "./components/Nav/Nav.vue";
import Download from './components/Download/Download.vue';
import Queue from './components/Queue/Queue.vue';
import Notice from "./components/Notice/Notice.vue";
import Footer from './components/Footer/Footer.vue';
</script>