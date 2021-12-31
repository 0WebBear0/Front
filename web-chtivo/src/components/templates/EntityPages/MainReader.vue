<template>
  <div>
    <q-img
      :src="'https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg'"
    >
      <template v-slot:loading>
        <div class="text-subtitle1">
          Loading...
        </div>
      </template>
    </q-img>
  </div>
  <div class="button-next">
    <q-btn push text-color="primary" label="Push" to="./" />
  </div>
</template>

<script>
export default {
  name: "MainReader"
}
</script>

<style scoped>
.button-next{
  display: flex;
  justify-content: center;
  padding-top: clamp(5px, 1.5vh, 15px);
}
</style>
