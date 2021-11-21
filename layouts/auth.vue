<template>
  <div class="bg-alabaster">
    <!-- START NAVBAR -->
    <AppNavbar class="container" />
    <!-- END NAVBAR -->

    <main>
      <Nuxt />
    </main>

    <!-- START FOOTER -->
    <AppFooter class="overflow-hidden" />
    <!-- END FOOTER -->
  </div>
</template>

<script>
export default {
  name: 'Auth',
}
</script>

<style>
.register {
  @apply grid lg:w-7/12 sm:grid-cols-3 my-14 bg-white;
  min-height: 50.7rem;
}
.register__form {
  @apply flex flex-col items-center col-start-2 py-14 col-span-full;
}
.register__wrapper__input {
  @apply flex flex-col mb-8;
}
.register__wrapper__input input {
  width: 39.5rem;
  height: 5rem;
}
.register__actions {
  @apply flex flex-col mt-7;
  width: 39.5rem;
}
.register__actions button {
  @apply bg-royal text-md text-white;
  height: 5rem;
}
.register__actions > a:nth-child(1) {
  @apply text-mountain mis-auto font-extrabold text-sm mb-8;
}
.register__actions__new-account {
  @apply flex items-center justify-center mt-20 text-md;
}
.register__actions__new-account a {
  @apply text-royal mis-2;
}
</style>
