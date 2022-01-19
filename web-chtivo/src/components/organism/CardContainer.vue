<template>
  <q-list class="q-page-container AllContainer">

    <q-item class="LabelNameContainer" v-if="name">

      <q-item-section class="LabelName">
        {{name}}
      </q-item-section>
    </q-item>

    <q-separator spaced />
    <q-layout class="LabelItem row no-padding items-start q-gutter-md justify-center ">
      <Cards
        v-for="title in cardsArray"
        :key="title"
        :title="title.title_Name"
        :like="title.add_in_playlist"
        :end="title.end"
        :link="title.id"
        :view="title.views"
        :img="title.cover_Img"
        :description="title.description"
        :author-name="title.author"
        :size-card="sizeCard"
      />
    </q-layout>
  </q-list>

</template>

<script>
import Cards from "components/molecule/Cards/Cards";

import {defineComponent} from "vue";


export default defineComponent({
  name: 'CardContainer',
  components: {
    Cards
  },
  props: {
    name: {
      type: String,
      required: true
    },
    sizeCard: {
      type: String,
      required: true
    },
    cardsArray: {
      type: Array,
      required: true
    }
  },
})
</script>

<style scoped>

  .LabelName{
    font-style: italic;
    font-weight: 500;
    font-size: clamp(15px, 4vw, 20px);
  }
  .LabelItem{
    align-items: center;
    min-height: 100% !important;
    padding-top: clamp(10px, 4vw, 20px) !important;
  }
  .LabelNameContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .AllContainer{
    width: 100%;
    border: 2px solid transparent;
    border-radius: clamp(4px,1vw,6px);
    padding: 0 0 10px 0;
    margin-top: 20px;
  }
</style>
