<template>
  <div class="q-page-container ContainerPopular AllContainer">

    <div class="LabelName">
      Name
    </div>

    <div class="LabelItem">
      <Cards
        description="Test description for checked workable"
        title="Test"
      />
    </div>

  </div>
</template>

<script>
import Cards from "components/molecule/Cards/Cards";

import {defineComponent} from "vue";

export default defineComponent({
  name: 'CardContainer',
  components: {
    Cards
  },
})
</script>

<style scoped>
  .ContainerPopular{
    background-color: #f4f4f4;
  }
  .LabelName{
    font-size: clamp(15px, 4vw, 20px);
    padding: clamp(2px, 2vw, 6px);
    padding-top: 0;
  }
</style>
