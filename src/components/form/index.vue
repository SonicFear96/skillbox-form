<template>
  <form action>
    <div class="form__wrapper">
      <div class="form__pay">
        <h3 class="form__title h3">Выберите вариант оплаты</h3>
        <div class="form__card-list">
          <cardPayment
            v-for="item in payment"
            :data="item"
            :key="item.id"
            :isActive="activePaymentCard.id === item.id"
            @click="checkActivePaymentCard(item)"
          />
        </div>
      </div>
      <div class="form__personal">
        <h3 class="form__title h3">Заполните контактные данные</h3>
        <div class="form__field-list">
          <vField
            class="form__field form__field--name"
            :value="''"
            v-model="form.name"
          >
            Имя
          </vField>
          <vField
            class="form__field form__field--phone"
            :value="''"
            v-model="form.phone"
          >
            Телефон
          </vField>
          <vField
            class="form__field form__field--mail"
            :value="''"
            v-model="form.email"
          >
            Электронная почта
          </vField>
        </div>
        <vButton class="form__button"> Отправить </vButton>
        <p class="form__security">
          <span class="form__security-text">
            Нажимая на кнопку, я соглашаюсь на
            <a class="form__security-link" href="#">
              обработку персональных данных
            </a>
            и&nbsp;
            <a class="form__security-link" href="#">
              с&nbsp;правилами пользования Платформой
            </a>
          </span>
        </p>
      </div>
    </div>
  </form>
</template>

<script>
import vButton from "@/components/common/button";
import vField from "@/components/common/field";
import cardPayment from "@/components/cards/payment";
export default {
  name: "form-component",
  components: {
    vButton,
    vField,
    cardPayment,
  },
  props: {
    payment: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
      },
      activePaymentCard: {},
    };
  },
  methods: {
    checkActivePaymentCard(data) {
      this.activePaymentCard = data;
    },
  },
  mounted() {
    this.activePaymentCard = this.payment[0];
  },
};
</script>

<style lang="scss">
@import "./_index.scss";
</style>
