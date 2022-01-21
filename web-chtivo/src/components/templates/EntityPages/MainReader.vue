<template>
  <div v-if="this.getChapterImages !== null">
    <div v-for="images in this.getChapterImages" :key="images">
      <q-img :src="imgSrc + images.img" v-if="
            this.img_is_not_null(images.img)"
      >
        <template v-slot:loading>
          <div class="text-subtitle1">
            Loading...
          </div>
        </template>
      </q-img>
      <q-img v-else :src="noImg"/>
    </div>
  </div>
  <div class="button-next">
    <q-btn push text-color="primary" label="Push" to="./" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import noImg from "assets/noImgpng.png";

import {img_is_not_null} from "components/mixins/Img_is_not_null";
import {ref} from "vue";

export default {
  name: "MainReader",
  created() {
    this.uploadChapterImages(this.$route.params.chapterId)
  },
  computed:{
    ...mapGetters('Titles', ['getChapterImages'])
  },
  methods: {
    ...mapActions('Titles', ['uploadChapterImages']),
  },
  setup (){
    return{
      img_is_not_null,

      imgSrc : ref('http://127.0.0.1:8000'),
      noImg : noImg
    }
  }
}
</script>

<style scoped>
.button-next{
  display: flex;
  justify-content: center;
  padding-top: clamp(5px, 1.5vh, 15px);
}
</style>
