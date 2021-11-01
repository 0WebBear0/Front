<template>
  <q-layout view="lHh Lpr lFf">
    <Header avatar="account_circle" name="Schedule" user-settings="/home"/>
    <q-page-container>
      <p>Schedule</p>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "components/organism/Header";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Schedule',
  components: {
    Header,
  },
})
</script>

<style scoped>

</style>
