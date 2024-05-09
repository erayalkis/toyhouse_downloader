<template>
  <UpdateWarning />
  <main>
    <div class="flex flex-col items-center justify-between w-screen h-screen">
      <Nav />
      <MainContainer />
    </div>
  </main>
</template>
<script setup lang="ts">
import Nav from "./components/NavBar/NavBar.vue";
import MainContainer from "./components/Container/MainContainer.vue";
import UpdateWarning from "./components/NavBar/UpdateWarning.vue";
</script>
