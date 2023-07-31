<template>
  <div id="app">
    <div class="regular">regular</div>
    <div class="medium">medium</div>
    <div class="semiBold">semiBold BOLD bold</div>
    <div class="bold">bold BOLD bold</div>
    <div class="ui">
      <vButton> Отправить </vButton>
    </div>
    <div class="ui">
      <vButton :disabled="true"> Отправить </vButton>
    </div>
    <div class="ui">
      <vField :error="true">label</vField>
    </div>
  </div>
</template>

<script>
import vButton from "@/components/common/button";
import vField from "@/components/common/field";
export default {
  name: "App",
  components: {
    vButton,
    vField,
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
  .ui {
    margin-top: 40px;
  }
}
</style>
