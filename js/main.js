const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao Gigio , come stai?',
        logo: "https://www.raiplay.it/cropgd/1440x810/dl/img/2020/04/09/1586424957500_2048x1152.jpg",
    };
    },
  }).mount('#app');
