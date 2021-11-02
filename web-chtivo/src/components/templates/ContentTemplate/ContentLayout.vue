<template>
  <q-page-container class="row">
    <div class= "col-xs-1 col-sm-2 col-md-3 col-lg-4"></div>
    <div class="col-xs-10 col-sm-8 col-md-6 col-lg-4 ">
      <slot></slot>
    </div>
  </q-page-container>
</template>

<script>
import {defineComponent} from "vue";


export default defineComponent({
  name: 'ContentLayout',
  setup () {
    return {
    }
  }
})
</script>

<style scoped>
  .row{
    margin-top: clamp(10px,2vh,20px) ;
    word-wrap: anywhere;
  }
</style>
