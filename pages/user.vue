<template lang="pug">
  main.main.container
    section.todo-sections
      ul.todo-sections__list
        li.todo-sections__list__item(v-for="item in getUser" :key="item.id")
          .todo-sections__list__item__info-block
            span {{item.name}}
            span {{item.email}}
            span {{item.phone}}
          .todo-sections__list__item__settings-block
            button(@click="openTodoListModal(item)") открыть лист
            button(@click="openEditingUserModal(item)") редактирование
      transition(name="modal" )
        ModalTodoList(v-if="todoList" :todo-list="todoList" :closeModal="closeTodoListModal")
        ModalEditingUser(v-if="editingUser" :users="editingUser" :closeModal="closeEditingUserModal")


</template>

<script>

import {mapActions, mapGetters} from 'vuex';
import ModalTodoList from "~/components/Users/ModalTodoList";
import ModalEditingUser from "~/components/Users/ModalEditingUser";

export default {
  name: 'userPage',
  components: {ModalTodoList, ModalEditingUser},
  data:()=>{
    return{
      todoList: null,
      editingUser: null,
    }
  },
  methods:{
    ...mapActions('users', ['requestUsers']),
    openTodoListModal(item){
      this.todoList = item.todo;
    },
    openEditingUserModal(item){
      this.editingUser = item;
    },
    closeTodoListModal(){
      this.todoList = null;
    },
    closeEditingUserModal(){
      this.editingUser = null;
    }
  },
  computed:{
    ...mapGetters('users', ['getUser']),
  },
  mounted() {
    this.requestUsers();
  }
}
</script>

<style scoped lang="scss">
.todo-sections{
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
