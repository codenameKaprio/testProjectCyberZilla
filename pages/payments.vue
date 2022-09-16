<template lang="pug">
  main.main.container
    section.payments
      ul.payments__list
        li.payments__list__item(v-for="item in getUser" :key="item.id")
          .payments__list__item__info-block
            span {{item.name}}
            span {{item.email}}
            span {{item.phone}}
          .payments__list__item__settings-block
            button(@click="openUserModal(item)") Детали Платежа
      transition(name="modal" )
        ModalPaymentsInfo(v-if="user" :users="user" :closeModal="closeUserModal")


</template>

<script>

import {mapActions, mapGetters} from 'vuex';
import ModalPaymentsInfo from "~/components/Payments/ModalPaymentsInfo";

export default {
  name: 'paymentsPage',
  components: { ModalPaymentsInfo},
  data:()=>{
    return{
      user: null,
    }
  },
  methods:{
    ...mapActions('payments', ['requestUsers']),
    openUserModal(item){
      this.user = item;
    },
    closeUserModal(){
      this.user = null;
    }
  },
  computed:{
    ...mapGetters('payments', ['getUser']),
  },
  mounted() {
    this.requestUsers();
  }
}
</script>

<style scoped lang="scss">
.payments{
  &__list{
    &__item{
      padding: 20px 0;
      border-bottom: 1px solid black;

      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-column-gap: 50px;

      justify-content: space-between;

      &:not(:last-child){
        margin-bottom: 20px;
      }

      &__info-block{
        display: grid;
        grid-template-columns: repeat(3, auto);

        span{
          &:not(:last-child){
            margin-right: 20px;
          }
        }
      }

      &__settings-block{
        button{
          text-transform: uppercase;
          font-weight: 600;

          @include hoverFocus{
            color: $color-orange;
          }

          &:not(:last-child){
            margin-right: 20px;
          }
        }
      }
    }
  }
}


.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>

