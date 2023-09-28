const { createApp } = Vue;

createApp({
  data() {
    return {
      dischiList: [],
    };
  },

  mounted() {
    // console.log(axios);
    axios
      .get("http://localhost/php-dischi-json/backend/dischi.php")
      .then((response) => {
        this.dischiList = response.data;
        // console.log(response);
      });
  },
}).mount("#app");

// axios
//   .get("http://localhost/php-dischi-json/backend/dischi.php")
//   .then((response) => {
//     this.dischi = response.data;
//     console.log(this.dischi);
//   });
