import $api from "src/JWT/AxiosOwrride";

export async function uploadAllTitle ({commit}) {
  $api.get("titles/all")
    .then((response) => {
      if (response.status === 200){
        // commit('SAVE_ALL_TITLES', response.data)
        console.log(response)
      }
    })
    .catch((error) => {
      console.log(error)
    });
}
