<template>
  <q-card class="MyCard" tag="a" :href="link">
    <q-img class="MyCardImg" :src="img">
      <div class="absolute-top text TitleName nullification">
        {{title}}
      </div>
      <div v-if="end" class="absolute-center text TitleEnd nullification">
            <q-icon name="done_all" size="300%"/>
      </div>
      <div class="absolute-bottom-left text TitleViews nullification">
        {{ view }}
      </div>
      <div class="absolute-bottom-right text TitleLike nullification">
        {{ like }}
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
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    like: {
      type: Number,
      required: true
    },
    view: {
      type: Number,
      required: true
    },
    end: {
      type: Boolean,
      required: true
    },
    link: {
      type: String,
      default: '#'
    },
    img: {
      type: String,
      default: ''
    }
  }
})
</script>
<style>
  .MyCardImg {
    transition-duration: 0.3s;
    width: clamp(90px, 20vw, 120px);
    height: clamp(135px, 30vw, 180px);
  }
  .MyCard{
    transition-duration: 0.5s;
    box-shadow: 6px 4px 3px 2px rgba(0, 0, 255, .2);
  }
  .MyCard:hover {
    transition-duration: 0.3s;
    transform: scale(0.96);
  }
  .MyCard:active {
    transition-duration: 0.2s;
    transform: rotate(5deg);
  }
  .TitleName{
    display: flex;
    justify-content: center;
    height: clamp(20px,5vh,40px);
    font-size: clamp(10px,4vh,20px);
  }
  .TitleEnd{
    font-size: clamp(17px,4vw,22px);
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
