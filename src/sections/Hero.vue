<script setup lang="ts">
import { ref } from 'vue'
import type { Component } from 'vue'
import Button from '@/components/Button.vue'
import AnimatedBorderButton from '@/components/AnimatedBorderButton.vue'
import { ArrowRight, Download, Github, ChevronDown } from 'lucide-vue-next'
type SocialMedia = {
  icon: Component
  href: string
}
const skills = [
  'Go',
  'Gorm',
  'TypeScript',
  'Node.js',
  'Nest.js',
  'API REST',
  'Java/Kotlin',
  'Spring',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'AWS',
  'Vercel',
  'Git',
  'Linux',
  'React',
  'Vue',
  'React Native',
  'Flutter',
  'Tailwind CSS',
  'Shadcn',
  'Bootstrap',
]
const dotsArray = ref(
  Array.from({ length: 30 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    background: '#20B2A6',
    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
    animationDelay: `${Math.random() * 5}s`,
  })),
)
const socialMediaLinks = ref<SocialMedia[]>([
  {
    icon: Github,
    href: 'https://github.com/Figuritx79',
  },
])
const skillsRef = ref([...skills, ...skills])
</script>

<template>
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src="/hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"
      />
    </div>

    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
        v-for="(dot, i) in dotsArray"
        :key="i"
        :style="{
          top: dot.top,
          left: dot.left,
          background: dot.background,
          animation: dot.animation,
          animationDelay: dot.animationDelay,
        }"
      />
    </div>

    <div class="container mx-auto px-6 pb-20 pt-32 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left section -->
        <div class="space-y-8">
          <div class="animate-fade-in">
            <span
              class="inline-flex gap-2 px-4 py-2 items-center glass text-sm text-primary rounded-full"
            >
              <span class="w-2 bg-primary rounded-full h-2 animate-pulse" />
              Software Engineer • Backend Specialist
            </span>
          </div>
          <!-- Headline -->
          <div class="space-y-4">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100"
            >
              Designing <span className="text-primary glow-text">APIs</span>
              <br />
              and systems
              <br />
              <span className="font-serif italic font-normal text-white"> that scale. </span>
            </h1>
            <p class="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Hi, I'm Enrique Hernandez - — a backend engineer focused on building scalable APIs,
              efficient services, and reliable system architectures.
            </p>
          </div>
          <!-- CTAS -->
          <div class="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <Button size="large">
              <a href="#contact"> Contact Me </a>
              <ArrowRight class="w-5 h-5" />
            </Button>

            <AnimatedBorderButton typeLink="Y">
              Download CV
              <Download class="w-5 h-5" />
            </AnimatedBorderButton>
          </div>
          <!-- Social link -->
          <div class="flex items-center gap-4 animate-fade-in animation-delay-400">
            <span class="text-sm text-muted-foreground">Follow me</span>
            <a
              v-for="(social, idx) in socialMediaLinks"
              :key="idx"
              :href="social.href"
              class="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
        <!-- Right Section -->
        <div class="relative animate-fade-in animation-delay-300">
          <!-- Profile -->
          <div class="relative max-w-md mx-auto">
            <div
              class="absolute inset-0 rounded-3xl bg-gradiant-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
            />
            <div class="relative glass rounded-3xl p-2 glow-border">
              <img
                src="/profile.png"
                alt="Juan Enrique Gonzalez Hernandez"
                class="w-full aspect-4/5 object-cover rounded-3xl"
              />
              <!-- Floating badge -->
              <div class="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span class="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Skills -->
      <div class="mt-20 animate-fade-in animation-delay-600">
        <p class="text-sm text-muted-foreground mb-6 text-center">Tecnologies I work with</p>
        <div class="relative overflow-hidden">
          <div class="flex animate-marquee">
            <div v-for="(skill, idx) in skillsRef" :key="idx" class="shrink-0 px-8 py-4">
              <span
                class="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                >{{ skill }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
      <a
        href="#about"
        class="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
      >
        <span class="text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown class="w-6 h-6 animate-bounce" />
      </a>
    </div>
  </section>
</template>
