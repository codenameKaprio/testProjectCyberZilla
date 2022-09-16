<template lang="pug">
  ModalWrapper(:closeModal="closeModal")
    ul.list
      li.list__item(v-for="item in todoList" :key="item.id")
        .list__item__settings
          h2(:class="{'performed' : item.check}") {{item.title}}
          input(type="checkbox" v-model="item.check" )

        transition(name="description" )
          .list__item__description(v-if="!item.check")
            p {{item.description}}


</template>

<script>
export default {
  name: 'ModalTodoList',
  props: {
    todoList:{
      required: true,
      type: Array,
    },
    closeModal: {
      required: true,
      type: Function,
    }
  },

}
</script>

<style scoped lang="scss">

.list{
  margin-top: 40px;
  max-height: 90%;
  height: 100%;
  overflow: auto;

  &__item{
    padding-right: 20px;
    &__settings{
      display: flex;
      justify-content: space-between;

      h2{
        font-size: 30px;
      }

      .performed{
        text-decoration: line-through;
      }
    }

    &:not(:last-child){
      margin-bottom: 15px;
    }

    &__description{
      overflow: hidden;
      p{
        padding: 15px 0;
        font-size: 16px;
      }
    }
  }
}

.description-enter-active,
.description-leave-active {
  transition: max-height 0.5s, opacity 0.5s;
  max-height: 1000px;
}
.description-enter,
.description-leave-to
{
  opacity: 0;
  max-height: 0px;
}
</style>
