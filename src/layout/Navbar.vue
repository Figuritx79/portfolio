<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '@/components/Button.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { Menu, X } from 'lucide-vue-next'

const { t } = useI18n()

const navLinks = computed(() => [
  { href: '#about', label: t('navbar.about') },
  { href: '#projects', label: t('navbar.projects') },
  { href: '#experience', label: t('navbar.experience') },
])
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 transition-all duration-500 z-50',
      isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5',
    ]"
  >
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
      <!-- Language Switcher + CTA -->
      <div class="hidden md:flex items-center gap-2">
        <LanguageSwitcher />
        <Button size="sm" is-link link="#contact">{{ t('common.contactMe') }}</Button>
      </div>
      <!-- Mobile Button -->
      <button
        class="md:hidden p-2 text-foreground cursor-pointer"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <Menu :size="24" v-if="!isMobileMenuOpen" />
        <X :size="24" v-else />
      </button>
    </nav>
    <!-- Mobile menu -->
    <div class="md:hidden glass-strong animate-fade-in" v-if="isMobileMenuOpen">
      <div class="container px-6 py-6 mx-auto flex flex-col gap-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="
            () => {
              isMobileMenuOpen = false
            }
          "
          class="text-lg text-muted-foreground hover:text-foreground py-2"
        >
          {{ link.label }}
        </a>

        <div class="pt-2 border-t border-border/40">
          <LanguageSwitcher />
        </div>

        <Button is-link link="#contact">{{ t('common.contactMe') }}</Button>
      </div>
    </div>
  </header>
</template>
