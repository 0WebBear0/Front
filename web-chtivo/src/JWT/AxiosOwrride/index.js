import axios from "axios";
import {API_URL} from "src/JWT/MainConstants";
import identifyService from "src/JWT/SavesAnotherData";

const $api = axios.create({
  baseURL: API_URL,
  responseType: "json",
  withCredentials: false,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //   "Content-Type": "application/json",
  // },
})

//input
// $api.interceptors.request.use(config =>{
//   config.headers.Authorization = identifyService.getAcsses()
//   return config
// })

//output
// $api.interceptors.response.use(response =>{
//   return response
// }, error => {
//   if (error.response.status === 401) {
//
//     axios
//       .post(API_URL+"users/refresh_token", {"refresh_token": identifyService.getRefresh()})
//       .then((response) => {
//         if (response.data.success && response.data.status === 200) {
//           this.$store.commit('SAVE_ACSSES_TOKEN', identifyService.setAcsses())
//         }
//         else {
//           identifyService.removeIdentify()
//           identifyService.removeAcsses()
//           identifyService.removeRefresh()
//           this.$router.push('/login')
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//
//   }
//   console.log(error.response)
//   return error
// })



export default $api
