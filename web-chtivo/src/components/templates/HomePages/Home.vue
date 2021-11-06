<template>
<!--  <Cards link="/MyTitles" title="Test" description="Test description for checked workable"  />-->
  <div class="row items-start q-gutter-md justify-center LayoutStyle">
    <Cards
      description="Test description for checked workable"
      title="Test"
    />
    <Cards
      description="Test description for checked workable"
      title="Test"
    />
    <Cards
      class=""
      description="Test description for checked workable"
      title="Test"
    />
    <Cards
      class=""
      description="Test description for checked workable"
      title="Test"
    />
  </div>
</template>

<script>

import {defineComponent} from "vue";
import Cards from "components/molecule/Cards/Cards";

export default defineComponent({
  name: 'Home',
  components: {
    Cards
  },
})
</script>

<style scoped>
  .LayoutStyle{
    padding: 0;
    margin: 0;
  }
</style>
