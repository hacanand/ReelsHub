export const LOGO = process.env.REACT_APP_LOGO

export const BG_Img = process.env.REACT_APP_BG_IMG

export const API_OPTIONS = {
   method: 'GET',
   headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_TOKEN,
   },
}
export const IMG_CDN_URL = process.env.REACT_APP_IMG_CDN_URL
export const SUPPORTED_LANGUAGES = [
   { label: 'English', value: 'en' },
   { label: 'Hindi', value: 'hi' },
   { label: 'Marathi', value: 'mr' },
   { label: 'Gujarati', value: 'gu' },
   { label: 'Tamil', value: 'ta' },
   { label: 'Spanish', value: 'es' },
]
export const OPEN_AI_API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY