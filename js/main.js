const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao Gigio , come stai?',
        logo: "./img/gigi2.png",
    };
    },
  }).mount('#app');
