<template lang="pug">
  ModalWrapper(:closeModal="closeModal")
    form
      label
        span Name
        input(v-model="name")
      label
        span Email
        input(v-model="phone")
      label
        span Phone
        input(v-model="email")
      button(type="button" ref="btn" @click="saveChange") Сохронить



</template>

<script>
export default {
  name: 'ModalEditingUser',
  props: {
    users:{
      required: true,
      type: Object,
    },
    closeModal: {
      required: true,
      type: Function,
    }
  },
  data:()=>{
    return{
      name: '',
      phone: '',
      email: '',
    }
  },
  methods:{
    saveChange(){
      const regName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
      const regPhone = /^((\+7|7|8)+([0-9]){10})$/;
      const regEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;

      if(regName.test(this.name) && regPhone.test(this.phone) && regEmail.test(this.email)){
        this.users.name = this.name;
        this.users.email = this.email;
        this.users.phone = this.phone;

        this.closeModal();
      }
    }
  },
  mounted() {
    this.name = this.users.name;
    this.email = this.users.email;
    this.phone = this.users.phone;
  }

}
</script>

<style scoped lang="scss">

form{
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  label{
    display: flex;
    flex-direction: column;

    margin-bottom: 25px;

    span{
      font-style: italic;
      margin-bottom: 5px;
    }

    input{
      padding: 2px;
      border-bottom: 1px solid black;
    }
  }

  button{
    font-size: 24px;
    background: $color-green;
    color: $color-white;
    padding: 10px 0;

    @include hoverFocus{
      background: $color-orange;
    }
  }
}

</style>

