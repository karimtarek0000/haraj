<template>
  <main class="select-1">
    <!-- START SLIDER -->
    <AppSliderHeader class="container" />
    <!-- END SLIDER -->

    <!-- START SORT AND SEARCH -->
    <AppSortAndSearch class="container">
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
    <section class="container relative browse shape__2">
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
    <section class="container relative ads shape__1">
      <!-- ADS CITY -->
      <div class="sidebar-ads">
        <h2>إعلانات المدن</h2>
        <!-- CONTENT -->
        <div class="sidebar-ads__content">
          <!-- INDEVISUAL ADS -->
          <nuxt-link to="/">
            <div class="flex items-center">
              <p>الرياض</p>
              <figure class="mis-7">(180)</figure>
            </div>
            <GSvg style="width: 12px; height: 7px" name-icon="arrow-down" />
          </nuxt-link>
          <nuxt-link to="/">
            <div class="flex items-center">
              <p>الرياض</p>
              <figure class="mis-7">(180)</figure>
            </div>
            <GSvg style="width: 12px; height: 7px" name-icon="arrow-down" />
          </nuxt-link>
          <nuxt-link to="/">
            <div class="flex items-center">
              <p>الرياض</p>
              <figure class="mis-7">(180)</figure>
            </div>
            <GSvg style="width: 12px; height: 7px" name-icon="arrow-down" />
          </nuxt-link>
          <nuxt-link to="/">
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
            <div class="card__ads">
              <!-- IMAGE -->
              <div class="card__ads__image">
                <img class="adj-image" src="~/assets/images/test.jpg" alt="" />
              </div>
              <!-- OTHER INFO -->
              <div>
                <!-- CITY AND DISCRIPTION -->
                <div class="w-full card__ads__content">
                  <!-- CITY -->
                  <figure>الرياض</figure>
                  <!-- DISCRIPTION -->
                  <p>سيارة رانج روفر 2021 للبيع في منطقة جدة {{ i }}</p>
                </div>
                <!-- TIMES AND AUTHOR -->
                <div class="card__ads__other-info">
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
              <!-- FAVORIT -->
              <button class="card__ads__favorit">
                <GSvg name-icon="heart" />
              </button>
            </div>
          </div>
        </VueSlickCarousel>
        <!-- ADD NEW ADS -->
        <div class="ads__banar banar">
          <AppAddImage class="adj-image" src="banars/3.jpg" />
          <div class="ads__banar__content">
            <h4>أضف اعلانك الأن</h4>
            <AppGoTo
              class="btn btn-w-1 mis-10 bg-mountain"
              v-bind="{ title: 'اضف اعلان', link: '/' }"
            />
          </div>
        </div>
      </div>
      <!-- END CATEGORIES -->
    </section>
    <!-- END SECTION ADS -->

    <!-- START ALL ADS -->
    <section class="container relative all-ads shape__1">
      <!-- ADS BUILDING -->
      <div class="sidebar-ads">
        <h2>حراج العقارات</h2>
        <!-- CONTENT -->
        <div class="sidebar-ads__content">
          <!-- INDEVISUAL ADS -->
          <nuxt-link v-for="i in 9" :key="i" to="/">
            <div class="flex items-center">
              <p>فلل للبيع</p>
              <figure class="mis-7">(180)</figure>
            </div>
            <GSvg style="width: 12px; height: 7px" name-icon="arrow-down" />
          </nuxt-link>
          <!-- ALL ADS -->
          <nuxt-link to="/">
            <GSvg name-icon="all" />
            <p>كل إعلانات العقارات</p>
          </nuxt-link>
        </div>
      </div>
      <!--  -->
      <div class="flex flex-col">
        <!-- ALL ADS BAR -->
        <div class="all-ads__bar">
          <h2 class="mb-7 sm:mb-0">كل الإعلانات</h2>
          <!--  -->
          <div class="all-ads__bar__actions">
            <!-- CHANGE VIEW CARD -->
            <button
              class="bg-mountain all-ads__bar__actions__btn"
              @click="changeViewCards = !changeViewCards"
            >
              <GSvg :name-icon="changeViewCards ? 'row' : 'grid'" />
            </button>
            <!--  -->
            <button class="mx-5 bg-royal all-ads__bar__actions__btn">
              <GSvg name-icon="send" />
            </button>
            <!-- SELECT CITY -->
            <AppSelect
              style="min-width: 20rem; height: 4.5rem"
              v-bind="{ data: s, type: 'btn' }"
            />
          </div>
        </div>
        <!-- ALL ADS WRAPPER -->
        <div
          :class="[
            'mb-8 all-ads__wrapper mt-14',
            { 'grid sm:grid-cols-2 gap-x-3 gap-y-7': changeViewCards },
          ]"
        >
          <div
            v-for="i in 7"
            :key="i"
            :class="['card__ads', { 'card__ads--row': !changeViewCards }]"
          >
            <!-- IMAGE -->
            <div class="card__ads__image">
              <img class="adj-image" src="~/assets/images/test.jpg" alt="" />
            </div>
            <!-- OTHER INFO -->
            <div>
              <!-- CITY AND DISCRIPTION -->
              <div class="card__ads__content">
                <!-- CITY -->
                <figure>الرياض</figure>
                <!-- DISCRIPTION -->
                <p>سيارة رانج روفر 2021 للبيع في منطقة جدة للبيع الأن</p>
              </div>
              <!-- TIMES AND AUTHOR -->
              <div class="card__ads__other-info">
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
            <!-- FAVORIT -->
            <button class="card__ads__favorit">
              <GSvg name-icon="heart" />
            </button>
          </div>
        </div>
        <!-- PAGINATION -->
        <AppPagination
          :current-page="currentPage"
          :total="104"
          @changePage="currentPage = $event"
        />
      </div>
      <!-- END CATEGORIES -->
    </section>
    <!-- END ALL ADS -->

    <!-- START DOWNLOAD APP -->
    <section class="download-app">
      <!--  -->
      <div class="download-app__image">
        <AppAddImage
          class="adj-image"
          src="banars/4.jpg"
          alt="حمل-التطبيق-الان"
        />
      </div>
      <!--  -->
      <div class="container download-app__content">
        <h4>حمل التطبيق الأن</h4>
        <p>استمتع بتجربة مميزة وقريبة منك .. حمل تطبيق الجوال على جوالك الأن</p>
        <div class="download-app__content__links">
          <a href="#">
            <img
              src="~/assets/icons/google.svg"
              alt="تحميل-التطبيق-من-جوجل-بلاي"
            />
          </a>
          <a href="#">
            <img
              src="~/assets/icons/apple.svg"
              alt="تحميل-التطبيق-من-ابل-ستور"
            />
          </a>
        </div>
      </div>
    </section>
    <!-- END DOWNLOAD APP -->

    <!-- START STEPS -->
    <section class="container steps">
      <!-- STEP 1 -->
      <div class="steps__step">
        <GSvg name-icon="pin" />
        <h5>سجل أولا</h5>
        <p>قم بانشاء حسابك أولا على حراج السعودية</p>
      </div>
      <!-- NEXT -->
      <div class="steps__next">
        <GSvg name-icon="trans" />
      </div>
      <!-- STEP 2 -->
      <div class="steps__step">
        <GSvg name-icon="add" class="fill-current text-royal" />
        <h5>سجل أولا</h5>
        <p>قم بانشاء حسابك أولا على حراج السعودية</p>
      </div>
      <!-- NEXT -->
      <div class="steps__next">
        <GSvg name-icon="trans" />
      </div>
      <!-- STEP 3-->
      <div class="steps__step">
        <GSvg name-icon="touch" />
        <h5>سجل أولا</h5>
        <p>قم بانشاء حسابك أولا على حراج السعودية</p>
      </div>
    </section>
    <!-- END STEPS -->
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
      s: {
        title: 'كل المدن',
        content: [
          {
            name: 'الدمام',
          },
          {
            name: 'الرياض',
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
        rtl: true,
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
      currentPage: 1,
      userSelectedCity: '',
      userSelectedOther: '',
      //
      changeViewCards: false,
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
.all-ads,
.ads {
  @apply grid items-start gap-10 lg:gap-20 mt-14 md:grid-cols-mainBodyRes lg:grid-cols-mainBody;
}
.browse__categories {
  @apply font-heavy text-lgx1 h-full  grid grid-cols-1 items-end;
}
.browse__categories,
.sidebar-ads,
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
  @apply flex flex-col items-center justify-center hover:bg-mountain transition-colors duration-300;
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
.sidebar-ads > div {
  @apply px-10 mt-16;
}
.sidebar-ads .sidebar-ads__content a {
  @apply flex items-center justify-between text-md py-7;
}
.sidebar-ads .sidebar-ads__content svg {
  @apply text-silver fill-current;
}
.sidebar-ads a:not(:last-of-type) {
  @apply border-b border-mercury;
}
.sidebar-ads a:last-of-type {
  @apply text-md text-mountain justify-center font-extrabold;
}
.sidebar-ads a:last-of-type svg {
  @apply mie-3;
  width: 2.4rem;
  height: 2.4rem;
}
.sidebar-ads a svg {
  transform: rotate(90deg);
}
.sidebar-ads a figure {
  @apply text-royal font-bold;
}
.sidebar-ads > * {
  @apply w-full;
}

.ads .select__content {
  @apply relative;
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
  .ads__content .slick-slide {
    @apply pis-5;
  }
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

/* ADS BAR */
.all-ads__bar .all-ads__bar__actions,
.all-ads__bar .all-ads__bar__actions__btn {
  @apply flex items-center justify-center;
}
.all-ads__bar {
  @apply flex sm:flex-row flex-col items-center justify-between;
}
.all-ads__bar .all-ads__bar__actions .all-ads__bar__actions__btn {
  width: 4.5rem;
  height: 4.5rem;
}
.all-ads__bar .all-ads__bar__actions .all-ads__bar__actions__btn svg {
  width: 2rem;
  height: 2rem;
}
.all-ads__bar__actions .select__btn {
  @apply bg-seashell border-0;
}

/* CARD ADS */
.card__ads--row {
  @apply flex items-center mb-5 gap-x-8 overflow-hidden;
}
.card__ads--row .card__ads__image::after {
  display: none;
}
.card__ads .card__ads__favorit {
  @apply absolute top-5 left-5;
}
.card__ads .card__ads__favorit svg {
  width: 2rem;
  height: 2rem;
  fill: white;
}
.card__ads--row .card__ads__favorit svg {
  @apply text-royal fill-current;
}
.card__ads {
  @apply relative;
}
.card__ads--row .card__ads__image {
  width: 20rem;
  height: 17.8rem;
}
.card__ads figure {
  @apply bg-selago flex items-center justify-center text-sm text-royal my-5;
  width: 10rem;
  height: 3.5rem;
}
.card__ads p {
  @apply text-mdx1 font-bold;
}
.card__ads svg {
  width: 1.7rem;
  height: 1.7rem;
}
.card__ads .card__ads__other-info {
  @apply text-xs mt-8 text-silver justify-start;
}
.card__ads .card__ads__other-info,
.card__ads .card__ads__other-info > div {
  @apply flex items-center;
}
.card__ads .card__ads__other-info > div:nth-child(1) {
  @apply mie-7;
}
.card__ads .card__ads__image {
  @apply relative overflow-hidden;
}
.card__ads .card__ads__image::after {
  content: '';
  @apply top-0 left-0 right-0 bottom-0 absolute bg-gradient-to-t  from-transparent to-royal;
}

/* STEPS */
.steps {
  @apply grid md:grid-flow-col py-10 md:py-20;
}
.steps__step {
  @apply flex flex-col items-center mb-12 md:mb-0;
}
.steps__step svg {
  width: 6rem;
  height: 6rem;
}
.steps__step h5 {
  @apply text-lg my-5;
}
.steps__step p {
  @apply text-md text-silver text-center px-8;
}
.steps .steps__next {
  @apply hidden md:block;
  width: 6.4rem;
  height: 6rem;
}
.steps .steps__next svg {
  @apply max-w-full;
}

/* DOWNLOAD APP */
.download-app {
  @apply relative mt-9;
}
.download-app__image {
  height: 26.2rem;
  max-height: 26.2rem;
}
.download-app__content {
  @apply absolute top-0 flex flex-col justify-center h-full  inset-inline-0;
}
.download-app__content h4 {
  @apply text-lgx1 font-heavy text-royal;
}
.download-app__content p {
  @apply mt-5 pie-20  font-medium text-black text-sm md:text-md text-opacity-70;
}
.download-app__content__links {
  @apply flex items-center;
}
.download-app__content__links a {
  @apply bg-black flex justify-center p-4 items-center mt-10 hover:bg-opacity-80 transition-colors duration-300;
  width: 15.1rem;
  height: 5rem;
}
.download-app__content__links a:first-of-type {
  @apply mie-5;
}
</style>
