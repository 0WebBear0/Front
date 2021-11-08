<template>
  <div class="sideBar">
    <div class="headerSideLeft"></div>
    <div class="DayOfTheWeek">
      <a
        class="nullification"
        v-for="data in DayOfTheWeek"
        :key="data.day"
        @click="day = data.day"
      >
        {{DayOfTheWeek}}
      </a>
    </div>
    <div class="headerSideRight"></div>
  </div>
  <div class="dowSideBar"></div>
</template>

<script>
import {defineComponent} from "vue";
import CardContainer from "components/organism/CardContainer";

export default defineComponent({
  name: 'SideBar',
  props:{
    nameContainer: {
      type: String,
      required: true
    },
    DayOfTheWeek:{
      type: Array,
      required: true
    },
  },
  data(){
    return {
      day: "Понедельник"
    }
  },
  setup(props){
    return {

    }
  }
})
</script>

<style scoped>

</style>
