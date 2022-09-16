<template lang="pug">
  PortalTarget.modal-wrapper(name="modal" )
    .modal-wrapper__closse-bg(@click="closeModal")
    .modal-wrapper__content
      button.modal-wrapper__content__close(aria-label='close' @click="closeModal")
      slot

</template>

<script>
export default {
  name: 'ModalWrapper',
  props:['closeModal'],
}
</script>

<style scoped lang="scss">
.modal-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  &__closse-bg{
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    transition: background .3s;

    @include hoverFocus{
      background: rgba(0,0,0,0.7);
      transition: background .3s;
      cursor: pointer;
    }
  }

  &__content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 90%;
    height: 90%;
    max-width: 400px;
    max-height: 400px;
    padding: 15px;
    border-radius: 5px;
    background: $color-white;

    &__close{
      width: 20px;
      height: 20px;

      position: absolute;
      top: 15px;
      right: 15px;

      @include hoverFocus{
        &:before,
        &:after{
          background: $color-orange;
        }
      }

      &:before,
      &:after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: black;

        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%) rotate(45deg);
      };

      &:after{
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
}
</style>
