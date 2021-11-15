<template>
  <nuxt-link :to="link" class="flex items-center justify-center text-sm">
    {{ title }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppGoTo',
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
