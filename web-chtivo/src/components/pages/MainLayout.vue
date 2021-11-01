<template>
  <q-layout view="lHh Lpr lFf">
    <Header avatar="menu" name="Pitter" user-settings="/home"/>
    <q-page-container>
      Test
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'
import Header from "components/organism/Header";

export default defineComponent({
  name: 'MainLayout',
  components: {
    Header,
  },
})
</script>
