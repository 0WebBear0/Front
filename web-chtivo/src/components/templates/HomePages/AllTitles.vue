<template>
  <ButtonDownDrop name="Жанры" :arr="Genres"/>
  <CardContainer search/>
</template>

<script>
import {defineComponent} from "vue";
import CardContainer from "components/organism/CardContainer";
import ButtonDownDrop from "components/molecule/ButtonDownDrop";

export default defineComponent({
  name: 'AllTitles',
  components: {
    ButtonDownDrop,
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
