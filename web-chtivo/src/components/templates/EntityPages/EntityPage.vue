<template>
  <div class="mainContainer">
    <div class="img-container">
      <a @click="$router.push({ name:'chapters', params: { titleId: this.$route.params.titleId }})">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"/>
      </a>
    </div>
    <div class="title-container">
      <h5 class="Naming">Название</h5>
      <div>
        Повседневность боевик жанры
      </div>
      <div> 5 / 10</div>
      <q-separator/>
      <div class="table">
        <div class="row" style="justify-content: space-between">
          <div>asdafs</div>
          <div>safa6s5f</div>
        </div>
        <div class="row" style="justify-content: space-between">
          <div>asdafs</div>
          <div>safa6s5f</div>
        </div>
      </div>
    </div>
    <div class="description-container">
        asdfsgjf kdjgl nsfdljg ndfljgn ljsdf ngljfdn lgjsdfn gljsdfn gljdnfljgndfsljgn ljfsngljdfn ljsfdn gljdfn gljdfsng ljdfsng ljfdgs lnfljgn sfljg
    </div>
    <CardContainer size-card="MyCardImgLittle" name="герои"/>
    <CardContainer size-card="MyCardImgLittle" name="похожие"/>
  </div>
</template>

<script>

import CardContainer from "components/organism/CardContainer";
export default {
  name: "EntityPage",
  components: {CardContainer},
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
