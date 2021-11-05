<template>
  <q-layout view="lHh Lpr lFf">
    <Header avatar="account_circle" name="Hello" user-settings="/Settings"/>
    <ContentLayout>
        <router-view/>
    </ContentLayout>
  </q-layout>
</template>

<script>
import Header from "components/organism/Header";
import {defineComponent} from "vue";
import ContentLayout from "components/templates/ContentTemplate/ContentLayout";


export default defineComponent({
  name: 'MainHomePage',
  components: {
    ContentLayout,
    Header,
  },
})
</script>

<style scoped>

</style>
