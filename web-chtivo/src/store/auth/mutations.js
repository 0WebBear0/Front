export function SAVE_ACSSES_TOKEN ( state, data ) {
  state.acsess = data
  localStorage.setItem('access', data)
}

export function SAVE_REFRESH_TOKEN ( state, data ) {
  state.refresh = data
  localStorage.setItem('refresh', data)
}
