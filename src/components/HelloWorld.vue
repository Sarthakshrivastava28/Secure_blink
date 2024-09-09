

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "About", href: "#" },
  { name: "Service", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Contacts", href: "#" },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <div>
    <img src='../assets/bg.svg' alt="Background Image" class="absolute inset-0 z-0 w-full h-full object-cover" />
    
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex p-6 lg:px-12" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="../assets/logo.svg" alt="Logo" />
          </a>
        </div>

        <div
          class="sm:flex sm:gap-x-6 sm:pl-12 lg:flex lg:gap-x-10 lg:pl-12 ml-60"
        >
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-sm font-semibold leading-6 text-white"
            >{{ item.name }}</router-link
          >
        </div>
        <div class="md:flex md:flex-1 lg:flex lg:flex-1">
          <button class="bg-white px-5 sm:py-1 rounded-sm ml-5">
            <router-link to="/login" class="text-sm font-semibold leading-6 text-black"
              >Log in <span aria-hidden="true">&rarr;</span></router-link
            >
          </button>
        </div>
      </nav>
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class=" max-w-2xl py-32 sm:py-48 lg:py-20">
        <div class="text-left">
          <h1
            class="text-5xl sm:text-5xl font-bold tracking-tight text-white top-[280px]  w-[707px] h-[197px]"
          >
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. 
          </h1>
          <p class="text-lg leading-8 text-gray-600">
            Our products are fully custom-made, built with the latest technologies and cloud-architectures.
          </p>
          <div class="mt-10 flex  gap-x-6">
            <router-link
              to="/login"
              class=" rounded-3xl bg-white px-10 py-4 text-lg font-bold text-#000000 shadow-sm hover:bg-grey-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Get started >></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>