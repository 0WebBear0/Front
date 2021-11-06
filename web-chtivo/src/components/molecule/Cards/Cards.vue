<template>
<!--  <q-card class="my-card" tag="a" :href="link">-->
<!--    <q-img :src="img">-->
<!--      <div class="absolute-bottom text-h6">-->
<!--        {{title}}-->
<!--      </div>-->
<!--    </q-img>-->

<!--    <q-card-section class="n">-->
<!--      {{ description }}-->
<!--    </q-card-section>-->
<!--  </q-card>-->
  <q-card class="MyCard">
    <q-img class="MyCard" src="https://cdn.quasar.dev/img/parallax2.jpg">
      <div class="absolute-top text TitleName nullification">
        Title
      </div>
      <div class="absolute-center text TitleEnd nullification">
            End
      </div>
      <div class="absolute-bottom-left text TitleViews nullification">
        Views
      </div>
      <div class="absolute-bottom-right text TitleLike nullification">
        Like
      </div>
    </q-img>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cards',
  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
  // props: {
  //   title: {
  //     type: String,
  //     required: true
  //   },
  //   description: {
  //     type: String,
  //     required: true
  //   },
  //   link: {
  //     type: String,
  //     default: '#'
  //   },
  //   img: {
  //     type: String,
  //     default: ''
  //   }
  // }
})
</script>
<style>
  .MyCard {
    width: clamp(80px, 20vw, 120px);
    height: clamp(120px, 30vw, 180px);
  }
  .TitleName{
    display: flex;
    justify-content: center;
    height: clamp(20px,5vh,40px);
    font-size: clamp(10px,4vh,20px);
  }
  .TitleEnd{
    font-size: clamp(20px,6vh,30px);
    display: flex;
    justify-content: center;
    background-color: transparent !important;
    height: auto;
  }
  .TitleLike{
    border: solid transparent;
    border-radius: 2px;
  }
  .TitleViews{
    border: solid transparent;
    border-radius: 2px;
  }
  .Description{
    font-size: clamp(8px,3vw,12px);
  }
</style>
