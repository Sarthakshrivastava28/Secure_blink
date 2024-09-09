

<template>
    <div class="container">
      <HelloWorld />
      <Aboutus />
      <Ourservices />
      <Core />
      <End />
    </div>
  </template>
  
  <script>
  import HelloWorld from '../components/HelloWorld.vue';
  import Aboutus from '../components/Aboutus.vue';
  import Ourservices from '../components/Ourservices.vue';
  import Core from '../components/Core.vue';
  import End from '../components/End.vue';
  
  export default {
    name: 'MainPage',
    components: {
      HelloWorld,
      Aboutus,
      Ourservices,
      Core,
      End
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  </style>