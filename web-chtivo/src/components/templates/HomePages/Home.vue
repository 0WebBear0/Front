<template>
    <CardContainer name="Популярные тайтлы"/>
    <CardContainer name="Лучшие в своём жанре" display-type="Genres"/>
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

</style>
