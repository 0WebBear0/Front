<template>
  <q-btn-dropdown :label="name">
    <q-list>
      <q-item
              clickable
              v-close-popup
              v-for="(data, id) in Arr"
              :key="id"
      >
        <q-item-section>
          <q-item-label>{{data[key]}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonDownDrop',
  components: {

  },
  props:{
    name: {
      type: String,
      required: true
    },
    Arr: {
      type: Array,
      required: true
    },
  }
})
</script>

<style scoped>

</style>
