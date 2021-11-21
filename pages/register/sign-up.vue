<template>
  <div>
    <!-- HEAD -->
    <div class="bg-royal">
      <!--  -->
      <div class="container py-16 text-center text-white">
        <h1 class="mb-8 text-lgx1">انشاء حساب جديد</h1>
        <p class="text-white text-md text-opacity-70">
          الخطوة الأولى لرحلة مميزة بتجربة بسيطة
        </p>
      </div>
    </div>
    <!--  -->
    <section class="container items-center px-0 register">
      <!-- IMAGE -->
      <div class="hidden h-full col-start-1 col-end-2 sm:block">
        <img
          class="adj-image"
          src="~/assets/images/banars/6.jpg"
          alt="لوجو-حراج-السعودية"
        />
      </div>
      <!--  -->
      <form class="register__form">
        <!-- NAME -->
        <div class="register__wrapper__input">
          <label for="name">الاسم</label>
          <input
            id="name"
            type="text"
            placeholder=" ادخل الاسم"
            class="input"
          />
        </div>
        <!-- MOBILE -->
        <div class="register__wrapper__input">
          <label for="mobile">رقم الجوال</label>
          <input
            id="mobile"
            type="text"
            placeholder="مثال : 5568974"
            class="input"
          />
        </div>
        <!-- EMAIL -->
        <div class="register__wrapper__input">
          <label for="email">البريد الالكتروني</label>
          <input
            id="email"
            autocomplete="off"
            type="email"
            placeholder="ادخل الايميل"
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
        <!-- CONFIRM PASSWORD -->
        <div class="register__wrapper__input">
          <label for="confirm-password">تاكيد كلمة المرور</label>
          <input
            id="confirm-password"
            type="password"
            placeholder="تاكيد كلمة المرور"
            class="input"
          />
        </div>

        <!-- REGISTER ACTIONS -->
        <div class="register__actions">
          <!-- SELECT BOX -->
          <AppCheckBox
            v-bind="{ listCheckBox: dCheckBox, getChecked: checked }"
            @changeChecked="checked = $event"
          >
            <p class="text-sm font-medium leading-loose mis-5">
              بدخولك يعد موافقة منك على
              <nuxt-link class="text-royal" to="/">شروط الاستخدام</nuxt-link> و
              <nuxt-link class="text-royal" to="/"> الشروط والاحكام</nuxt-link>
              الخاصة بحراج السعودية
            </p>
          </AppCheckBox>
          <button type="submit" class="mt-8 btn">انشاء حساب</button>
          <!--  -->
          <div class="register__actions__new-account">
            <p>لديك حساب بالفعل ؟</p>
            <nuxt-link class="" to="/">سجل الدخول</nuxt-link>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  layout: 'auth',
  data() {
    return {
      checked: [],
      dCheckBox: [
        {
          name: 'agree',
          value: true,
        },
      ],
    }
  },
  head: {
    title: 'انشاء حساب جديد',
  },
}
</script>

<style>
.checkbox__label__checkbox {
  border: 1px solid rgba(0, 0, 0, 0.199);
  @apply bg-mountain;
}
.checkbox__label__checkbox {
  @apply mt-3;
}
</style>
