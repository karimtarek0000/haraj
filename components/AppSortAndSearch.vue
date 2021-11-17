<template>
  <div class="sort-and-search">
    <!-- TITLE -->
    <h2>بحث وفرز</h2>

    <!-- SEARCH AND SORT WRAPPER -->
    <div class="sort-and-search__wrapper">
      <!-- SEARCH -->
      <form class="sort-and-search__form">
        <slot name="search" />
      </form>
      <!-- ADD -->
      <slot />
      <!-- SUBMIT -->
      <button
        type="submit"
        style="height: 5rem"
        class="sort-and-search__submit"
      >
        بحث
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSortAndSearch',
}
</script>

<style>
.sort-and-search {
  @apply px-14 mt-24 bg-alabaster py-7 items-center flex flex-col lg:flex-row;
  min-height: 11rem;
}
.sort-and-search__wrapper {
  @apply grid items-center w-full grid-cols-2  md:grid-cols-3 lg:grid-cols-ss gap-x-10 gap-y-5;
}
.sort-and-search__wrapper > * {
  height: 5rem;
}
.sort-and-search h2 {
  @apply font-heavy text-lg mb-7 lg:mie-20 whitespace-nowrap lg:mb-0;
}
.sort-and-search__form input {
  @apply px-7 focus:outline-royal;
}
.sort-and-search__form input,
.sort-and-search__form input::placeholder {
  @apply text-md;
}
.sort-and-search__form input::placeholder {
  color: #acacac;
}
.sort-and-search__submit {
  @apply col-start-1 row-start-3 row-end-3 text-white  md:row-start-2 md:row-end-2 lg:row-start-1 lg:row-end-1 col-span-full bg-royal text-md md:col-start-3 md:col-end-4 lg:col-start-4 lg:col-end-5;
}
.sort-and-search__form {
  @apply col-start-1 col-span-full lg:col-start-auto lg:col-span-1 border border-mercury;
}

.sort-and-search .select__btn {
  @apply bg-white px-4 border border-mercury;
}
.sort-and-search .select__content {
  @apply bg-white;
}
.sort-and-search .select__content > div {
  @apply py-6 border border-mercury;
}
.sort-and-search .select__content div > * {
  @apply py-2 px-3;
}
.sort-and-search .select__content div > *:not(:last-child) {
  @apply mb-6;
}
</style>
