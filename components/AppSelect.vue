<template>
  <div class="select">
    <!-- BUTTON -->
    <button
      type="button"
      :class="['select__btn', { 'select__btn--anim': status }]"
      @click.stop="status = !status"
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
      <div v-if="type === 'btn'">
        <button
          v-for="content in data.content"
          :key="content.name"
          class="select__content__action__btn"
          @click="sendSelected(content.name)"
          v-text="content.name"
        />
      </div>
      <div v-else>
        <nuxt-link
          v-for="content in data.content"
          :key="content.link"
          :to="content.link"
          class="select__content__action__link"
          v-text="content.name"
        />
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
    type: {
      type: String,
      default: 'link',
    },
  },
  data() {
    return {
      status: false,
    }
  },
  mounted() {
    document.addEventListener('click', () => {
      this.status = false
    })
  },
  methods: {
    sendSelected(selected) {
      this.$emit('userSelected', selected)
    },
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
  @apply transition-transform duration-300 text-royal fill-current;
}
.select__btn--anim svg {
  transform: rotate(180deg);
}
.select__content--anim {
  max-height: 500px;
}
.select__content__action__btn {
  @apply w-full text-sm transition-colors duration-300  text-start hover:bg-royal hover:text-white;
}
.select__content__action__link {
  @apply block text-sm transition-colors duration-300  hover:bg-royal hover:text-white;
}
</style>
