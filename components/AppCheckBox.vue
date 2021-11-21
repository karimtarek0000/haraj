<template>
  <div class="checkbox">
    <div v-for="cur in listCheckBox" :key="cur.value">
      <input
        :id="cur.value"
        v-model="checked"
        :value="cur.value"
        :name="cur.name"
        class="checkbox__input"
        type="checkbox"
      />
      <label :for="cur.value" class="checkbox__label">
        <span class="checkbox__label__checkbox"></span>
        <slot>
          <span class="checkbox__label__text" v-text="cur.value" />
        </slot>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCheckBox',
  props: {
    getChecked: {
      type: Array,
      required: true,
    },
    listCheckBox: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      checked: this.getChecked,
    }
  },
  watch: {
    checked(vnew) {
      this.$emit('changeChecked', vnew)
    },
  },
}
</script>

<style>
.checkbox__input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  display: none;
}
.checkbox__label {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}
.checkbox__label__text {
  margin: 0 1rem;
}
.checkbox__label__checkbox {
  position: relative;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.checkbox__label__checkbox::after {
  content: '';
  position: absolute;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' d='M0 0h18v18H0Z'/%3E%3Cpath fill='%23FFF' d='M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4Z'/%3E%3C/svg%3E");
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  display: none;
}

.checkbox__input:checked + .checkbox__label .checkbox__label__checkbox::after {
  display: block;
}
</style>
