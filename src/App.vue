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
      <vButton> Отправить </vButton>
    </div>
    <div class="ui">
      <vField :value="''">label</vField>
    </div>
    <div class="ui">
      <cardPayment :data="payment[3]" />
    </div>
  </div>
</template>

<script>
import vButton from "@/components/common/button";
import vField from "@/components/common/field";
import cardPayment from "@/components/cards/payment";
export default {
  name: "App",
  components: {
    vButton,
    vField,
    cardPayment,
  },
  data() {
    return {
      payment: [
        {
          id: 1,
          alias: "consultation",
          text: "Оставить заявку<br>на консультацию",
          images: [
            { id: 1, title: "Visa", image: "visa" },
            { id: 2, title: "Мир", image: "mir" },
            { id: 3, title: "Mastercard", image: "mastercard" },
          ],
        },
        {
          id: 2,
          alias: "sale",
          text: "Оплатить всю сумму со скидкой 7000 ₽",
          images: [],
        },
        {
          id: 3,
          alias: "sberbank",
          text: "В рассрочку в Покупай со Сбером",
          images: [{ id: 1, title: "Сбербанк", image: "sberbank" }],
        },
        {
          id: 4,
          alias: "tinkoff",
          text: "В рассрочку<br>в Тинькофф",
          images: [{ id: 1, title: "Тинькофф", image: "tinkoff" }],
        },
      ],
    };
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
