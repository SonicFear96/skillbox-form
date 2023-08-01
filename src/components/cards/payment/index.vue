<template>
  <article
    class="card-payment"
    :class="{ 'card-payment--active': isActive }"
    @click="$emit('click')"
  >
    <span class="card-payment__text" v-html="data.text"></span>
    <div class="card-payment__icons-list">
      <img
        v-for="item in data.images"
        class="card-payment__icons-item"
        :src="getImage(item)"
        :alt="item.title"
        :key="item.id"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: "card-payment-component",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    isActive: Boolean,
  },
  methods: {
    getImage(data) {
      return require(`@/../static/icons/${data.image}.svg`);
    },
  },
};
</script>

<style lang="scss">
@import "./_index.scss";
</style>
