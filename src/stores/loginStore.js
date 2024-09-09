// src/stores/auth.js
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    async login(email, password) {
      // Implement your login logic here
      // For example:
      // const response = await api.login(email, password)
      // this.user = response.user
      // this.isAuthenticated = true
      console.log('Login attempted with:', email, password)
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
    },
  },
})