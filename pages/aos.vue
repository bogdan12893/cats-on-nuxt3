<script setup></script>

<template lang="pug">
.aos-page
  section(class="bg-slate-200")
    div
      h1(v-aos="{before: 'before-fade-right-el', enter: 'enter-fade-right-el'}") section 1
      div
        p(v-aos="{before: 'before-fade-left-el', enter: 'enter-fade-left-el,delay-200'}") paragraph 1
        p(v-aos="{before: 'before-fade-left-el', enter: 'enter-fade-left-el,delay-400'}") paragraph 2
        p(v-aos="{before: 'before-fade-left-el', enter: 'enter-fade-left-el,delay-600'}") paragraph 3
  section(class="bg-slate-400")
    div
      h1(v-aos="{before: 'before-fade-up-el', enter: 'enter-fade-up-el'}") section 2
      div
        p(v-aos="{before: 'before-fade-up-el', enter: 'enter-fade-up-el,delay-200'}") paragraph 1
        p(v-aos="{before: 'before-fade-up-el', enter: 'enter-fade-up-el,delay-400'}") paragraph 2
        p(v-aos="{before: 'before-fade-up-el', enter: 'enter-fade-up-el,delay-600'}") paragraph 3
  section(class="bg-slate-600")
    div
      h1(v-aos="{before: 'before-fade-left-el', enter: 'enter-fade-left-el'}") section 3
      div
        p(v-aos="{before: 'before-fade-right-el', enter: 'enter-fade-right-el,delay-200'}") paragraph 1
        p(v-aos="{before: 'before-fade-right-el', enter: 'enter-fade-right-el,delay-400'}") paragraph 2
        p(v-aos="{before: 'before-fade-right-el', enter: 'enter-fade-right-el,delay-600'}") paragraph 3
  section(class="bg-slate-800")
    h1(v-aos="{before: 'before-fade-left-el', enter: 'enter-fade-left-el'}") section 4
</template>

<style lang="scss" scoped>
.aos-page {
  section {
    @apply h-screen grid items-center justify-center w-full;

    h1 {
      @apply text-purple-500 font-medium text-4xl;
    }
  }
}
</style>
