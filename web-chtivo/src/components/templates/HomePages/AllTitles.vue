<template>
  <CardContainer search/>
</template>

<script>
import {defineComponent} from "vue";
import CardContainer from "components/organism/CardContainer";

export default defineComponent({
  name: 'AllTitles',
  components: {
    CardContainer,
  },
  setup(){
    return{
      Genres : [1,2,3,3,3,35,55,5852]
    }
  }
})
</script>

<style scoped>

</style>
