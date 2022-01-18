<template>
    <CardContainer name="Популярные тайтлы" :cards-array="getAllTitles"/>
    <CardContainer name="Лучшие в своём жанре"/>
</template>

<script>

import {defineComponent} from "vue";
import CardContainer from "components/organism/CardContainer";
import {mapActions, mapGetters} from "vuex";

export default defineComponent({
  name: 'Home',
  components: {
    CardContainer
  },
  created() {
    this.uploadAllTitle()
  },
  computed:{
    ...mapGetters('Titles', ['getAllTitles'])
  },
  methods: {
    ...mapActions('Titles', ['uploadAllTitle']),
  },
})
</script>

<style scoped>

</style>
