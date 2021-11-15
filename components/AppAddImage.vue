<template>
  <img :src="require(`~/assets/images/${src}`)" />
</template>

<script>
export default {
  name: 'AppAddImage',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
