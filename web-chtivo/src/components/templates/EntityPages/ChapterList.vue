<template>
  <q-list bordered separator>
    <q-item clickable v-ripple :active="active" to="2">
      <q-item-section side>Глава #123</q-item-section>
      <q-item-section>Active</q-item-section>
      <q-item-section side>Side</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: "ChapterList"
}
</script>

<style scoped>

</style>
