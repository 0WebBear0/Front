import axios from "axios";

export async function authorisation ({commit}, data) {
  console.log(data)
  axios.post("http://localhost:8000/api/token/", data)
    .then((response) => {
      if (response.status === 200){
        commit('SAVE_ACSSES_TOKEN', response.data.access)
        commit('SAVE_REFRESH_TOKEN', response.data.refresh)
      }
    })
    .catch((error) => {
      console.log(error)
    });
}

