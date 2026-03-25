<script setup lang="ts">
import AnimatedBorderButton from '@/components/AnimatedBorderButton.vue'
import { ArrowUpRight, Github } from 'lucide-vue-next'
import { ref } from 'vue'

type Project = {
  title: string
  description: string
  image: string
  tag: string[]
  link: string
  github: string
}

const projects = ref<Project[]>([
  {
    title: 'Anonymous chat',
    description: 'In process...',
    image: '/projects/project-1.png',
    tag: ['go', 'vue', 'typescript'],
    link: '#',
    github: '#',
  },
  {
    title: 'Home Drive',
    description: ' Here i need a description',
    image: '/projects/project-1.png',
    tag: ['go', 'vue'],
    link: '#',
    github: '#',
  },
  {
    title: 'My Blockchain',
    description: 'IN process...',
    image: '/projects/project-1.png',
    tag: ['rust', 'vue'],
    link: '#',
    github: '#',
  },
])
</script>
<template>
  <section class="py-24 overflow-hidden relative" id="projects">
    <!-- Background glows -->
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mx-auto max-w-3xl mb-16">
        <span
          class="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
          >Featured Work</span
        >
        <h2
          class="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-200 text-secondary-foreground"
        >
          Things I've
          <span class="font-serif italic font-normal text-white">engineered.</span>
        </h2>
        <p class="text-muted-foreground animate-fade-in animation-delay-200">
          A few things I've built while exploring backend development, system design, and software
          engineering.
        </p>
      </div>
      <!-- Projects grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(project, idx) in projects"
          :key="idx"
          class="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
          :style="{ animationDelay: `${idx + 1 * 100}ms` }"
        >
          <div class="relative overflow-hidden aspect-video">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full object-cover h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradiant-to-t from-card via-card/50 to-transparent opacity-60"
            />
            <!-- Overlay links -->
            <div
              class="inset-0 absolute flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a
                :href="project.link"
                class="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ArrowUpRight class="w-5 h-5" />
              </a>

              <a
                :href="project.github"
                class="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Github class="w-5 h-5" />
              </a>
            </div>
          </div>
          <!-- Content -->
          <div class="p-6 space-y-4">
            <div class="flex items-start justify-between">
              <h3 class="text-xl font-semibold group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              <ArrowUpRight
                class="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </div>
            <p class="text-muted-foreground text-sm">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 flex-row">
              <span
                v-for="(tag, taxIdx) in project.tag"
                :key="taxIdx"
                class="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                >{{ tag.toUpperCase() }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- View all CTA -->
      <div class="text-center mt-12 animate-fade-in animation-delay-500">
        <AnimatedBorderButton typeLink="N">
          View All Projects
          <ArrowUpRight class="w-5 h-5" />
        </AnimatedBorderButton>
      </div>
    </div>
  </section>
</template>
