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
            type="text"
            v-model="form.name"
            required
            :error="invalidNameMessage"
          >
            Имя
          </vField>
          <vField
            class="form__field form__field--phone"
            :value="''"
            type="tel"
            v-model="form.phone"
            required
            :error="invalidPhoneMessage"
          >
            Телефон
          </vField>
          <vField
            class="form__field form__field--mail"
            :value="''"
            type="email"
            v-model="form.email"
            :error="invalidEmailMessage"
            required
          >
            Электронная почта
          </vField>
        </div>
        <vButton class="form__button" @click="checkValidateForm()">
          Отправить
        </vButton>
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
import { email, required, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

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
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      form: {
        name: { required },
        email: { required, email },
        phone: { required, minLength: minLength(10) },
      },
    };
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
      },
      activePaymentCard: {},
      invalidNameMessage: false,
      invalidPhoneMessage: false,
      invalidEmailMessage: false,
    };
  },
  methods: {
    checkActivePaymentCard(data) {
      this.activePaymentCard = data;
    },
    validateName() {
      if (this.v$.form.name.required.$invalid) {
        this.invalidNameMessage = true;
      } else {
        this.invalidNameMessage = false;
      }
    },
    validatePhone() {
      if (
        this.v$.form.phone.required.$invalid ||
        this.v$.form.phone.minLength.$invalid
      ) {
        this.invalidPhoneMessage = true;
      } else {
        this.invalidPhoneMessage = false;
      }
    },
    validateEmail() {
      if (
        this.v$.form.email.required.$invalid ||
        this.v$.form.email.email.$invalid
      ) {
        this.invalidEmailMessage = true;
      } else {
        this.invalidEmailMessage = false;
      }
    },
    checkValidateForm() {
      this.validateName();
      this.validatePhone();
      this.validateEmail();
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
