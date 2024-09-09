<template>
  <div class="flex items-center justify-between h-screen" style="background-image: url('../assets/bg7.svg'); background-size: cover; background-position: center;">
    
    <div class="flex-1 flex justify-start">
      <img
        src="../assets/bg2.svg"
        alt="Background Image"
        class="w-full object-cover"
      />
    </div>
    
    
    <div class="flex-1 flex justify-center items-center">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Login to Access Dashboard</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email*</label>
            <input type="email" id="email" v-model="loginStore.email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">Password*</label>
            <div class="flex items-center justify-between">
              <input type="password" id="password" v-model="loginStore.password" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <a href="#" class="text-sm text-red-600 hover:text-red-500 ml-2">Forget Password?</a>
            </div>
          </div>
          <div class="justify-center flex items-center">
            <router-link to="/dashboard">
            <button type="submit" class="w-32 flex justify-center  py-2 px-4 border  rounded-2xl border-[#0E77FF] shadow-sm text-sm font-medium text-[#0E77FF] bg-white ">
              Login →
            </button>
          </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useLoginStore } from '../stores/loginStore.js';

export default {
  setup() {
    const loginStore = useLoginStore()
    return { loginStore }
  },
  methods: {
    handleSubmit() {
      
      console.log('Login attempted with:', this.loginStore.email, this.loginStore.password)
    }
  }
}
</script>