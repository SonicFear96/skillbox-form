<template>
  <button
    class="button"
    :class="[classList, { 'button-icon': $slots['icon-default'] }]"
    role="button"
    :type="native"
    @click="click"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  >
    <slot></slot>
    <span v-if="$slots['icon-default']" class="btn__icon">
      <slot name="icon-default"></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "button-component",
  props: {
    type: {
      type: String, // default
      default: "default",
    },
    native: {
      type: String,
      default: "button", // button, submit, confirm
    },
    target: {
      type: String,
      default: "_blank", // _blank, _self
    },
  },
  computed: {
    classList() {
      return `button-type-${this.type}`;
    },
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss">
@import "./_index.scss";
</style>
