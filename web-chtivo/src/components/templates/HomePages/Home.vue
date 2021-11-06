<template>
<!--  <Cards link="/MyTitles" title="Test" description="Test description for checked workable"  />-->
  <div class="row items-start q-gutter-md justify-center LayoutStyle">
    <CardContainer/>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import CardContainer from "components/organism/CardContainer";

export default defineComponent({
  name: 'Home',
  components: {
    CardContainer

  },
})
</script>

<style scoped>
  .LayoutStyle{
    padding: 0;
    margin: 0;
  }
</style>
