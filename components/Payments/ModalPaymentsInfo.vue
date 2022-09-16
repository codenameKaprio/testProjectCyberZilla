<template lang="pug">
  ModalWrapper(:closeModal="closeModal")
    .wrapper
      .info-block
        h2 информация о пользователе
        span Name: {{users.name}}
        span Phone: {{users.phone}}
        span Email: {{users.email}}

      .info-block
        h2 информация о платеже
        span {{users.info}}




</template>

<script>
export default {
  name: 'ModalPaymentsInfo',
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
}
</script>

<style scoped lang="scss">

.wrapper{
  margin-top: 40px;
}

.info-block{
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
}

h2{
  margin-bottom: 15px;
  font-size: 16px;
}

span{
  margin-bottom: 5px;
}

</style>

