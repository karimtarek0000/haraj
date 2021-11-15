<template>
  <div class="select">
    <!-- BUTTON -->
    <button
      type="button"
      :class="['select__btn', { 'select__btn--anim': status }]"
      @click="status = !status"
    >
      <span class="text-md" v-text="data.title" />
      <GSvg
        class="mis-7"
        style="width: 12px; height: 7px"
        name-icon="arrow-down"
      />
    </button>
    <!-- CONTENT -->
    <div :class="['select__content', { 'select__content--anim': status }]">
      <div>
        <nuxt-link
          v-for="content in data.content"
          :key="content.link"
          :to="content.link"
          class="block text-sm"
          >{{ content.name }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      status: false,
    }
  },
}
</script>

<style>
.select {
  @apply relative inline-block;
}
.select__content {
  @apply mt-3 text-md  bg-opacity-95 overflow-hidden absolute left-0 bottom-auto w-full;
  z-index: 10;
  max-height: 0;
  transition: max-height 0.6s linear;
}
.select__btn {
  @apply flex items-center justify-between h-full w-full;
}
.select__btn svg {
  @apply transition-transform duration-300;
}
.select__btn--anim svg {
  transform: rotate(180deg);
}
.select__content--anim {
  max-height: 500px;
}
</style>
