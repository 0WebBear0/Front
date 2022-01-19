<template>
  <q-card class="MyCard" tag="a" :href="titleLink">
    <q-img :class="sizeCard" :src="imgSrc" v-if="img !== '' && img !== null && img !== undefined">
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
        <div class="DescriptionLittle bg-blue-grey-1 text-black absolute" v-if="sizeCard === 'MyCardImgLittle'">
          {{description}}
        </div>
      <div class="Description bg-blue-grey-1 text-black absolute" v-if="sizeCard !== 'MyCardImgLittle'">
        <div class="MainInfoTitles">
          <div class="TitleNameDescription">{{title}}</div>
          <div class="authorName">{{authorName}}</div>
          <q-separator />
        </div>
        {{description}}
      </div>
    </q-img>
    <q-img :class="sizeCard" v-else
           :src="noImg">
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
        <div class="DescriptionLittle bg-blue-grey-1 text-black absolute" v-if="sizeCard === 'MyCardImgLittle'">
          {{description}}
        </div>
      <div class="Description bg-blue-grey-1 text-black absolute" v-if="sizeCard !== 'MyCardImgLittle'">
        <div class="MainInfoTitles">
          <div class="TitleNameDescription">{{title}}</div>
          <div class="authorName">{{authorName}}</div>
          <q-separator />
        </div>
        {{description}}
      </div>
    </q-img>
  </q-card>
</template>

<script>
import {defineComponent, ref} from 'vue'

import noImg from "src/assets/noImgpng.png"

export default defineComponent({
  name: 'Cards',
  setup () {
    return {
      titleLink : ref('title/'),
      imgSrc : ref('http://127.0.0.1:8000'),
      noImg : noImg
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    description:{
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
    },
    sizeCard: {
      type: String,
      required: false,
      default: "MyCardImg"
    }
  },
  created() {
    this.imgSrc += this.img
    this.titleLink += this.link
    console.log(this.img)
  },
})
</script>
<style scoped>
  .MyCardImg {
    transition-duration: 0.3s;
    width: clamp(90px, 20vw, 120px);
    height: clamp(135px, 30vw, 180px);
  }
  .MyCardImgLittle {
    transition-duration: 0.3s;
    width: clamp(60px, 15vw, 80px);
    height: clamp(90px, 20vw, 120px);
  }
  .MyCard{
    transition-duration: 0.3s;
    box-shadow: 6px 4px 5px 2px rgba(0, 0, 0, .2);
  }
  .MyCard:active {
    transition-duration: 0.3s;
    transform: scale(0.96);
  }
  .MyCard:hover .Description {
    transition: all 2s linear;
    display: flex;
  }
  .MyCard:hover .DescriptionLittle {
    transition: all 2s linear;
    display: flex;
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
    transition-duration: 0.3s;
    padding: 0 clamp(5px,3vw,10px) 0 clamp(5px,3vw,10px) !important;
    color: #263238;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fffde7;
    font-size: clamp(8px,3vw,12px);
    display: none;
  }
  .DescriptionLittle{
    transition-duration: 0.3s;
    padding: 0 clamp(4px,2.5vw,7px) 0 clamp(5px,3vw,10px) !important;
    color: #263238;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fffde7;
    font-size: clamp(7px,2.5vw,9px);
    display: none;
  }
  .MainInfoTitles{
    display: flex;
    justify-content: left;
    flex-direction: column;
  }
  .TitleNameDescription{
    padding-top: 0;
    color: black;
    font-size: clamp(10px,5vw,15px);
  }
  .authorName{
    color: black;
    font-style: italic;
    font-size: clamp(8px,4vw,13px);
  }
</style>
