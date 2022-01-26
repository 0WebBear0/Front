<template>
  <div class="q-pa-md">
    <div class="cursor-pointer">
      {{ label }}
      <q-btn label="logout" @click="this.removeAccess()"/>
      <q-popup-edit v-model="label" auto-save>
          <q-form @submit="onSubmit">
            <q-input v-model="login" label="Логин"
                :rules="[ val => val && val.length > 0 || 'Введите что нибудь']"
            />
            <q-input v-model="password" label="Пароль"
                :rules="[ val => val && val.length > 0 || 'Введите что нибудь']"
            />
            <q-btn type="submit" label="Отправить"/>
          </q-form>
      </q-popup-edit>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useQuasar} from "quasar";
import {mapActions} from "vuex";

export default {
  name: "Login",
  created() {
    console.log(localStorage.getItem('access'))
  },
  methods: {
    ...mapActions('auth',['authorisation']),
    onSubmit(){
      this.authorisation({"username": this.login,
        "password": this.password})
    },
    removeAccess(){
      localStorage.removeItem('access')
    }
  },
  setup () {
    const $q = useQuasar()
    return {
      label: ref('Авторизироваться'),
      login: ref(''),
      password: ref('')
    }
  }
}
</script>

<style scoped>

</style>
