<script setup lang="ts">
import { ref } from 'vue'

type Expirence = {
  period: string
  role: string
  company: string
  description: string
  technologies: string[]
  current: boolean
}

const expirences = ref<Expirence[]>([
  {
    period: 'Jan 2025 - Present',
    role: 'Fullstack Software Developer',
    company: 'G-Smart (GConta Contract)',
    description:
      'Designing and developing a performance-focused accounting system. Building backend services and APIs using Go, optimizing system performance, and designing efficient database schemas and system components.',
    technologies: ['Go', 'REST APIs', 'PostgreSQL', 'Docker'],
    current: true,
  },
  {
    period: 'Aug 2024 - Dec 2024',
    role: 'Mobile Application Developer',
    company: 'G-Smart (ProAqua Contract)',
    description:
      'Developed a mobile application using Flutter with an offline-first architecture. Implemented local storage using SQLite and batch synchronization with backend services while optimizing performance and data handling.',
    technologies: ['Flutter', 'SQLite', 'Mobile Development'],
    current: false,
  },
  {
    period: '2023 - Present',
    role: 'Backend Developer',
    company: 'Personal Projects',
    description:
      'Building personal backend projects to explore system design, APIs, authentication, and performance optimization. Experimenting with different technologies and architectures while continuously improving my engineering skills.',
    technologies: ['Go', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Linux'],
    current: true,
  },
])
</script>
<template>
  <section class="py-32 relative overflow-hidden" id="experience">
    <div
      class="absolute top-1/2 lef-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
    />
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="max-w-3xl mb-16">
        <span
          class="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
          >Carrer Journey</span
        >
        <h2
          class="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
        >
          Experience <span class="font-serif italic font-normal text-white">speaks volumes.</span>
        </h2>

        <p class="text-muted-foreground animate-fade-in animation-delay-200">
          A timeline of my professional experience building software, focusing primarily on backend
          development and system design.
        </p>
      </div>

      <div class="relative">
        <div class="timeline-glow" />
      </div>
    </div>
  </section>
</template>
