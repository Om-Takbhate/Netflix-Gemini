export const NETFLIX_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"

export const NETFLIX_LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
  }
};

// export const GEMINI_API_KEY = 'AIzaSyABfU8l2vpUR6ZkeXi64f7116lIN_VbQzQ'
export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_KEY


export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w780'