<script setup lang="ts">
import Navbar from '@/layout/Navbar.vue'
import Hero from '@/sections/Hero.vue'
import About from '@/sections/About.vue'
import Experience from '@/sections/Experience.vue'
import Projects from '@/sections/Projects.vue'
import Contant from '@/sections/Contant.vue'
</script>

<template class="min-h-screen overflow-x-hidden">
  <Navbar />
  <main>
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Contant />
  </main>
</template>
