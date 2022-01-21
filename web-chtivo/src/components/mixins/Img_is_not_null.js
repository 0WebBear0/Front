export function img_is_not_null(img){
  if (
    img !== '' &&
    img!== null &&
    img !== undefined){
      return true
  }
  else return false
}
