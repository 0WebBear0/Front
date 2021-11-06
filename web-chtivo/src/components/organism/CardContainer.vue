<template>
  <div class="q-page-container ContainerPopular AllContainer">

    <div class="LabelName">
      {{name}}
    </div>
    <q-separator spaced />
    <div class="LabelItem row items-start q-gutter-md justify-center LayoutStyle">
      <Cards
        v-for="title in renderTitle"
        :key="title.id"
        :title="title.title"
        :like="title.like"
        :end="title.end"
        :link="title.link"
        :view="title.view"
        :img="title.img"
      />
    </div>
  </div>

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
    }
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
          end: true,
        },
        {
          id: 0,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test",
          title: "Test1",
          like: 10,
          view: 100,
          end: true,
        },
        {
          id: 0,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test",
          title: "Test1",
          like: 10,
          view: 100,
          end: true,
        },
        {
          id: 0,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test",
          title: "Test1",
          like: 10,
          view: 100,
          end: true,
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test1",
          title: "Test2",
          like: 100,
          view: 1000,
          end: false
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test1",
          title: "Test2",
          like: 100,
          view: 1000,
          end: false
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test1",
          title: "Test2",
          like: 100,
          view: 1000,
          end: false
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test1",
          title: "Test2",
          like: 100,
          view: 1000,
          end: false
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test1",
          title: "Test2",
          like: 100,
          view: 1000,
          end: false
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test1",
          title: "Test2",
          like: 100,
          view: 1000,
          end: false
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test1",
          title: "Test2",
          like: 100,
          view: 1000,
          end: false
        },
        {
          id: 1,
          img:"https://cdn.quasar.dev/img/parallax2.jpg",
          link: "/test1",
          title: "Test2",
          like: 100,
          view: 1000,
          end: false
        },
      ]
    }
  }
})
</script>

<style scoped>
  .ContainerPopular{
    background-color: #f4f4f4;
  }
  .LabelName{
    font-style: italic;
    font-weight: 500;
    font-size: clamp(15px, 4vw, 20px);
    padding: 0 clamp(2px, 2vw, 6px) clamp(2px, 2vw, 6px) clamp(2px, 2vw, 6px);
  }
  .LabelItem{
    align-items: center;

  }
</style>
