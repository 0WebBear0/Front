import $api from "src/JWT/AxiosOwrride";

export async function uploadAllTitle ({commit}) {
  $api.get("titles/all")
    .then((response) => {
      if (response.status === 200){
        commit('SAVE_ALL_TITLES', response.data)
      }
    })
    .catch((error) => {
      console.log(error)
    });
}

export async function uploadTitleByID ({commit}, id) {
  $api.get("titles/"+ id )
    .then((response) => {
      if (response.status === 200){
        commit('SAVE_TITLE_BY_ID', response.data)
      }
    })
    .catch((error) => {
      console.log(error)
    });
}


export async function uploadChapters ({commit}, id) {
  $api.get("titles/"+ id + "/chapters" )
    .then((response) => {
      if (response.status === 200){
        commit('SAVE_CHAPTERS', response.data)
      }
    })
    .catch((error) => {
      console.log(error)
    });
}


export async function uploadChapterImages ({commit}, id) {
  $api.get("titles/chapter/"+ id )
    .then((response) => {
      if (response.status === 200){
        commit('SAVE_CHAPTER_IMG', response.data)
      }
    })
    .catch((error) => {
      console.log(error)
    });
}
