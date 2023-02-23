<script setup>
const heroText = 'Hey, Ion Doi here!';
</script>

<template lang="pug">
.aos-page
  section(class="bg-green-300")
    .typewriter
      h1 {{heroText}}
  section(class="bg-slate-200")
    div
      h2(v-aos="{before: 'before-fade-right-el', enter: 'enter-fade-right-el'}") section 1
      div
        p(v-aos="{before: 'before-fade-left-el', enter: 'enter-fade-left-el,delay-200'}") paragraph 1
        p(v-aos="{before: 'before-fade-left-el', enter: 'enter-fade-left-el,delay-400'}") paragraph 2
        p(v-aos="{before: 'before-fade-left-el', enter: 'enter-fade-left-el,delay-600'}") paragraph 3
  section(class="bg-slate-400")
    div
      h2(v-aos="{before: 'before-fade-up-el', enter: 'enter-fade-up-el'}") section 2
      div
        p(v-aos="{before: 'before-fade-up-el', enter: 'enter-fade-up-el,delay-200'}") paragraph 1
        p(v-aos="{before: 'before-fade-up-el', enter: 'enter-fade-up-el,delay-400'}") paragraph 2
        p(v-aos="{before: 'before-fade-up-el', enter: 'enter-fade-up-el,delay-600'}") paragraph 3
  section(class="bg-slate-600")
    div
      h2(v-aos="{before: 'before-fade-left-el', enter: 'enter-fade-left-el'}") section 3
      div
        p(v-aos="{before: 'before-fade-right-el', enter: 'enter-fade-right-el,delay-200'}") paragraph 1
        p(v-aos="{before: 'before-fade-right-el', enter: 'enter-fade-right-el,delay-400'}") paragraph 2
        p(v-aos="{before: 'before-fade-right-el', enter: 'enter-fade-right-el,delay-600'}") paragraph 3
  section(class="bg-slate-800")
    h2(v-aos="{before: 'before-fade-left-el', enter: 'enter-fade-left-el'}" class="delay") section 4
</template>

<style lang="scss" scoped>
.aos-page {
  section {
    @apply h-screen grid items-center justify-center w-full;

    h2 {
      @apply text-purple-500 font-medium text-4xl;
    }
  }
}
</style>
