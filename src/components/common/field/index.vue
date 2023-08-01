<template>
  <div
    class="field"
    :class="{ 'field--error': error, 'field--filled': value || localValue }"
  >
    <input
      class="field-input"
      ref="input"
      v-model="localValue"
      :type="type"
      :value="localValue"
      :id="localId"
      :placeholder="placeholder"
      @input="input($event.target.value)"
      @change="change($event.target.value)"
      :disabled="disabled"
    />
    <label class="field-label" v-if="$slots.default" :for="localId">
      <slot />
    </label>
    <span class="field-error" v-if="error">{{ errorText }}</span>
  </div>
</template>

<script>
export default {
  name: "input-component",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: [String, Number],
    placeholder: String,
    error: [String, Boolean],
    disabled: Boolean,
  },
  data() {
    return {
      localId: this.id,
      localValue: "",
    };
  },
  computed: {
    errorText() {
      return typeof this.error === "string"
        ? this.error
        : "Введено неверное значение";
    },
  },
  methods: {
    input(value) {
      this.$emit("input", value);
    },
    change(value) {
      this.$emit("change", value);
    },
  },
  mounted() {
    this.localId = this.localId || Math.random().toFixed(7).slice(2);
    this.localValue = this.value;
  },
};
</script>

<style lang="scss">
@import "./_index.scss";
</style>
