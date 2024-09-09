<template>
  <div class="relative top-0 mb-96">
    <img
      src="../assets/bg2.svg"
      alt="Background Image"
      class="absolute top-40 -left-[670px] w-[1652px] h-[1316px]"
    />
    <section class="relative z-10 flex justify-center items min-h-screen pl-96 pt-96 ml-56">
      <div class="bg-white text-black w-full max-w-lg p-8 flex flex-col items-start space-y-6">
        <div class="flex items-center space-x-2">
          <img src="../assets/arr.svg" alt="arrow" class="w-6 h-6" />
          <h2 class="text-lg font-semibold">About us</h2>
        </div>
        <h1 class="text-3xl font-bold">Great digital agency</h1>
        <p class="text-start">
          Our products are fully custom-made, built with the latest technologies
          and cloud-architectures.
        </p>
        <p class="text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
          odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          In convallis porta mauris non aliquam.
        </p>
        <button
          class="border-2 border-[#0E77FF] rounded-[35px] opacity-90 px-6 py-3 mt-4"
        >
          <router-link to="/login" class="text-sm font-semibold leading-6 text-sky-500">
            Get started >>
          </router-link>
        </button>
      </div>
    </section>
  </div>
</template>

<style>
.custom-transform {
  transform: matrix(-0.72, 0.69, -0.69, -0.72, 0, 0);
}
</style>
