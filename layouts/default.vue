<script setup></script>

<template lang="pug">
.default-layout
  nav.nav
    NuxtLink(to="/") home
    NuxtLink(to="/aos") AOS
    NuxtLink(to="/neon-btn") Neon Button
slot
</template>

<style lang="scss" scoped>
.default-layout {
  .nav {
    @apply bg-slate-500 text-white p-3;
    a {
      @apply pl-3;

      &.router-link-exact-active {
        @apply underline;
      }
    }
  }
}
</style>
