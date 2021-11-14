<template>

  <div class="row justify-center">
    <q-btn-toggle
      flat
      text-color="grey"
      toggle-color="grey"
      toggle-text-color="black"
      v-model="slide"
      :options=namedPlayLists
    />
  </div>

  <q-carousel
    animated
    v-model="slide"
    infinite
    style="height: 100%"
    swipeable
  >
    <div
      :name=slide
      style="overflow-x: hidden"
      v-for="(name, keyId) in namedPlayLists"
      :key="keyId"
    >
      <CardContainer/>
    </div>
  </q-carousel>

</template>

<script>
import {defineComponent, ref} from "vue";
import CardContainer from "components/organism/CardContainer";

export default defineComponent({
  name: 'MyTitles',
  components: {
    CardContainer
  },
  setup () {
    const namedPlayLists = [
      { label: 'Soft Jazz', value: 'soft-jazz' },
      { label: 'Rihanna', value: 'Rihanna' },
      { label: 'Ibiza Mix', value: 'ibiza' }
    ]
    return {
      namedPlayLists,
      slide: ref('Rihanna')
    }
  }
})
</script>

<style scoped>

</style>
