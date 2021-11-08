<template>
  <q-layout view="lHh Lpr lFf">
    <Header
      down-side-bar="true"
      user-settings="/Settings"
      name="Test"
      avatar="account_circle"
      @getSelectedDay="getDay"
    />
    <ContentLayout>
      <CardContainer :name="dayOfTheWeek" />
    </ContentLayout>
  </q-layout>
</template>

<script>
import {defineComponent, ref} from "vue";
import Header from "components/organism/Header";
import ContentLayout from "components/templates/ContentTemplate/ContentLayout";
import CardContainer from "components/organism/CardContainer";
export default defineComponent({
  name: 'ScheduleNormal',
  components: {
    CardContainer,
    Header,
    ContentLayout
  },
  setup(){

    const dayOfTheWeek = ref("Понедельник")
    return{
      dayOfTheWeek,

      getDay(getData){
        dayOfTheWeek.value = getData
        console.log(dayOfTheWeek.value)
      }
    }
  }
})
</script>

<style scoped>

</style>
