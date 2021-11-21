<template>
  <div>
    <!-- HEAD -->
    <div class="bg-royal">
      <!--  -->
      <div class="container py-16 text-center text-white">
        <h1 class="mb-8 text-lgx1">تسجيل دخول</h1>
        <p class="text-white text-md text-opacity-70">
          إبدأ إعلانك من اليوم على حراج السعودية
        </p>
      </div>
    </div>
    <!--  -->
    <section class="container items-center px-0 register">
      <!-- IMAGE -->
      <div class="hidden h-full col-start-1 col-end-2 sm:block">
        <img
          class="adj-image"
          src="~/assets/images/banars/5.jpg"
          alt="لوجو-حراج-السعودية"
        />
      </div>
      <!--  -->
      <form class="register__form">
        <!-- MOBILE -->
        <div class="register__wrapper__input">
          <label for="mobile">رقم الجوال</label>
          <input
            id="mobile"
            type="text"
            placeholder="ادخل رقم الهاتف"
            inputmode="number"
            class="input"
          />
        </div>
        <!-- PASSWORD -->
        <div class="register__wrapper__input">
          <label for="password">كلمة المرور</label>
          <input
            id="password"
            type="password"
            placeholder="ادخل كلمة المرور"
            class="input"
          />
        </div>

        <!-- REGISTER ACTIONS -->
        <div class="register__actions">
          <nuxt-link to="/">هل نسيت كلمة المرور ؟</nuxt-link>
          <button type="submit" class="btn">دخول</button>
          <!--  -->
          <div class="register__actions__new-account">
            <p>ليس لديك حساب ؟</p>
            <nuxt-link class="" to="/">انشاء حساب جديد</nuxt-link>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  layout: 'auth',
  head: {
    title: 'تسجيل الدخول',
  },
}
</script>

<style></style>
