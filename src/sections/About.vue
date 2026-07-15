<script setup lang="ts">
import { Brain, Code2, Rocket, User } from 'lucide-vue-next'
import { computed, type Component } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

type Highlight = {
  icon: Component
  title: string
  description: string
}

const highlights = computed<Highlight[]>(() => [
  {
    icon: Code2,
    title: t('about.highlightCleanCode'),
    description: t('about.highlightCleanCodeDesc'),
  },
  {
    icon: Rocket,
    title: t('about.highlightPerformance'),
    description: t('about.highlightPerformanceDesc'),
  },
  {
    icon: User,
    title: t('about.highlightCollaboration'),
    description: t('about.highlightCollaborationDesc'),
  },
  {
    icon: Brain,
    title: t('about.highlightContinuousLearning'),
    description: t('about.highlightContinuousLearningDesc'),
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
            <span class="text-secondary-foreground text-sm font-medium tracking-wider uppercase">{{
              t('about.sectionTitle')
            }}</span>
          </div>

          <h2
            class="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground"
          >
            {{ t('about.headingPart1') }}
            <span class="font-serif italic font-normal text-white">{{
              t('about.headingPart2')
            }}</span>
          </h2>
          <div class="space-y-4 text-muted-foreground animatate-fade-in animation-delay-200">
            <p>{{ t('about.paragraph1') }}</p>
            <p>{{ t('about.paragraph2') }}</p>
            <p>{{ t('about.paragraph3') }}</p>
          </div>

          <div class="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p class="text-lg font-medium italic text-foreground">
              {{ t('about.mission') }}
            </p>
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
