(function(){var e={3769:function(e,t,a){"use strict";var i=a(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("section",{staticClass:"section section--form"},[t("div",{staticClass:"order container"},[t("div",{staticClass:"order-info order__item"},[e._m(0),t("div",{staticClass:"order-info__bottom"},[t("h3",{staticClass:"order-info__title h3"},[e._v("Итоговая стоимость")]),t("div",{staticClass:"order-info__price"},[e._m(1),e._m(2),t("p",{staticClass:"order-info__payment-text"},[e._v(" Рассрочка на NN месяцев ")]),t("div",{staticClass:"order-info__sale-icon"},[t("iconSale"),t("span",{staticClass:"order-info__sale-percent"},[e._v("–00%")])],1)])])]),t("div",{staticClass:"order-form order__item"},[t("vForm",{attrs:{payment:e.payment}})],1)])])])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"order-info__header"},[t("h2",{staticClass:"order-info__title h2"},[e._v(" Заполните форму, "),t("br"),e._v("чтобы оформить заказ ")]),t("p",{staticClass:"order-info__text"},[e._v(" Забронируйте курсы со скидкой, а мы перезвоним, проконсультируем и оформим заказ. ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"price-old order-info__price-old"},[t("span",{staticClass:"price-old__value"},[e._v("000 000")]),t("span",{staticClass:"price-old__valuta"},[e._v(" ₽ ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"price-current order-info__price-current"},[t("span",{staticClass:"price-current__value"},[e._v(" 0 000 ")]),t("sup",{staticClass:"price-current__valuta"},[e._v("₽/мес.")])])}],l=function(){var e=this,t=e._self._c;return t("svg",{attrs:{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M23.3447 0.568563C23.7207 0.242352 24.2793 0.242351 24.6553 0.568563L28.8503 4.20809C29.0823 4.40937 29.3939 4.49288 29.6955 4.43456L35.1482 3.38012C35.6369 3.28561 36.1207 3.56494 36.2833 4.03545L38.0964 9.28485C38.1967 9.57516 38.4248 9.8033 38.7152 9.90357L43.9646 11.7167C44.4351 11.8793 44.7144 12.3631 44.6199 12.8518L43.5654 18.3045C43.5071 18.6061 43.5906 18.9177 43.7919 19.1497L47.4314 23.3447C47.7576 23.7207 47.7576 24.2793 47.4314 24.6553L43.7919 28.8503C43.5906 29.0823 43.5071 29.3939 43.5654 29.6955L44.6199 35.1482C44.7144 35.6369 44.4351 36.1207 43.9646 36.2833L38.7152 38.0964C38.4248 38.1967 38.1967 38.4248 38.0964 38.7152L36.2833 43.9646C36.1207 44.4351 35.6369 44.7144 35.1482 44.6199L29.6955 43.5654C29.3939 43.5071 29.0823 43.5906 28.8503 43.7919L24.6553 47.4314C24.2793 47.7576 23.7207 47.7576 23.3447 47.4314L19.1497 43.7919C18.9177 43.5906 18.6061 43.5071 18.3045 43.5654L12.8518 44.6199C12.3631 44.7144 11.8793 44.4351 11.7167 43.9646L9.90357 38.7152C9.8033 38.4248 9.57517 38.1967 9.28485 38.0964L4.03545 36.2833C3.56494 36.1207 3.28561 35.6369 3.38012 35.1482L4.43456 29.6955C4.49288 29.3939 4.40937 29.0823 4.20809 28.8503L0.568563 24.6553C0.242352 24.2793 0.242351 23.7207 0.568563 23.3447L4.20809 19.1497C4.40937 18.9177 4.49288 18.6061 4.43456 18.3045L3.38012 12.8518C3.28561 12.3631 3.56494 11.8793 4.03545 11.7167L9.28485 9.90357C9.57516 9.8033 9.8033 9.57517 9.90357 9.28485L11.7167 4.03545C11.8793 3.56494 12.3631 3.28561 12.8518 3.38012L18.3045 4.43456C18.6061 4.49288 18.9177 4.40937 19.1497 4.20809L23.3447 0.568563Z",fill:"currentColor"}})])},s=[],o=a(1001),c={},u=(0,o.Z)(c,l,s,!1,null,null,null),d=u.exports,f=function(){var e=this,t=e._self._c;return t("form",{attrs:{action:""}},[t("div",{staticClass:"form__wrapper"},[t("div",{staticClass:"form__pay"},[t("h3",{staticClass:"form__title h3"},[e._v("Выберите вариант оплаты")]),t("div",{staticClass:"form__card-list"},e._l(e.payment,(function(a){return t("cardPayment",{key:a.id,attrs:{data:a,isActive:e.activePaymentCard.id===a.id},on:{click:function(t){return e.checkActivePaymentCard(a)}}})})),1)]),t("div",{staticClass:"form__personal"},[t("h3",{staticClass:"form__title h3"},[e._v("Заполните контактные данные")]),t("div",{staticClass:"form__field-list"},[t("vField",{staticClass:"form__field form__field--name",attrs:{value:"",type:"text",required:"",error:e.invalidNameMessage},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}},[e._v(" Имя ")]),t("vField",{staticClass:"form__field form__field--phone",attrs:{value:"",type:"tel",required:"",error:e.invalidPhoneMessage},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}},[e._v(" Телефон ")]),t("vField",{staticClass:"form__field form__field--mail",attrs:{value:"",type:"email",error:e.invalidEmailMessage,required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}},[e._v(" Электронная почта ")])],1),t("vButton",{staticClass:"form__button",on:{click:function(t){return e.checkValidateForm()}}},[e._v(" Отправить ")]),e._m(0)],1)])])},m=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"form__security"},[t("span",{staticClass:"form__security-text"},[e._v(" Нажимая на кнопку, я соглашаюсь на "),t("a",{staticClass:"form__security-link",attrs:{href:"#"}},[e._v(" обработку персональных данных ")]),e._v(" и  "),t("a",{staticClass:"form__security-link",attrs:{href:"#"}},[e._v(" с правилами пользования Платформой ")])])])}],v=function(){var e=this,t=e._self._c;return t("button",{staticClass:"button",class:[e.classList,{"button-icon":e.$slots["icon-default"]}],attrs:{role:"button",type:e.native},on:{click:e.click,focus:function(t){return e.$emit("focus")},blur:function(t){return e.$emit("blur")}}},[e._t("default"),e.$slots["icon-default"]?t("span",{staticClass:"btn__icon"},[e._t("icon-default")],2):e._e()],2)},p=[],_={name:"button-component",props:{type:{type:String,default:"default"},native:{type:String,default:"button"},target:{type:String,default:"_blank"}},computed:{classList(){return`button-type-${this.type}`}},methods:{click(e){this.$emit("click",e)}}},h=_,g=(0,o.Z)(h,v,p,!1,null,null,null),C=g.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"field",class:{"field--error":e.error,"field--filled":e.value||e.localValue}},["checkbox"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],ref:"input",staticClass:"field-input",attrs:{id:e.localId,placeholder:e.placeholder,disabled:e.disabled,type:"checkbox"},domProps:{value:e.localValue,checked:Array.isArray(e.localValue)?e._i(e.localValue,e.localValue)>-1:e.localValue},on:{input:function(t){return e.input(t.target.value)},change:[function(t){var a=e.localValue,i=t.target,r=!!i.checked;if(Array.isArray(a)){var n=e.localValue,l=e._i(a,n);i.checked?l<0&&(e.localValue=a.concat([n])):l>-1&&(e.localValue=a.slice(0,l).concat(a.slice(l+1)))}else e.localValue=r},function(t){return e.change(t.target.value)}]}}):"radio"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],ref:"input",staticClass:"field-input",attrs:{id:e.localId,placeholder:e.placeholder,disabled:e.disabled,type:"radio"},domProps:{value:e.localValue,checked:e._q(e.localValue,e.localValue)},on:{input:function(t){return e.input(t.target.value)},change:[function(t){e.localValue=e.localValue},function(t){return e.change(t.target.value)}]}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],ref:"input",staticClass:"field-input",attrs:{id:e.localId,placeholder:e.placeholder,disabled:e.disabled,type:e.type},domProps:{value:e.localValue,value:e.localValue},on:{input:[function(t){t.target.composing||(e.localValue=t.target.value)},function(t){return e.input(t.target.value)}],change:function(t){return e.change(t.target.value)}}}),e.$slots.default?t("label",{staticClass:"field-label",attrs:{for:e.localId}},[e._t("default")],2):e._e(),e.error?t("span",{staticClass:"field-error"},[e._v(e._s(e.errorText))]):e._e()])},y=[],x={name:"input-component",props:{type:{type:String,default:"text"},value:[String,Number],placeholder:String,error:[String,Boolean],disabled:Boolean},data(){return{localId:this.id,localValue:""}},computed:{errorText(){return"string"===typeof this.error?this.error:"Введено неверное значение"}},methods:{input(e){this.$emit("input",e)},change(e){this.$emit("change",e)}},mounted(){this.localId=this.localId||Math.random().toFixed(7).slice(2),this.localValue=this.value}},k=x,L=(0,o.Z)(k,b,y,!1,null,null,null),V=L.exports,$=function(){var e=this,t=e._self._c;return t("article",{staticClass:"card-payment",class:{"card-payment--active":e.isActive},on:{click:function(t){return e.$emit("click")}}},[t("span",{staticClass:"card-payment__text",domProps:{innerHTML:e._s(e.data.text)}}),t("div",{staticClass:"card-payment__icons-list"},e._l(e.data.images,(function(a){return t("img",{key:a.id,staticClass:"card-payment__icons-item",attrs:{src:e.getImage(a),alt:a.title}})})),0)])},w=[],P={name:"card-payment-component",props:{data:{type:Object,default:()=>{}},isActive:Boolean},methods:{getImage(e){return a(7802)(`./${e.image}.svg`)}}},M=P,O=(0,o.Z)(M,$,w,!1,null,null,null),N=O.exports,A=a(5420),F=a(4219),q={name:"form-component",components:{vButton:C,vField:V,cardPayment:N},props:{payment:{type:Array,default:()=>[]}},setup:()=>({v$:(0,F.Xw)()}),validations(){return{form:{name:{required:A.C1},email:{required:A.C1,email:A.Do},phone:{required:A.C1,minLength:(0,A.Ei)(10)}}}},data(){return{form:{name:"",phone:"",email:""},activePaymentCard:{},invalidNameMessage:!1,invalidPhoneMessage:!1,invalidEmailMessage:!1}},methods:{checkActivePaymentCard(e){this.activePaymentCard=e},validateName(){this.v$.form.name.required.$invalid?this.invalidNameMessage=!0:this.invalidNameMessage=!1},validatePhone(){this.v$.form.phone.required.$invalid||this.v$.form.phone.minLength.$invalid?this.invalidPhoneMessage=!0:this.invalidPhoneMessage=!1},validateEmail(){this.v$.form.email.required.$invalid||this.v$.form.email.email.$invalid?this.invalidEmailMessage=!0:this.invalidEmailMessage=!1},checkValidateForm(){this.validateName(),this.validatePhone(),this.validateEmail()}},mounted(){this.activePaymentCard=this.payment[0]}},E=q,I=(0,o.Z)(E,f,m,!1,null,null,null),S=I.exports,Z={name:"App",components:{iconSale:d,vForm:S},data(){return{payment:[{id:1,alias:"consultation",text:"Оставить заявку<br>на&nbsp;консультацию",images:[]},{id:2,alias:"sale",text:"Оплатить всю сумму со&nbsp;скидкой 7000 ₽",images:[{id:1,title:"Visa",image:"visa"},{id:2,title:"Мир",image:"mir"},{id:3,title:"Mastercard",image:"mastercard"}]},{id:3,alias:"sberbank",text:"В&nbsp;рассрочку в&nbsp;Покупай со&nbsp;Сбером",images:[{id:1,title:"Сбербанк",image:"sberbank"}]},{id:4,alias:"tinkoff",text:"В&nbsp;рассрочку<br>в&nbsp;Тинькофф",images:[{id:1,title:"Тинькофф",image:"tinkoff"}]}]}}},j=Z,T=(0,o.Z)(j,r,n,!1,null,null,null),B=T.exports;i.ZP.config.productionTip=!1,new i.ZP({render:e=>e(B)}).$mount("#app")},7802:function(e,t,a){var i={"./mastercard.svg":2136,"./mir.svg":7961,"./sale.svg":666,"./sberbank.svg":7406,"./tinkoff.svg":6978,"./visa.svg":9571};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=n,e.exports=r,r.id=7802},2136:function(e,t,a){"use strict";e.exports=a.p+"img/mastercard.b68865df.svg"},7961:function(e,t,a){"use strict";e.exports=a.p+"img/mir.2fe95f8c.svg"},666:function(e,t,a){"use strict";e.exports=a.p+"img/sale.90645fac.svg"},7406:function(e,t,a){"use strict";e.exports=a.p+"img/sberbank.22d12898.svg"},6978:function(e,t,a){"use strict";e.exports=a.p+"img/tinkoff.e420b858.svg"},9571:function(e,t,a){"use strict";e.exports=a.p+"img/visa.3576da99.svg"}},t={};function a(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,i,r,n){if(!i){var l=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],n=e[u][2];for(var s=!0,o=0;o<i.length;o++)(!1&n||l>=n)&&Object.keys(a.O).every((function(e){return a.O[e](i[o])}))?i.splice(o--,1):(s=!1,n<l&&(l=n));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[i,r,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/skillbox-form/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,n,l=i[0],s=i[1],o=i[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(o)var u=o(a)}for(t&&t(i);c<l.length;c++)n=l[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},i=self["webpackChunkskillbox_form"]=self["webpackChunkskillbox_form"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(3769)}));i=a.O(i)})();
//# sourceMappingURL=app.7e6e8c80.js.map