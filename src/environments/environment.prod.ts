export const environment = {
  production: true,
  // Do not share anything in the environment config
  firebaseConfig: {
    apiKey: "AIzaSyD_kS3s_C2WAsURpHEK5D05gfaRcuD__DU",
    authDomain: "astro-whirled.firebaseapp.com",
    projectId: "astro-whirled",
    storageBucket: "astro-whirled.appspot.com",
    messagingSenderId: "135593867864",
    appId: "1:135593867864:web:ed763da865bf416bfae82d",
    measurementId: "G-VJ61D9G9K3"
  },
  stripe: {
    key: "pk_test_51KmiK5IkGt8YVVeiFWDSXZE5mheUMbfvBNBgk4ctH5QPbNgJNm4qSRd8GQuNUkebO5EPdoaKxSkxn8Go8z9kjQgI00Fdoc1HFb"
  },
  deploy_url: "https://astro-whirled.web.app"
}