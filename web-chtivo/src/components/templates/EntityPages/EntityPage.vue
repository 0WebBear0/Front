<template>
  <div class="mainContainer" v-if="this.getTitleById !== null">
    <div class="img-container">

      <a v-if="this.getChapters.length !== 0"
         @click="$router.push({ name:'chapters', params: { titleId: this.$route.params.titleId }})">
        <q-img :src="imgSrc" v-if="
            this.img_is_not_null(this.getTitleById.cover_Img)"
        />
        <q-img v-else :src="noImg"/>
      </a>

      <a v-else >
        <q-img :src="imgSrc" v-if="
            this.img_is_not_null(this.getTitleById.cover_Img)"
        />
        <q-img v-else :src="noImg"/>
      </a>

    </div>
    <div class="title-container">
      <h5 class="Naming">{{this.getTitleById.title_Name}}</h5>
      <div>Количество вышедших глав {{this.getChapters.length}} </div>
      <div v-for="genre in this.getTitleById.genre" :key=genre>
        {{genre}}
      </div>
      <div>{{this.getTitleById.rating}}/10</div>
      <q-separator/>
    </div>
    <div class="description-container">
      {{this.getTitleById.description}}
    </div>
    <CardContainer size-card="MyCardImgLittle" name="герои"/>
    <CardContainer size-card="MyCardImgLittle" name="похожие"/>
  </div>
</template>

<script>

import CardContainer from "components/organism/CardContainer";
import {mapActions, mapGetters} from "vuex";
import {ref} from "vue";
import noImg from "assets/noImgpng.png";

import {img_is_not_null} from "components/mixins/Img_is_not_null";

export default {
  name: "EntityPage",
  components: {CardContainer},
  created() {
    this.uploadTitleByID(this.$route.params.titleId)
    this.uploadChapters(this.$route.params.titleId)
  },
  computed:{
    ...mapGetters('Titles', ['getTitleById', 'getChapters'])
  },
  methods: {
    ...mapActions('Titles', ['uploadTitleByID', 'uploadChapters']),
  },
  setup () {
    return {
      img_is_not_null,

      imgSrc : ref('http://127.0.0.1:8000'),
      noImg : noImg
    }
  },
  watch:{
    getTitleById(newData){
      this.imgSrc += newData.cover_Img
    }
  }
}
</script>

<style scoped>
  .mainContainer{
    display: flex;
    flex-wrap: wrap;
  }
  .img-container{
    flex: 0.5;
  }
  .title-container{
    padding-left: clamp(10px,3vw,30px);
    flex: 0.5;
    display: flex;
    flex-direction: column;
  }
  .Naming{
    padding-top: 0;
    margin-top: 0;
  }
</style>
