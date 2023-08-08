const URL_BASE = import.meta.env.VITE_ARTIC_URL;
const WORD_BASE_URL = import.meta.env.VITE_WORD_BASE_URL;
const MODE_WORD = import.meta.env.VITE_MODE_WORD;

export const getInfoArtWork = (id) => {
  return fetch(URL_BASE+id)
  .then(res=>res.json())
  .then(response => {
    return response
  })
}

export const getRandomWord = () => {
  return fetch(WORD_BASE_URL+MODE_WORD)
  .then(res=>res.json())
  .then(response => {
    return response
  })
}