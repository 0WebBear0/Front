<template>
  <q-list class="q-page-container AllContainer">

    <q-item class="LabelNameContainer" v-if="name">

      <q-item-section class="LabelName">
        {{name}}
      </q-item-section>

      <q-item-section
        align="right"
        v-if="displayType === 'Genres'"
        class="LabelName randomGenre"
      >
        {{randomGenre}}
      </q-item-section>

    </q-item>

    <q-item class="LabelNameContainer" v-if="search">

      <q-item-section class="LabelName">
        <ButtonDownDrop name="Жанры" :arr="genre"/>
      </q-item-section>

      <q-item-section
        align="right"
        v-if="displayType === 'Genres'"
        class="LabelName randomGenre"
      >
        {{randomGenre}}
      </q-item-section>

    </q-item>


    <q-separator spaced />
    <q-layout class="LabelItem row no-padding items-start q-gutter-md justify-center ">
      <Cards
        v-for="title in renderTitle"
        :key="title.id"
        :title="title.title"
        :like="title.like"
        :end="title.end"
        :link="title.link"
        :view="title.view"
        :img="title.img"
        :description="title.description"
        :author-name="title.authorName"
        :size-card="sizeCard"
      />
    </q-layout>
  </q-list>

</template>

<script>
import Cards from "components/molecule/Cards/Cards";

import {defineComponent} from "vue";
import ButtonDownDrop from "components/molecule/ButtonDownDrop";

const Hours = new Date().getHours()
const GetCountGenre = Hours % 10

export default defineComponent({
  name: 'CardContainer',
  components: {
    ButtonDownDrop,
    Cards
  },
  props: {
    name: {
      type: String,
      required: true
    },
    displayType: {
      type: String,
      required: true
    },
    sizeCard: {
      type: String,
      required: true
    },
    search: {
      type: Boolean,
      required:true
    },
  },

  setup(){
    return{
      renderTitle:[
        {
          id: 0,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test",
          title: "Test1",
          like: 10,
          view: 100,
          description: "123456789pjqofsljdfj hsdkjf sdkj fkj dskbf kjdsb kjsbdfk dsk jbfkjdsbk fhbdfkjg bkfdg",
          end: true,
          authorName: "Jhon",
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test123",
          title: "Test2",
          like: 55,
          view: 990,
          description: "123456789pjqofsljdfj hsdkjf sdkj fkj dskbf kjdsb kjsbdfk dsk jbfkjdsbk fhbdfkjg bkfdg",
          end: false,
          authorName: "Pitcher",
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test123",
          title: "Test2",
          like: 55,
          view: 990,
          description: "123456789pjqofsljdfj hsdkjf sdkj fkj dskbf kjdsb kjsbdfk dsk jbfkjdsbk fhbdfkjg bkfdg",
          end: false,
          authorName: "Pitcher",
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test123",
          title: "Test2",
          like: 55,
          view: 990,
          description: "123456789pjqofsljdfj hsdkjf sdkj fkj dskbf kjdsb kjsbdfk dsk jbfkjdsbk fhbdfkjg bkfdg",
          end: false,
          authorName: "Pitcher",
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test123",
          title: "Test2",
          like: 55,
          view: 990,
          description: "123456789pjqofsljdfj hsdkjf sdkj fkj dskbf kjdsb kjsbdfk dsk jbfkjdsbk fhbdfkjg bkfdg",
          end: false,
          authorName: "Pitcher",
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test123",
          title: "Test2",
          like: 55,
          view: 990,
          description: "123456789pjqofsljdfj hsdkjf sdkj fkj dskbf kjdsb kjsbdfk dsk jbfkjdsbk fhbdfkjg bkfdg",
          end: false,
          authorName: "Pitcher",
        },
        {
          id: 0,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test",
          title: "Test1",
          like: 10,
          view: 100,
          description: "123456789pjqofsljdfj hsdkjf sdkj fkj dskbf kjdsb kjsbdfk dsk jbfkjdsbk fhbdfkjg bkfdg",
          end: true,
          authorName: "Jhon",
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test123",
          title: "Test2",
          like: 55,
          view: 990,
          description: "123456789pjqofsljdfj hsdkjf sdkj fkj dskbf kjdsb kjsbdfk dsk jbfkjdsbk fhbdfkjg bkfdg",
          end: false,
          authorName: "Pitcher",
        },
        {
          id: 0,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test",
          title: "Test1",
          like: 10,
          view: 100,
          description: "123456789pjqofsljdfj hsdkjf sdkj fkj dskbf kjdsb kjsbdfk dsk jbfkjdsbk fhbdfkjg bkfdg",
          end: true,
          authorName: "Jhon",
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test123",
          title: "Test2",
          like: 55,
          view: 990,
          description: "123456789pjqofsljdfj hsdkjf sdkj fkj dskbf kjdsb kjsbdfk dsk jbfkjdsbk fhbdfkjg bkfdg",
          end: false,
          authorName: "Pitcher",
        },
        {
          id: 0,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test",
          title: "Test1",
          like: 10,
          view: 100,
          description: "123456789pjqofsljdfj hsdkjf sdkj fkj dskbf kjdsb kjsbdfk dsk jbfkjdsbk fhbdfkjg bkfdg",
          end: true,
          authorName: "Jhon",
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test123",
          title: "Test2",
          like: 55,
          view: 990,
          description: "123456789pjqofsljdfj hsdkjf sdkj fkj dskbf kjdsb kjsbdfk dsk jbfkjdsbk fhbdfkjg bkfdg",
          end: false,
          authorName: "Pitcher",
        },
      ],
      randomGenre: GetCountGenre,
      genre: [1,3,5,89,66,5,5552,554],
    }
  }
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
