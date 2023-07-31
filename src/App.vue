<template>
  <div id="app">
    <div class="regular">regular</div>
    <div class="medium">medium</div>
    <div class="semiBold">semiBold BOLD bold</div>
    <div class="bold">bold BOLD bold</div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    //
  },
};
</script>

<style lang="scss">
#app {
  .regular {
    font-family: "GraphikRegular";
  }
  .medium {
    font-family: "GraphikMedium";
  }
  .semiBold {
    font-family: "GraphikSemiBold";
  }
  .bold {
    font-family: "GraphikBold";
  }
}
</style>
