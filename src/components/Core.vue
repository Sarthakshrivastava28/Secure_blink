<template>
    <div class="container mx-auto px-4 py-12">
      <div class="relative">
        
        <div class="absolute -top-16 -left-16 text-blue-100">
          <svg class="w-32 h-32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,100 50,0 100,100" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <h2 class="text-4xl font-bold text-center mb-4">Core Technologies</h2>
      <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan
        congue euisque blandit dui Pelle ntesque habitant.
      </p>
      
      
      <div class="flex justify-center mb-12">
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button v-for="category in categories" :key="category"
                  class="px-4 py-2 text-sm font-medium border rounded-lg"
                  :class="[
                    activeCategory === category ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-700',
                    category === 'Development' ? 'border-blue-200' : 'border-gray-200'
                  ]"
                  @click="activeCategory = category">
            {{ category }}
          </button>
        </div>
      </div>
      
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        <div v-for="(tech, index) in technologies" :key="index" 
             class="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img :src="tech.icon" :alt="tech.name" class="h-12 w-12 object-contain"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue'
import ReactIcon from '../assets/React-icon.svg'
 import AWSIcon from '../assets/aws.svg'
 import CloudIcon from '../assets/cloud.svg'
 import ReduxIcon from '../assets/redux.svg'
 import JavaScriptIcon from '../assets/javascript.svg'
 import SymfonyIcon from '../assets/symfony.svg'
 import NodejsIcon from '../assets/nodejs.svg'
 import GitlabIcon from '../assets/gitlab.svg'

export default defineComponent({
  name: 'CoreTechnologies',
  setup() {
    const activeCategory = ref('Development')
    const categories = ['Design', 'Development', 'Marketing']

    const technologies = [
      { name: 'React', icon: ReactIcon },
       { name: 'AWS', icon: AWSIcon },
      { name: 'Cloud', icon: CloudIcon },
       { name: 'Redux', icon: ReduxIcon },
       { name: 'JavaScript', icon: JavaScriptIcon },
       { name: 'Symfony', icon: SymfonyIcon },
       { name: 'Node.js', icon: NodejsIcon },
       { name: 'GitLab', icon: GitlabIcon }
    ]


    return {
      activeCategory,
      categories,
      technologies
    }
  }
})
  </script>