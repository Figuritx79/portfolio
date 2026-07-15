<script setup lang="ts">
import { ChevronDown, Globe } from 'lucide-vue-next'
import I18nManager from '@/i18n/manger'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n({ useScope: 'global' })
const supportedLocales = I18nManager.supportedLocales
const switchLanguage = async (newLocale: string) => {
  await I18nManager.setLocale(newLocale)
}

const onLanguageChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  switchLanguage(target.value)
}
</script>

<template>
  <div
    class="group relative flex items-center rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-primary"
  >
    <Globe class="pointer-events-none absolute left-2.5 size-4 shrink-0" aria-hidden="true" />
    <select
      :value="locale"
      @change="onLanguageChange"
      :aria-label="t('common.selectLanguage')"
      class="appearance-none bg-transparent py-2 pl-8 pr-7 outline-none cursor-pointer"
    >
      <option
        v-for="loc in supportedLocales"
        :key="loc"
        :value="loc"
        class="bg-background text-foreground"
      >
        {{ loc?.toUpperCase() }}
      </option>
    </select>
    <ChevronDown
      class="pointer-events-none absolute right-2 size-3 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
      aria-hidden="true"
    />
  </div>
</template>
