<template>
    <div class="flex justify-between p-8 bg-white pt-96 px-64">
        
      
      <div class="w-2/3">
        <p class=" flex text-blue-500 font-semibold mb-4 ">
          <img src="../assets/arr.svg" class="w-6 h-6" >
            OUR SERVICES
        </p>
        <h2 class="text-4xl font-bold mb-8">
          Transforming your ideas<br />into Reality
        </h2>
        <div class="flex flex-wrap gap-4">
          <button
            class="px-4 py-2 bg-[#16B2FF17]  rounded-full text-[#0E77FF] hover:bg-gray-200"
          >
            Web Development
          </button>
          <button
            class="px-4 py-2 bg-[#16B2FF17] rounded-full text-[#0E77FF] hover:bg-gray-200"
          >
            Mobile Development
          </button>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            UI/UX Designing
          </button>
          <button
            class="px-4 py-2 bg-[#16B2FF17]  rounded-full text-[#0E77FF] hover:bg-gray-200"
          >
            Branding
          </button>
          <button
            class="px-4 py-2 bg-[#16B2FF17]  rounded-full  text-[#0E77FF] hover:bg-gray-200"
          >
            Cloud Technology
          </button>
        </div>
      </div>
  
      
      
      <div class="w-2/3 h-auto bg-gray-50 p-6 rounded-lg">
        <div class="flex items-center mb-4 gap-3">
          <img src='../assets/ui.svg' class=" w-[50px] h-[50px]">
          <h3 class="text-2xl font-bold">UI/UX Designing</h3>
        </div>
        <p class="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex
          odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
          habitant.
        </p>
        <ul class="space-y-2">
          <li
            v-for="(item, index) in listItems"
            :key="index"
            class="flex items-center"
          >
           <img src="../assets/tick.svg" class="w-8 h-8 pr-3" >
            <span class="text-gray-700">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        listItems: [
          "Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.",
          "Lorem ipsum dolor sit amet.",
          "conse ctetur adipi scing elit.",
          "Lorem ipsum dolor sit amet, conse ctetur",
        ],
      };
    },
  };
  </script>
  