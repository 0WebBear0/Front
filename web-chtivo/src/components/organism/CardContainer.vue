<template>
  <div class="q-page-container ContainerPopular AllContainer">

    <div class="LabelNameContainer">
      <div class="LabelName">
        {{name}}
      </div>
      <div v-if="displayType === 'Genres'" class="LabelName randomGenre">{{randomGenre}}</div>
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
        :description="title.description"
        :author-name="title.authorName"
      />
    </div>
  </div>

</template>

<script>
import Cards from "components/molecule/Cards/Cards";

import {defineComponent} from "vue";

const Hours = new Date().getHours()
const GetCountGenre = Hours % 10

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
    displayType: {
      type: String,
      required: true
    },
    // renderTitle: {
    //   type: Object,
    //   required: true
    // }
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
  .LabelNameContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .randomGenre{
    color: rgba(0,0,0,0.6);
  }
</style>
