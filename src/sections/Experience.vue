<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

type Experience = {
  period: string
  role: string
  company: string
  description: string
  technologies: string[]
  current: boolean
}

const experiences = computed<Experience[]>(() => [
  {
    period: t('experience.items.item1.period'),
    role: t('experience.items.item1.role'),
    company: t('experience.items.item1.company'),
    description: t('experience.items.item1.description'),
    technologies: ['Go', 'REST APIs', 'PostgreSQL', 'Docker'],
    current: true,
  },
  {
    period: t('experience.items.item2.period'),
    role: t('experience.items.item2.role'),
    company: t('experience.items.item2.company'),
    description: t('experience.items.item2.description'),
    technologies: ['Go', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Linux'],
    current: true,
  },
  {
    period: t('experience.items.item3.period'),
    role: t('experience.items.item3.role'),
    company: t('experience.items.item3.company'),
    description: t('experience.items.item3.description'),
    technologies: ['Flutter', 'SQLite', 'Mobile Development'],
    current: false,
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
          >{{ t('experience.sectionTitle') }}</span
        >
        <h2
          class="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
        >
          {{ t('experience.headingPart1') }}
          <span class="font-serif italic font-normal text-white">{{
            t('experience.headingPart2')
          }}</span>
        </h2>

        <p class="text-muted-foreground animate-fade-in animation-delay-200">
          {{ t('experience.description') }}
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <div
          class="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"
        />

        <!-- Experience items -->
        <div class="space-y-12">
          <div
            v-for="(experience, idx) in experiences"
            :key="idx"
            class="relative grid md:grid-cols-2 gap-8 animate-fade-in"
            :style="{ animationDelay: `${(idx + 1) * 150}ms` }"
          >
            <!-- Timeline dot -->
            <div
              class="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"
            >
              <span
                v-if="experience.current"
                class="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"
              ></span>
            </div>

            <!-- Content -->
            <div
              :class="{
                'md:pr-16': idx % 2 === 0,
                'md:text-right': idx % 2 === 0,
                'md:col-start-2': idx % 2 !== 0,
                'pl-16': idx % 2 !== 0,
                'pl-8': true,
                'md:pl-0': true,
              }"
            >
              <div
                class="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500"
              >
                <span class="text-sm text-primary font-medium">{{ experience.period }}</span>
                <h3 class="text-xl font-semibold mt-2">{{ experience.role }}</h3>
                <p class="text-muted-foreground">{{ experience.company }}</p>
                <p class="text-sm text-muted-foreground mt-4">{{ experience.description }}</p>
                <div class="flex flex-wrap gap-3 mt-4" :class="{ 'md:justify-end': idx % 2 === 0 }">
                  <span
                    v-for="(tech, idxTech) in experience.technologies"
                    :key="idxTech"
                    class="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
