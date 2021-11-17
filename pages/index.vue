<template>
  <main>
    <!-- START SLIDER -->
    <AppSliderHeader />
    <!-- END SLIDER -->

    <!-- START SORT AND SEARCH -->
    <AppSortAndSearch>
      <!-- SLOTS -->
      <!-- ----- -->
      <!-- SEARCH -->
      <input
        slot="search"
        class="w-full h-full"
        type="text"
        placeholder="ادخل كلمة البحث..."
        inputmode="text"
      />
      <!-- SORT BY CITY -->
      <AppSelect
        v-bind="{ data: citySort, type: 'btn' }"
        @userSelected="userSelectedCity = $event"
      />
      <!-- OTHER SORT -->
      <AppSelect
        v-bind="{ data: otherSort, type: 'btn' }"
        @userSelected="userSelectedOther = $event"
      />
    </AppSortAndSearch>
    <!-- END SORT AND SEARCH -->

    <!-- START SECTION BROWES -->
    <section class="browse">
      <!-- START ADS -->
      <div class="browse__ads">
        <!-- START HEAD -->
        <div class="browse__ads__head">
          <!-- IMAGE -->
          <div class="browse__ads__head__image">
            <AppAddImage class="adj-image" src="banars/1.jpg" />
          </div>
          <!-- CONTENT -->
          <div class="browse__ads__head__content">
            <h3>حراج السيارات</h3>
            <p>تصفح الإعلانات حسب الماركة</p>
          </div>
        </div>
        <!-- END HEAD -->
        <div class="browse__ads__cars">
          <div v-for="car in cars" :key="car" class="bg-alabaster">
            <AppAddImage :src="`ads/${car}`" />
          </div>
        </div>
      </div>
      <!-- END ADS -->
      <!-- START CATEGORIES -->
      <div class="browse__categories">
        <h2>تصفح الأقسام</h2>
        <!-- CONTENT -->
        <div class="browse__categories__content">
          <nuxt-link class="browse__categories__content__link" to="/">
            <GSvg name-icon="car" />
            <p>السيارات</p>
            <figure>298</figure>
          </nuxt-link>
          <nuxt-link class="browse__categories__content__link" to="/">
            <GSvg name-icon="electronics" />
            <p>الأجهزة الكهربية</p>
            <figure>298</figure>
          </nuxt-link>
          <nuxt-link class="browse__categories__content__link" to="/">
            <GSvg name-icon="smartphone" />
            <p>الجولات</p>
            <figure>298</figure>
          </nuxt-link>
          <nuxt-link class="browse__categories__content__link" to="/">
            <GSvg name-icon="camel" />
            <p>الحيوانات</p>
            <figure>298</figure>
          </nuxt-link>
          <nuxt-link class="browse__categories__content__link" to="/">
            <GSvg name-icon="company" />
            <p>العقارات</p>
            <figure>298</figure>
          </nuxt-link>
          <nuxt-link class="browse__categories__content__link" to="/">
            <GSvg name-icon="sofa" />
            <p>الأثاث المنزلي</p>
            <figure>298</figure>
          </nuxt-link>
          <nuxt-link class="browse__categories__content__link" to="/">
            <GSvg name-icon="job" />
            <p>الوظائف</p>
            <figure>298</figure>
          </nuxt-link>
          <nuxt-link class="browse__categories__content__link" to="test">
            <GSvg name-icon="categories" />
            <p>كل الأقسام</p>
          </nuxt-link>
        </div>
        <!-- BANAR -->
        <div class="banar">
          <AppAddImage class="adj-image" src="banars/2.jpg" />
          <div class="browse__categories__banar__content">
            <h4>جوالات بكل الأنواع</h4>
            <p>جميع أنواع الجوالات المتنوعة في كل المدن</p>
          </div>
        </div>
      </div>
      <!-- END CATEGORIES -->
    </section>
    <!-- END SECTION BROWES -->

    <!-- START SECTION ADS -->
    <section class="ads">
      <!-- ADS CITY -->
      <div class="ads__city">
        <h2>إعلانات المدن</h2>
        <!-- CONTENT -->
        <div class="ads__city__content">
          <!-- INDEVISUAL ADS -->
          <nuxt-link v-for="i in 9" :key="i" to="/">
            <div class="flex items-center">
              <p>الرياض</p>
              <figure class="mis-7">(180)</figure>
            </div>
            <GSvg style="width: 12px; height: 7px" name-icon="arrow-down" />
          </nuxt-link>
          <!-- ALL ADS -->
          <nuxt-link to="/">
            <GSvg name-icon="all" />
            <p>كل إعلانات المدن</p>
          </nuxt-link>
        </div>
      </div>
      <!--  -->
      <div class="ads__content">
        <h2>أحدث الإعلانات</h2>
        <!-- SLIDER CONTENT -->
        <VueSlickCarousel class="ads__content__slider" v-bind="settings">
          <div v-for="i in 6" :key="i" class="slide">
            <div>
              <!-- IMAGE -->
              <div class="ads__content__image">
                <img class="adj-image" src="~/assets/images/test.jpg" alt="" />
              </div>
              <!-- CITY AND DISCRIPTION -->
              <div class="ads__content__content">
                <!-- CITY -->
                <figure>الرياض</figure>
                <!-- DISCRIPTION -->
                <p>سيارة رانج روفر 2021 للبيع في منطقة جدة {{ i }}</p>
              </div>
              <!-- TIMES AND AUTHOR -->
              <div class="ads__content__other-info">
                <div>
                  <GSvg name-icon="time" />
                  <span class="mis-2">منذ ساعتين</span>
                </div>
                <div>
                  <GSvg name-icon="user" />
                  <span class="mis-2">كريم علم الدين</span>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
        <!-- BANAR -->
        <div class="ads__banar banar">
          <AppAddImage class="adj-image" src="banars/3.jpg" />
          <div class="ads__banar__content">
            <h4>أضف اعلانك الأن</h4>
            <AppGoTo v-bind="{ title: 'اضف اعلان', link: '/' }" />
          </div>
        </div>
      </div>
      <!-- END CATEGORIES -->
    </section>
    <!-- END SECTION ADS -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      citySort: {
        title: 'مكة المكرمة',
        content: [
          {
            link: '/',
            name: 'الرياض',
          },
          {
            link: '/',
            name: 'الدمام',
          },
        ],
      },
      otherSort: {
        title: 'كل الحراج',
        content: [
          {
            link: '/',
            name: 'كل الحراج',
          },
          {
            link: '/',
            name: 'كل الحراج',
          },
        ],
      },
      d: {
        title: 'كل الحراج',
        content: [
          {
            link: '/',
            name: 'كل الحراج',
          },
          {
            link: '/',
            name: 'كل الحراج',
          },
        ],
      },
      cars: [
        'kia.png',
        'toyota.png',
        'nissan.png',
        'folx.png',
        'ford.png',
        'mg.png',
        'honda.png',
        'volvo.png',
        'hyundai.png',
        'mt.png',
        'brii.png',
        'marced.png',
        'rover.png',
        'audi.png',
        'chevrolet.png',
      ],
      settings: {
        dots: false,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
      userSelectedCity: '',
      userSelectedOther: '',
    }
  },
  head() {
    return {
      title: 'الصفحة الرئيسية',
    }
  },
}
</script>
<style>
.browse,
.ads {
  @apply grid items-start gap-10 lg:gap-20 mt-14 md:grid-cols-mainBodyRes lg:grid-cols-mainBody;
}
.browse__ads,
.ads__city > div {
  @apply border border-mercury;
}
.browse__categories {
  @apply font-heavy text-lgx1 h-full  grid grid-cols-1 items-end;
}
.browse__categories,
.ads__city,
.ads__content h2 {
  @apply text-center md:text-start;
}
.banar {
  @apply mt-10 relative;
  max-height: 14rem;
}
.browse__ads__head {
  @apply relative;
}
.browse__ads__head__content,
.browse__categories__banar__content {
  @apply absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center;
}

.browse__categories__banar__content h4 {
  @apply text-white text-lg font-heavy mb-5;
}
.browse__ads__head__content h3 {
  @apply text-white mb-3;
}
.browse__ads__head__content p,
.browse__categories__banar__content p {
  @apply text-link text-md font-medium;
}

/* CARS */
.browse__ads__cars {
  @apply grid grid-cols-3 gap-3 mx-auto my-14;
  width: 95%;
}
.browse__ads__cars img {
  transform: scale(0.6);
}
@media only screen and (min-width: 37.5em) {
  .browse__ads__cars {
    width: 27.6rem;
  }
}
.browse__ads__cars > div {
  @apply flex justify-center items-center;
  height: 8.8rem;
}

/* CATEGORIES */
.browse__categories__content {
  @apply mt-20 grid grid-cols-2  lg:grid-cols-4 gap-7;
}
.browse__categories__content__link {
  @apply border border-mercury flex flex-col items-center justify-center hover:bg-mountain transition-colors duration-300;
  height: 17.8rem;
}
.browse__categories__content__link:hover p {
  @apply text-white;
}
.browse__categories__content__link svg {
  @apply transition duration-300 text-royal fill-current;
}
.browse__categories__content__link:hover svg {
  @apply text-white fill-current;
}
.browse__categories__content__link svg {
  width: 7rem;
  height: 5rem;
}
.browse__categories__content__link:last-of-type {
  @apply bg-mountain;
}
.browse__categories__content__link:last-of-type p {
  @apply text-white mt-8;
}
.browse__categories__content__link p {
  @apply text-md font-extrabold mt-5 transition-colors duration-300;
}
.browse__categories__content__link figure {
  @apply bg-selago font-bold text-md mt-4 text-royal flex justify-center items-center;
  width: 7.1rem;
  height: 3.5rem;
}

/* ADS */
.ads {
  @apply mt-32;
}
.ads__content {
  @apply w-full overflow-hidden flex flex-col h-full;
}
.ads__content__slider {
  @apply mt-16 mb-5 px-2;
}
.ads__content__slider .slide {
  direction: rtl;
}
.ads__city > div {
  @apply px-10 mt-16;
}
.ads__city .ads__city__content a {
  @apply flex items-center justify-between text-md py-7;
}
.ads__city .ads__city__content svg {
  @apply text-silver fill-current;
}
.ads__city a:not(:last-of-type) {
  @apply border-b border-mercury;
}
.ads__city a:last-of-type {
  @apply text-md text-mountain justify-center font-extrabold;
}
.ads__city a:last-of-type svg {
  @apply mie-3;
  width: 2.4rem;
  height: 2.4rem;
}
.ads__city a svg {
  transform: rotate(90deg);
}
.ads__city a figure {
  @apply text-royal font-bold;
}
.ads .select__content {
  @apply relative;
}
.ads__city > * {
  @apply w-full;
}
.ads__content .slide {
  @apply mb-40;
}
.ads__content .slide {
  height: auto;
}
@media only screen and (min-width: 34.375em) {
  .ads__content .ads__content__image {
    max-height: 18rem;
  }
}
.ads__content .slide figure {
  @apply bg-selago flex items-center justify-center text-sm text-royal my-5;
  width: 10rem;
  height: 3.5rem;
}
.ads__content .slide p {
  @apply text-mdx1 font-bold;
}
.ads__content .slide svg {
  width: 1.7rem;
  height: 1.7rem;
}
.ads__content .ads__content__other-info {
  @apply mt-5 justify-between;
}
.ads__content .ads__content__other-info {
  @apply text-xs text-silver;
}
.ads__content .ads__content__other-info,
.ads__content .ads__content__other-info > div {
  @apply flex items-center;
}
.ads__content .ads__content__image {
  @apply relative overflow-hidden;
}
.ads__content .ads__content__image::after {
  content: '';
  @apply top-0 left-0 right-0 bottom-0 absolute bg-gradient-to-t  from-transparent to-royal;
}
.ads__content .slick-slide {
  @apply pis-5;
}
.ads__banar {
  @apply mt-auto;
}
.ads__banar__content {
  @apply absolute top-0 left-0 flex items-center justify-center w-full h-full;
}
.ads__banar__content h4 {
  @apply font-heavy text-lg text-white;
}
.ads__banar__content a {
  @apply text-white bg-mountain transition-colors duration-300 hover:bg-opacity-90 mis-10;
  width: 14.5rem;
  height: 5rem;
}
</style>
