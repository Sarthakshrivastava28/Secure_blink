<template>
    <div class="min-h-screen bg-gray-100 flex">
      
      <aside class="w-32 bg-white border-r">
        <nav class="space-y-2 p-4">
          
          <a href="#" class="flex  flex-col items-center space-x-2 p-2 hover:bg-gray-200 rounded">
            <img src="../assets/dashboard.svg" alt="Dashboard Icon" class="w-8 h-8"/>
            <span>Dashboard</span>
          </a>
  
          
          <a href="#" class="flex flex-col items-center space-x-2 p-2 hover:bg-gray-200 rounded">
            <img src="../assets/analytics.svg" alt="Analytics Icon" class="w-8 h-8"/>
            <span>Analytics</span>
          </a>
  
         
          <a href="#" class="flex flex-col items-center space-x-2 p-2 hover:bg-gray-200 rounded">
            <img src="../assets/trading.svg" alt="Trading Icon" class="w-8 h-8"/>
            <span>Trading</span>
          </a>
  
          
          <a href="#" class="flex flex-col items-center space-x-2 p-2 hover:bg-gray-200 rounded">
            <img src="../assets/notifications.svg" alt="Notifications Icon" class="w-8 h-8"/>
            <span>Notifications</span>
          </a>
  
          
          <router-link to="/"  class="  flex flex-col items-center space-x-2 p-2 text-red-600  rounded pt-72">
            <img src="../assets/logout.svg" alt="Logout Icon" class="w-8 h-8"/>
            <span>Logout</span>
          </router-link>
        </nav>
      </aside>
  
      
      <main class="flex-1 p-6 space-y-6">
       
        <header class="flex justify-between items-center bg-white p-4 rounded shadow">
          <div>
            <h1 class="text-xl font-bold">Dashboard</h1>
            <p class="text-gray-600">Welcome back, Andrew</p>
          </div>
          <button class="bg-blue-600 text-white px-4 py-2 rounded">
            + Add Unit
          </button>
          <div class="flex items-center space-x-2">
            <img src="../assets/p5.jpg" alt="Avatar" class="w-10 h-10 rounded-full" />
            <span>Andrew Johnston</span>
          </div>
        </header>
  
        
        <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="bg-white p-6 rounded shadow">
            <h2 class="text-lg font-semibold">Balance</h2>
            <p class="text-2xl">$5900.00</p>
          </div>
          
          <div class="bg-white p-6 rounded shadow">
            <h2 class="text-lg font-semibold">Profits</h2>
            <p class="text-2xl">$950.00</p>
            <p class="text-green-600">+56%</p>
          </div>
          
          <div class="bg-white p-6 rounded shadow">
            <h2 class="text-lg font-semibold">Losses</h2>
            <p class="text-2xl">$450.00</p>
            <p class="text-red-600">+56%</p>
          </div>
        </section>
  
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded shadow">
            <h3 class="text-lg font-semibold">Italy</h3>
            <p class="text-2xl">475</p>
          </div>
          <div class="bg-white p-6 rounded shadow">
            <h3 class="text-lg font-semibold">United States</h3>
            <p class="text-2xl">431</p>
          </div>
          <div class="bg-white p-6 rounded shadow">
            <h3 class="text-lg font-semibold">Canada</h3>
            <p class="text-2xl">174</p>
          </div>
        </section>
  
        
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div class="bg-white p-6 rounded shadow">
            <h3 class="text-lg font-semibold">Team Members</h3>
            <ul>
              <li class="flex items-center justify-between">
                <span>Andrew Johnston</span>
                <span class="text-sm">Top Trader</span>
              </li>
              <li class="flex items-center justify-between">
                <span>Anna Atkinsons</span>
                <span class="text-sm">Manager</span>
              </li>
            </ul>
          </div>
  
          
          <div class="bg-white p-6 rounded shadow">
            <h3 class="text-lg font-semibold">Comparison</h3>
            <div>
              <p>United States: 93%</p>
              <p>Italy: 73%</p>
              <p>Spain: 13%</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
  }
  </script>
  
  <style scoped>
  
  </style>
  