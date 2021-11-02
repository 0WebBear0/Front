<template>
  <q-layout view="lHh Lpr lFf">
    <Header avatar="account_circle" name="Schedule" user-settings="/home"/>
    <q-page-container class="q-pa-md">
      <router-view class="col-xs-12 col-sm-6 col-md-4" />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "components/organism/Header";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'MainHomePage',
  components: {
    Header,
  },
})
</script>

<style scoped>

</style>
