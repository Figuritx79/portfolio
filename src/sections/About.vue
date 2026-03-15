<script setup lang="ts">
import { Brain, Code2, Rocket, User } from 'lucide-vue-next'
import { ref, type Component } from 'vue'

type Highlight = {
  icon: Component
  title: string
  description: string
}

const highlights = ref<Highlight[]>([
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed and delivering lightning-fast systems',
  },
  {
    icon: User,
    title: 'Collaboration',
    description: 'Working closely with teams to bring ideas to life',
  },
  {
    icon: Brain,
    title: 'Continues Learning ',
    description:
      'Driven by curiosity to understand how technologies work internally and apply that knowledge to build better systems.',
  },
])
</script>
<template>
  <section class="py-24 overflow-hidden relative" id="about">
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid lg:columns-2 gap-16 items-center">
        <!-- Left column -->
        <div class="space-y-8">
          <div class="animate-fade-in">
            <span class="text-secondary-foreground text-sm font-medium tracking-wider uppercase"
              >About me</span
            >
          </div>

          <h2
            class="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground"
          >
            Building the future,
            <span class="font-serif italic font-normal text-white"> one component at a time</span>
          </h2>
          <div class="space-y-4 text-muted-foreground animatate-fade-in animation-delay-200">
            <p>
              I'm a software engineer passionate about understanding how systems work under the hood
              and experimenting to replicate or improve them. I enjoy exploring the inner workings
              of technologies and turning that curiosity into practical solutions.
            </p>

            <p>
              I specialize primarily in backend development, designing scalable APIs and reliable
              services. When needed, I also work across the stack using technologies like Go,
              TypeScript, Vue, and React to deliver complete solutions.
            </p>

            <p>
              I'm particularly interested in low-level concepts, performance, and optimization, and
              I'm constantly learning to deepen my understanding of how systems operate. Outside of
              coding, I enjoy playing single-player video games and hope to start contributing to
              open-source projects in the near future.
            </p>
          </div>

          <div class="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p class="text-lg font-medium italic text-foreground"></p>
          </div>
        </div>
        <!-- Right column -->
        <div class="grid sm:grid-cols-2 gap-6">
          <div v-for="(highlight, idx) in highlights" :key="idx">
            <div
              class="glass p-6 rounded-2xl animate-fade-in"
              :style="{ animationDelay: `${idx + 1 * 100}ms` }"
            >
              <div
                class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"
              >
                <component :is="highlight.icon" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ highlight.title }}</h3>
              <p class="text-sm text-muted-foreground">{{ highlight.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
