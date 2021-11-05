<template>
  <q-header elevated>
    <q-toolbar>
      <div class="drawer HeaderLayout">
        <q-btn
          flat
          dense
          round
          icon="menu"
          color="white"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-item-label>WebChtivo</q-item-label>

        <a :href="userSettings" class="nullification UserLabelOnHeader" >
          <q-icon :name="avatar" size="150%" class="UserLabelOnHeader-icon"/>
          <q-item-label class="roundByImg">{{name[0]}}</q-item-label>
        </a>
      </div>

      <q-toolbar-title class="headerDesktop">
          <div v-for="link in essentialLinks" :key="link.title" v-bind="link">
              <q-item clickable tag="a" :href="link.link">{{link.title}}</q-item>
          </div>

              <a :href="userSettings" class="nullification UserLabelOnHeader" >
                <q-icon :name="avatar" size="150%" class="UserLabelOnHeader-icon"/>
                <q-item-label class="roundByImg">{{name}}</q-item-label>
              </a>
      </q-toolbar-title>

    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    bordered
    overlay
    class="drawer"
  >
    <div class="layoutGrid">
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <q-icon @click="toggleLeftDrawer" color="black" name="menu" size="150%" class="nullification Brg"/>

    </div>
  </q-drawer>
</template>

<script>


import EssentialLink from 'components/molecule/ListelEment/EssentialLink.vue'

const linksList = [
  {
    title: 'Главная',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Мои тайтлы',
    icon: 'playlist_play',
    link: '/MyTitles'
  },
  {
    title: 'Расписание',
    icon: 'today',
    link: '/Schedule'
  },
  {
    title: 'Все тайтлы',
    icon: 'apps',
    link: '/AllTitles'
  },
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Header',

  components: {
    EssentialLink
  },
  props: {
    avatar: {
      default: "account_circle",
      type: String,
      required: true
    },
    name: {
      default: "Введите имя",
      type: String,
      required: true
    },
    userSettings: {
      type: String,
      required: true
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
 .UserLabelOnHeader{
   display: flex;
   justify-content: center;
   padding: 8px 16px;
 }
 .UserLabelOnHeader-icon{
   margin-right: 15%;
 }
 .headerDesktop{
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
 }
 .HeaderLayout{
   width: 100%;
   font-size: clamp(14px,5vw,16px);
   display: flex;
   align-items: center;
   justify-content: space-between;
 }
 .layoutGrid{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
 }
 .Brg{
   padding-top: 13px;
   padding-right: 20px;
 }
 .roundByImg{
   margin-top: 3px;
 }
 @media (min-width: 1024px) {
   .drawer{
     display: none;
   }
 }
 @media (max-width: 1023px) {
   .headerDesktop{
     display: none;
   }
 }
</style>
