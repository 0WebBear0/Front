<template>
  <q-list bordered separator v-if="this.getChapters !== null && this.getChapters !== null">
    <q-item
        v-for="item in this.getChapters"
        :key="item.chapter_Number"
        clickable
        v-ripple
        @click="$router.push({ name:'reader', params: {
          titleId: this.$route.params.titleId,
           chapterId: item.id }
        })"
    >
      <q-item-section side>Глава #{{item.chapter_Number}}</q-item-section>
      <q-item-section>Active</q-item-section>
      <q-item-section side>Side</q-item-section>
    </q-item>

  </q-list>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ChapterList",
  created() {
    this.uploadChapters(this.$route.params.titleId)
  },
  computed:{
    ...mapGetters('Titles', ['getChapters'])
  },
  methods: {
    ...mapActions('Titles', ['uploadChapters']),
  },
}
</script>

<style scoped>

</style>
