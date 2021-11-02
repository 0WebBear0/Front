<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        color="white"
        aria-label="Menu"
        @click="toggleLeftDrawer"
        class="drawer"
      />

      <q-toolbar-title class="headerDesktop">
          <div v-for="link in essentialLinks" :key="link.title" v-bind="link">
              <q-item clickable tag="a" :href="link.link">{{link.title}}</q-item>
          </div>

      </q-toolbar-title>

    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    bordered
    class="drawer"
  >
    <q-list>
      <q-item class="UserLabel">

        <a :href="userSettings" class="nullification" style="display: flex;" >
            <q-icon :name="avatar" size="150%" style="margin-right: 65%"/>
            <q-item-label style="margin-top: 3px"></q-item-label>
        </a>

        <q-icon @click="toggleLeftDrawer" name="menu" size="150%" class="nullification"/>

      </q-item>

      <EssentialLink
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script>


import EssentialLink from 'components/molecule/ListelEment/EssentialLink.vue'

const linksList = [
  {
    title: 'Главная',
    icon: 'home',
    link: '/home'
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
 .nullification{
   color: black;
   text-decoration: none;
   cursor: pointer;
 }
 .UserLabel{
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 .headerDesktop{
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
 }
 @media (min-width: 1024px) {
   .drawer{
     display: none;
   }
 }
 @media (max-width: 1024px) {
   .headerDesktop{
     display: none;
   }
 }
</style>
