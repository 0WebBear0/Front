<template>
  <q-layout view="lHh Lpr lFf">
    <Header avatar="account_circle" name="Pitter" user-settings="/home"/>
    <q-page-container>
        <p>Home Page</p>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "components/organism/Header";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Home',
  components: {
    Header,
  },
})
</script>

<style scoped>

</style>
