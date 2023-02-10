<script setup>
const catBreeds = ref(null);
const currentPage = ref(1);
const lastPage = ref(null);
const loading = ref(false);

const getCatsBreeds = async () => {
  loading.value = true;
  try {
    const { data } = await useBaseUrl(`breeds?page=${currentPage.value}`);
    catBreeds.value = data.value.data;
    lastPage.value = data.value.last_page;
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

const handlePage = (direction) => {
  if (direction && currentPage.value < lastPage.value) {
    currentPage.value++;
  }

  if (!direction && currentPage.value > 1) {
    currentPage.value--;
  }
};

await getCatsBreeds();

watch(
  () => currentPage.value,
  async () => {
    await getCatsBreeds();
  }
);
</script>

<template lang="pug">
.index-page.p-10
  .pagination(class="flex items-center")
    button(class="border-2 border-blue-400 p-1 rounded-lg" @click="handlePage(false)") ←
    div(class="p-1 px-4 border-2 border-blue-400 mx-2 rounded-lg") total pages: {{ lastPage }}
    button(class="border-2 border-blue-400 p-1 rounded-lg" @click="handlePage(true)") →
  div(v-if="loading" class="min-h-screen")
    template(v-for="i in 10")
      div(class="p-2 my-2 bg-gray-100 border-2 border-gray-200 h-[44px] rounded-lg")
  div(v-else)
    template(v-for="cat in catBreeds")
      div(class="p-2 my-2 bg-teal-400 border-2 border-teal-900 rounded-lg") Breed: {{ cat.breed }} 🐱, Country: {{ cat.country }} 🚩
</template>

<style lang="scss" scoped></style>
