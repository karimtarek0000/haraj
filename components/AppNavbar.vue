<template>
  <nav class="flex items-center justify-between py-5 mb-8 navbar">
    <!-- LOGO -->
    <nuxt-link to="/">
      <AppAddImage
        style="height: 62px"
        src="logo.svg"
        alt="لوجو-حراج-السعودية"
      />
    </nuxt-link>

    <!--  -->
    <div class="flex items-center navbar__actions">
      <!-- NOTIFICATION -->
      <nuxt-link
        to="/"
        style="width: 5rem; height: 5rem"
        class="navbar__actions__notifi"
      >
        <GSvg style="width: 2.4rem; height: 2.4rem" name-icon="notification" />
        <span class="navbar__actions__notifi__count">23</span>
      </nuxt-link>
      <!--  -->
      <AppGoTo
        style="width: 14rem; height: 5rem"
        class="text-white transition duration-300 bg-royal hover:bg-opacity-90"
        v-bind="{ title: 'أضف اعلانك', link: '/' }"
      />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
}
</script>

<style>
.navbar__actions__notifi {
  @apply flex items-center justify-center transition duration-300 cursor-pointer  hover:bg-opacity-70 bg-narvik relative mie-3 md:mie-7;
}
.navbar__actions__notifi__count {
  @apply absolute top-2 left-2 font-bold text-xs;
}
</style>
