<template>
  <footer class="footer">
    <!--  -->
    <div
      class="container grid w-full  lg:grid-flow-col footer-wrapper gap-11 lg:gap-x-32"
    >
      <!-- COL-1 -->
      <div class="footer__col-1">
        <!-- LOGO -->
        <nuxt-link to="/" class="mie-auto">
          <AppAddImage
            style="max-height: 62px"
            src="logo2.svg"
            alt="لوجو-حراج-السعودية"
          />
        </nuxt-link>
        <!--  -->
        <p>
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات بشكل شامل
          غير متكلف
        </p>
        <!--  -->
        <ul class="footer__col-1__social">
          <li v-for="s in social" :key="s.name">
            <a :href="s.link" target="_blank">
              <GSvg :name-icon="s.name" />
            </a>
          </li>
        </ul>
      </div>
      <!-- COL-2 -->
      <div class="footer__col-2">
        <h4>
          <GSvg name-icon="arrow-logo" />
          <span>أقسام الموقع</span>
        </h4>
        <!--  -->
        <div class="footer__col-2__links">
          <nuxt-link
            v-for="link in links"
            :key="link.name"
            :to="link.link"
            v-text="link.name"
          />
        </div>
      </div>
      <!-- COL-3 -->
      <div class="footer__col-3">
        <h4>
          <GSvg name-icon="arrow-logo" />
          <span>تصنيفات الأقسم</span>
        </h4>
        <!--  -->
        <div class="footer__col-3__links">
          <div>
            <nuxt-link
              v-for="section in sections.section_1"
              :key="section.name"
              :to="section.link"
              v-text="section.name"
            />
          </div>
          <div>
            <nuxt-link
              v-for="section in sections.section_2"
              :key="section.name"
              :to="section.link"
              v-text="section.name"
            />
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="footer__copyright">
      <!--  -->
      <div class="container">
        <p>جميع الحقوق محفوظة لموقع حراج السعودية @ {{ getYear }}</p>
        <div class="flex items-center">
          <span class="mie-7">تصميم وبرمجة</span>
          <GSvg style="width: 6rem; height: 6rem" name-icon="ibtdi" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      social: [
        {
          name: 'facebook',
          link: '#',
        },
        {
          name: 'twitter',
          link: '#',
        },
        {
          name: 'instagram',
          link: '#',
        },
        {
          name: 'youtube',
          link: '#',
        },
        {
          name: 'snapshat',
          link: '#',
        },
      ],
      links: [
        {
          name: 'الرئيسية',
          link: '/',
        },
        {
          name: 'معاهدة استخدام الخدمة',
          link: '/',
        },
        {
          name: 'حساب عمولة الموقع',
          link: '/',
        },
        {
          name: 'القائمة السوداء',
          link: '/',
        },
        {
          name: 'نظام الخصم',
          link: '/',
        },
        {
          name: 'قائمة السلع والإعلانات الممنوعة',
          link: '/',
        },
        {
          name: 'تواصل معنا',
          link: '/',
        },
      ],
      sections: {
        section_1: [
          {
            name: 'الأجهزة الكهربية',
            link: '/',
          },
          {
            name: 'الأثاث المنزلي',
            link: '/',
          },
          {
            name: 'الحيوانات',
            link: '/',
          },
          {
            name: 'السيارات',
            link: '/',
          },
          {
            name: 'الجوالات',
            link: '/',
          },
          {
            name: 'العقارات',
            link: '/',
          },
          {
            name: 'الوظائف',
            link: '/',
          },
        ],
        section_2: [
          {
            name: 'مستلزمات شخصية',
            link: '/',
          },
          {
            name: 'أطعمة ومشروبات',
            link: '/',
          },
          {
            name: 'برمجة وتصميم',
            link: '/',
          },
          {
            name: 'كتب وفنون',
            link: '/',
          },
          {
            name: 'صيد ورحلات',
            link: '/',
          },
          {
            name: 'خدمات',
            link: '/',
          },
          {
            name: 'كل الإعلانات',
            link: '/',
          },
        ],
      },
    }
  },
  computed: {
    getYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style>
.footer {
  @apply bg-royal;
}
.footer-wrapper {
  @apply py-20;
}
.footer__col-1 p {
  @apply text-link my-8 text-md font-medium leading-loose;
}
.footer__col-1 p,
.footer__col-2__links,
.footer__col-3__links {
  @apply font-medium text-white text-opacity-70;
}
.footer__col-1__social {
  @apply flex items-center mt-auto;
}
.footer__col-1__social li {
  @apply mie-5;
}
.footer__col-1__social li a {
  @apply flex items-center justify-center border transition duration-300 border-white hover:border-opacity-0 hover:bg-mountain;
  width: 35px;
  height: 35px;
}
.footer__col-1__social svg {
  width: 2rem;
  height: 2rem;
}

.footer__col-1 {
  @apply flex flex-col md:col-start-1 md:col-end-3;
}
.footer__col-2 {
  @apply md:col-start-3 md:col-end-5;
}
.footer__col-3 {
  @apply md:col-start-5 md:col-end-9;
}

.footer__col-2 h4,
.footer__col-3 h4 {
  @apply flex items-center text-lg mb-5 md:mb-20 font-extrabold text-white;
}
.footer__col-2 svg,
.footer__col-3 svg {
  width: 2rem;
  height: 2rem;
}
.footer__col-2__links,
.footer__col-3__links > div {
  @apply flex flex-col  text-smx1;
}
.footer__col-2__links a:not(:last-of-type),
.footer__col-3__links a:not(:last-of-type) {
  @apply mb-5;
}

.footer__col-3__links {
  @apply grid grid-cols-2 gap-x-5;
}

.footer__col-2__links a:hover,
.footer__col-3__links a:hover {
  @apply text-white underline;
}

.footer__copyright {
  @apply bg-mariner;
}
.footer__copyright > div {
  @apply flex flex-col items-center justify-between py-2 text-white text-opacity-50  sm:flex-row text-smx1;
}
</style>
