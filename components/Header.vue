<template lang="pug">
  header.header.container
      nav.header__nav
        ul.header__nav__list
          li
            nuxt-link(to="/user") Пользователи
          li
            nuxt-link(to="/payments") Платежи
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
.header{
  margin-bottom: 50px;

  &__nav{
    padding: 20px 0;
    border-bottom: 1px solid black;

    &__list{
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, auto);
      grid-column-gap: 30px;

      li{
        .nuxt-link-exact-active{
          color: $color-green !important;
        }

        a{
          @include hoverFocus{
            text-decoration: none !important;
            color: $color-orange;
          }
        }
      }
    }
  }
}
</style>
