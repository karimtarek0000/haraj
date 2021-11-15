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
      <!-- ADD YOUR ADS -->
      <AppGoTo
        style="width: 14rem; height: 5rem"
        class="navbar__actions__add-ads"
        v-bind="{ title: 'أضف اعلانك', link: '/' }"
      />
      <!-- SELECT -->
      <AppSelect :data="dataSelect" style="width: 14rem; height: 5rem" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      dataSelect: {
        title: 'التسجيل',
        content: [
          {
            link: '/',
            name: 'تسجيل الدخول',
          },
          {
            link: '/',
            name: 'انشاء حساب جديد',
          },
        ],
      },
    }
  },
}
</script>

<style>
.navbar__actions__notifi {
  @apply flex items-center justify-center transition duration-300 cursor-pointer  hover:bg-opacity-70 bg-narvik relative mie-3 md:mie-7;
}
.navbar__actions__notifi__count {
  @apply absolute top-2 left-2 font-bold text-xs;
}
.navbar__actions__add-ads {
  @apply transition duration-300 bg-royal hover:bg-opacity-90 text-white mie-3 md:mie-7;
}

.navbar .select__content {
  @apply bg-white;
}
.navbar .select__btn {
  @apply justify-center border border-royal;
}
.navbar .select__btn span {
  @apply text-royal;
}
.navbar .select__content {
  @apply mt-7;
}
.navbar .select__content > div {
  @apply border border-link;
}
.navbar .select__content a {
  @apply py-7 text-center;
}
.navbar .select__content a:not(:last-child) {
  @apply border-b border-link;
}
</style>
