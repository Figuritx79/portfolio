<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button.vue'
import { Menu, X } from 'lucide-vue-next'
const navLinks = ref([
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
])
const isMobileMenuOpen = ref(false)
</script>
<template>
  <header class="fixed top-0 right-0 left-0 bg-transparent py-5">
    <nav class="container mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="text-xl font-bold tracking-tight hover:text-primary">
        EH <span class="text-primary">.</span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-1">
        <div class="glass rounded-full px-2 py-1 flex items-center gap-2">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
      <!-- CTA BUTTON -->
      <div>
        <Button size="sm" class-name="hidden md:block"> Contact Me </Button>
      </div>
      <!-- Mobile Button -->
      <button class="md:hidden p-2 text-foreground cursor-pointer" @click="isMobileMenuOpen = !isMobileMenuOpen">

        <Menu :size="24" v-if="!isMobileMenuOpen" />
        <X :size="24" v-else/>
      </button>
    </nav>
    <!-- Mobile menu -->
    <div class="md:hidden glass-strong animate-fade-in" v-if="isMobileMenuOpen">
      <div class="container px-6 py-6 mx-auto flex flex-col gap-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-lg text-muted-foreground hover:text-foreground py-2"
        >
          {{ link.label }}
        </a>

        <Button > Contact Me </Button>
      </div>
    </div>
  </header>
</template>
