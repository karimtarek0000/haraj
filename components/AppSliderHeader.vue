<template>
  <VueSlickCarousel v-bind="settings">
    <!-- START SLIDE -->
    <div class="relative slide">
      <!-- IMAGE -->
      <div class="slide__image">
        <img
          class="adj-image"
          src="~/assets/images/slider/slider.webp"
          alt=""
        />
      </div>
      <!-- CONTENT -->
      <div class="slide__content">
        <div class="mt-auto">
          <h2 role="title">ابحث عن سيارتك على كيفك</h2>
          <p role="discription">الاف السيارات في كل الأقسام وبكل الانواع</p>
          <AppGoTo
            v-bind="{ title: 'تصفح الاعلانات', link: '/' }"
            class="slide__content__btn"
          />
        </div>
        <figure role="site-name" class="slide__content__logo">
          حراج السعودية
        </figure>
      </div>
    </div>
    <!-- END SLIDE -->
    <!-- START SLIDE -->
    <div class="relative slide">
      <!-- IMAGE -->
      <div class="slide__image">
        <img
          class="adj-image"
          src="~/assets/images/slider/slider.webp"
          alt=""
        />
      </div>
      <!-- CONTENT -->
      <div class="slide__content">
        <div class="mt-auto">
          <h2 role="title">ابحث عن سيارتك على كيفك</h2>
          <p role="discription">الاف السيارات في كل الأقسام وبكل الانواع</p>
          <AppGoTo
            v-bind="{ title: 'تصفح الاعلانات', link: '/' }"
            class="slide__content__btn"
          />
        </div>
        <figure role="site-name" class="slide__content__logo">
          حراج السعودية
        </figure>
      </div>
    </div>
    <!-- END SLIDE -->
    <!-- START SLIDE -->
    <div class="relative slide">
      <!-- IMAGE -->
      <div class="slide__image">
        <img
          class="adj-image"
          src="~/assets/images/slider/slider.webp"
          alt=""
        />
      </div>
      <!-- CONTENT -->
      <div class="slide__content">
        <div class="mt-auto">
          <h2 role="title">ابحث عن سيارتك على كيفك</h2>
          <p role="discription">الاف السيارات في كل الأقسام وبكل الانواع</p>
          <AppGoTo
            v-bind="{ title: 'تصفح الاعلانات', link: '/' }"
            class="slide__content__btn"
          />
        </div>
        <figure role="site-name" class="slide__content__logo">
          حراج السعودية
        </figure>
      </div>
    </div>
    <!-- END SLIDE -->
  </VueSlickCarousel>
</template>

<script>
export default {
  name: 'AppSlider',
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        rtl: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        arrows: false,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
      },
    }
  },
}
</script>

<style>
.slide {
  height: 500px;
}
.slide__image {
  @apply absolute top-0 left-0 w-full h-full;
}
.slide__content {
  @apply relative z-10 flex flex-col justify-center items-start h-full text-white mis-3 lg:mis-28;
  direction: rtl;
}
.slide__content h2 {
  @apply w-9/12 text-xl font-heavy;
}
.slide__content p {
  @apply my-5 text-md font-medium text-link;
}
.slide__content__btn {
  @apply mt-12 transition duration-500  mie-auto bg-mountain hover:bg-opacity-80;
  width: 14rem;
  height: 4.5rem;
}
.slide__content__logo {
  @apply mt-auto mb-2 text-md text-opacity-75 font-heavy text-link;
}

.slick-dots {
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.slick-dots li {
  color: transparent;
  width: 4rem;
  height: 3px;
  margin-top: 3rem;
  cursor: pointer;
  @apply mis-5 bg-mercury;
}
li.slick-active {
  @apply bg-mountain;
}
</style>
