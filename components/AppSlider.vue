<template>
  <VueSlickCarousel v-bind="settings">
    <div>
      <img src="~/assets/images/slider/slider.webp" alt="" />
    </div>
    <div>
      <img src="~/assets/images/slider/slider.webp" alt="" />
    </div>
    <div>
      <img src="~/assets/images/slider/slider.webp" alt="" />
    </div>
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
        fade: true,
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
