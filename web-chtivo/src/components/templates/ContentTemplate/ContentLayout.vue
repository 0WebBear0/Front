<template>
  <q-page-container class="row">
    <div class= "col-xs-1 col-sm-2 col-md-2 col-lg-3"></div>
    <div class="col-xs-10 col-sm-8 col-md-8 col-lg-6 Container">
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
    margin-top: clamp(10px,2vh,20px);
    word-wrap: anywhere;
  }
</style>
