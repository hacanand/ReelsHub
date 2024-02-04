export const LOGO =process.env.REACT_APP_LOGO

export const BG_Img =process.env.REACT_APP_BG_IMG
  
export const API_OPTIONS = {
   method: 'GET',
   headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_TOKEN,
   },
}
