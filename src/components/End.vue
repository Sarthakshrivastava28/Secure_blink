<template>
    <div class="flex justify-between items-center bg-white py-16 px-8">
        
     
      <div class="w-1/2">
        <img src="../assets/bg5.svg" alt="Support" class="mx-auto">
      </div>
  
      
      <div class="w-1/2 max-w-lg bg-white p-8 shadow-lg rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Send Us a Message</h2>
  
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="email" class="block text-sm font-semibold mb-2">Your Email*</label>
            <input type="email" id="email" v-model="email" required class="w-full p-2 border border-gray-300 rounded" />
          </div>
  
          <div class="mb-4">
            <label for="name" class="block text-sm font-semibold mb-2">Your Name*</label>
            <input type="text" id="name" v-model="name" required class="w-full p-2 border border-gray-300 rounded" />
          </div>
  
          <div class="mb-4">
            <label for="phone" class="block text-sm font-semibold mb-2">Phone Number*</label>
            <input type="tel" id="phone" v-model="phone" required class="w-full p-2 border border-gray-300 rounded" />
          </div>
  
          <div class="mb-4">
            <label for="subject" class="block text-sm font-semibold mb-2">Subject</label>
            <input type="text" id="subject" v-model="subject" class="w-full p-2 border border-gray-300 rounded" />
          </div>
  
          <div class="mb-4">
            <label for="message" class="block text-sm font-semibold mb-2">Your Message</label>
            <textarea id="message" v-model="message" rows="4" class="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
  
          <div class="mb-4 flex items-center">
            <input type="checkbox" id="agreement" v-model="agreement" class="mr-2" />
            <label for="agreement" class="text-sm">By sending this message, you confirm that you have read and agreed to our privacy policy.</label>
          </div>
  
          <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Get Started »</button>
        </form>
        
    </div>
    </div>
  
    
    
<div class=" flex w-full h-full pt-10 pb-32 px-4 bg-[#0E77FF] relative">
  
  <img src="../assets/bg6.svg" alt="background" class="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none">
  
  
  <div class="  relative z-10 mt-8">
    <p class="mb-4 text-white">Lorem Finaldream nure dolor in reprehenderit in voluptate velit esse cillum dolore e uis nostrud exercitation si ut aliquip ex ea commodo consequat.</p>
    <div class="flex space-x-4">
      <a href="#" class="text-white hover:text-blue-200">
        
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
      <a href="#" class="text-white hover:text-blue-200">
        
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      </a>
      <a href="#" class="text-white hover:text-blue-200">
        
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>
  </div>

  <div class="relative z-10 grid grid-cols-3 gap-8 mt-8">
    <div>
      <h3 class="font-bold text-white mb-4">Our Services</h3>
      <ul class="space-y-2 text-white">
        <li>Web Development</li>
        <li>Mobile Development</li>
        <li>Cloud Technologies</li>
        <li>UI/UX Design</li>
      </ul>
    </div>
    <div>
      <h3 class="font-bold text-white mb-4">Our Links</h3>
      <ul class="space-y-2 text-white">
        <li>Terms & Condition</li>
        <li>Privacy Policy</li>
        <li>Imprint</li>
      </ul>
    </div>
    <div>
      <h3 class="font-bold text-white mb-4">Contact Us</h3>
      <p class="text-white">At Dummyroad 124/23 floor 123 Banswada Street 02-577 India</p>
      <p class="mt-2 text-white">00 1800 245 453</p>
    </div>
  </div>
</div>

  </template>
  
  <script>
  export default {
  data() {
    return {
      email: '',
      name: '',
      phone: '',
      subject: '',
      message: '',
      agreement: false
    }
  },
  methods: {
    submitForm()  {
    
      console.log('Form submitted:', {
        email: this.email,
        name: this.name,
        phone: this.phone,
        subject: this.subject,
        message: this.message,
        agreement: this.agreement
      });

      
      this.$router.push({ name: 'LoginPage' });
    }
  }
}
</script>
  
  