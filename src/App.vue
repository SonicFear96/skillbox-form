<template>
  <div id="app">
    <section class="section section--form">
      <div class="order container">
        <div class="order-info order__item">
          <div class="order-info__header">
            <h2 class="order-info__title h2">
              Заполните форму, <br />чтобы оформить заказ
            </h2>
            <p class="order-info__text">
              Забронируйте курсы со&nbsp;скидкой, а&nbsp;мы&nbsp;перезвоним,
              проконсультируем и&nbsp;оформим заказ.
            </p>
          </div>
          <div class="order-info__bottom">
            <h3 class="order-info__title h3">Итоговая стоимость</h3>
            <div class="order-info__price">
              <div class="price-old order-info__price-old">
                <span class="price-old__value">000 000</span>
                <span class="price-old__valuta"> ₽ </span>
              </div>
              <div class="price-current order-info__price-current">
                <span class="price-current__value"> 0 000 </span>
                <sup class="price-current__valuta">₽/мес.</sup>
              </div>
              <p class="order-info__payment-text">
                Рассрочка на&nbsp;NN месяцев
              </p>
              <div class="order-info__sale-icon">
                <iconSale />
              </div>
            </div>
          </div>
        </div>
        <div class="order-form order__item">
          <vForm :payment="payment" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import iconSale from "@/components/icons/sale";
import vForm from "@/components/form";
export default {
  name: "App",
  components: {
    iconSale,
    vForm,
  },
  data() {
    return {
      payment: [
        {
          id: 1,
          alias: "consultation",
          text: "Оставить заявку<br>на&nbsp;консультацию",
          images: [],
        },
        {
          id: 2,
          alias: "sale",
          text: "Оплатить всю сумму со&nbsp;скидкой 7000 ₽",
          images: [
            { id: 1, title: "Visa", image: "visa" },
            { id: 2, title: "Мир", image: "mir" },
            { id: 3, title: "Mastercard", image: "mastercard" },
          ],
        },
        {
          id: 3,
          alias: "sberbank",
          text: "В&nbsp;рассрочку в&nbsp;Покупай со Сбером",
          images: [{ id: 1, title: "Сбербанк", image: "sberbank" }],
        },
        {
          id: 4,
          alias: "tinkoff",
          text: "В&nbsp;рассрочку<br>в&nbsp;Тинькофф",
          images: [{ id: 1, title: "Тинькофф", image: "tinkoff" }],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  .section {
    &--form {
      padding: 112px 0;
      background: $accent-day-variable;
    }
  }
  .container {
    margin: 0 auto;
  }
  .order {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    max-width: 1168px;
    &__item {
      border-radius: 20px;
      background: $bg-day-main;
      height: auto;
      width: 100%;
    }
    &-info,
    &-form {
      width: 100%;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
    }
    &-info {
      &__text {
        font-family: "GraphikRegular";
        margin-top: 24px;
        font-size: 16px;
        line-height: 24px;
      }
      &__bottom {
        margin-top: auto;
      }
      &__price {
        position: relative;
        margin-top: 24px;
        padding: 20px;
        background: $bg-day-secondary;
        border-radius: 20px;
      }
      .price-old {
        font-family: "GraphikMedium";
        font-size: 16px;
        &__value {
          position: relative;
          &::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 1px;
            top: 6px;
            left: 0;
            background: $accent-day-always-black;
          }
          &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 1px;
            top: 7px;
            left: 0;
            background: $accent-day-always-white;
          }
        }
      }
      .price-current {
        display: flex;
        gap: 4px;
        font-family: "GraphikSemiBold";
        font-size: 24px;
        line-height: 32px;
        &__valuta {
          display: block;
          margin-top: 5px;
          font-size: 14px;
          font-family: "GraphikMedium";
          line-height: 18px;
        }
      }
      &__sale-icon {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      &__payment-text {
        margin-top: 4px;
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
  @include tablet {
    .order {
      &-info,
      &-form {
        padding: 34px 120px;
      }
    }
  }
  @include hovers {
    .order {
      flex-direction: row;
      &-info,
      &-form {
        padding: 40px;
      }
      &-info {
        width: calc(100% / 12 * 6);
        .price-current {
          margin-top: 16px;
          font-size: 32px;
          line-height: 40px;
          &__valuta {
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
      &-form {
        width: calc(100% / 12 * 6 + 25px);
      }
    }
  }
}
</style>
