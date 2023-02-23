<script setup>
const catBreeds = ref(null);
const currentPage = ref(1);
const lastPage = ref(null);
const loading = ref(false);

const getCatsBreeds = async () => {
  loading.value = true;
  try {
    const { data } = await useBaseUrl(`breeds?page=${currentPage.value}`);
    catBreeds.value = data?.value?.data;
    lastPage.value = data?.value?.last_page;
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

await getCatsBreeds();

const handlePage = (direction) => {
  if (direction && currentPage.value < lastPage.value) {
    currentPage.value++;
  }

  if (!direction && currentPage.value > 1) {
    currentPage.value--;
  }
};

watch(
  () => currentPage.value,
  async () => {
    await getCatsBreeds();
  }
);
</script>

<template lang="pug">
.index-page.p-10
  .loading-state(v-if="loading" class="min-h-screen")
    template(v-for="i in 10")
      .item
  .cards(v-else)
    template(v-for="cat in catBreeds")
      .parent
        .card
          .content-box
            h1.card-title {{ cat.breed }}
            ul.card-content
              li
                span.detail country:
                span {{ cat.country ? cat.country : "-" }}
              li
                span.detail origin:
                span {{ cat.origin ? cat.origin : "-" }}
              li
                span.detail coat:
                span {{ cat.coat ? cat.coat : "-" }}
              li
                span.detail pattern:
                span {{ cat.pattern ? cat.pattern : "-" }}
            NuxtLink.link(to="#") Read More
  .pagination(class="flex items-center")
    button(class="border-2 border-green-300 p-1 rounded-lg bg-violet-300" @click="handlePage(false)") ←
    div(class="p-1 px-4 border-2 border-green-300 mx-2 rounded-lg bg-violet-300") total pages: {{ lastPage }}
    button(class="border-2 border-green-300 p-1 rounded-lg bg-violet-300" @click="handlePage(true)") →

</template>

<style lang="scss" scoped>
.index-page {
  @apply bg-slate-800;

  .cards {
    @apply grid grid-cols-4 gap-10 my-10;
  }

  .parent {
    @apply col-span-1;
    perspective: 1000px;

    .card {
      padding-top: 100px;
      border-radius: 12px;
      background-image: url('https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60');
      background-position: 40% 10%;
      transform-style: preserve-3d;
      transition: all 0.5s ease-in-out;

      .content-box {
        height: 100%;
        width: 100%;
        background-color: #000000d0;
        border-radius: 0 0 12px 12px;
        padding: 20px;
        box-shadow: rgba(225, 39, 213, 0.554) 0px 18px 50px -10px;
        transform-style: preserve-3d;
        transition: all 0.5s ease-in-out;
        height: 200px;

        .card-title {
          color: white;
          font-size: larger;
          font-weight: bold;
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 20px);

          &:hover {
            transform: translate3d(0px, 0px, 50px);
          }
        }

        .card-content {
          padding-top: 15px;
          font-size: smaller;
          color: white;
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 20px);

          li {
            .detail {
              font-weight: bold;
              margin-right: 5px;
            }
          }

          &:hover {
            transform: translate3d(0px, 0px, 50px);
          }
        }

        .link {
          @apply text-white font-medium py-2 inline-block underline;
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 20px);

          &:hover {
            transform: translate3d(0px, 0px, 50px);
          }
        }
      }

      &:hover,
      &:focus-within {
        transform: rotate3d(0.5, 1, 0, 30deg);
        background-position: 20% 40%;

        .link {
          transform: translate3d(0px, 0px, 50px);
        }
      }
    }
  }

  .loading-state {
    @apply grid grid-cols-4 gap-10 my-10;

    .item {
      @apply col-span-1 h-[300px] bg-fuchsia-700 rounded-xl opacity-10;
    }
  }
}
</style>
