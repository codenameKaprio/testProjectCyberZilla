<template lang='pug'>
  .app
    Header
    nuxt
    Portal(to="modal")
</template>

<script>

export default {
  layout: 'default'
}

</script>

<style lang='scss'>
body{
  margin: 0;
};

.nuxt-link-active{
  &:hover{
    text-decoration: none;
  }
};
</style>
