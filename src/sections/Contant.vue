<script setup lang="ts">
import Button from '@/components/Button.vue'
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-vue-next'
import { ref, type Component } from 'vue'
import { send } from '@emailjs/browser'
type FormContact = {
  name: string
  email: string
  message: string
}
type Contact = {
  icon: Component
  label: string
  value: string
  href: string
}

type SubmitStatus = {
  type: 'success' | 'error' | null
  message: string
}
const contacts = ref<Contact[]>([
  {
    icon: Mail,
    label: 'Email',
    value: 'gonherenrique.com',
    href: 'mailto:emali.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+52 777-467-0429',
    href: 'tel:+527774670429',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Morelos, MX',
    href: '#',
  },
])
const formData = ref<FormContact>({ email: '', message: '', name: '' })
const isLoading = ref<boolean>(false)
const submitStatus = ref<SubmitStatus>({ type: null, message: '' })
const handleSubmit = async (event) => {
  event.preventDefault()
  isLoading.value = true
  submitStatus.value = { type: null, message: '' }
  try {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (!serviceID || !templateID || !publicKey) {
      throw new Error('EmailJS configuration is missing. Please check your environment variables.')
    }
    await send(
      serviceID,
      templateID,
      {
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message,
      },
      publicKey,
    )
    submitStatus.value = {
      type: 'success',
      message: `Message sent successfully! I'll get back to you soon.`,
    }
    formData.value = {
      message: '',
      email: '',
      name: '',
    }
  } catch (error) {
    console.error('EmailJS error', error)
    submitStatus.value = {
      type: 'success',
      message: 'Failed to send message. Please try again later.',
    }
  } finally {
    isLoading.value = false
  }
}
</script>
<template>
  <section id="contact" class="py-32 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
    </div>
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span
          class="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
        >
          Get In Touch
        </span>
        <h2
          class="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
        >
          Let's build
          <span class="font-serif italic font-normal text-white"> something great. </span>
        </h2>
        <p class="text-muted-foreground animate-fade-in animation-delay-200">
          Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how
          we can work together.
        </p>
      </div>
      <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div class="glass p-8 rounded-3xl border-primary/30 animate-fade-in animation-delay-300">
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label for="name" class="block text-sm font-medium mb-2">Name</label>
              <input
                v-model.trim="formData.name"
                type="text"
                id="name"
                required
                placeholder="Your name..."
                class="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-2">Email</label>
              <input
                v-model.trim="formData.email"
                required
                placeholder="your@email.com"
                type="email"
                name=""
                id="email"
                class="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium mb-2">Message</label>
              <textarea
                v-model="formData.message"
                type="text"
                required
                rows="5"
                placeholder="Your message..."
                id="message"
                class="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              />
            </div>
            <Button class="w-full" size="large" type="submit" :disabled="isLoading">
              <template v-if="isLoading">
                <span
                  class="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                ></span>
                Sending...
              </template>

              <template v-else>
                Send Message
                <Send class="w-5 h-5" />
              </template>
            </Button>
            <div
              v-if="submitStatus.type"
              class="flex items-center gap-3 p-4 rounded-xl"
              :class="
                submitStatus.type === 'success'
                  ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                  : 'bg-red-500/10 border border-red-500/20 text-red-400'
              "
            >
              <CheckCircle v-if="submitStatus.type === 'success'" class="w-5 h-5 shrink-0" />

              <AlertCircle v-else class="w-5 h-5 shrink-0" />

              <p class="text-sm">
                {{ submitStatus.message }}
              </p>
            </div>
          </form>
        </div>
        <div class="space-y-6 animate-fade-in animation-delay-400">
          <div class="glass rounded-3xl p-8">
            <h3 class="text-xl font-semibold mb-6">Contact Information</h3>
            <div class="space-y-4">
              <a
                v-for="(contact, idx) in contacts"
                :key="idx"
                :href="contact.href"
                class="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
              >
                <div
                  class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                >
                  <component :is="contact.icon" class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div class="text-sm text-muted-foreground">
                    {{ contact.label }}
                  </div>
                  <div class="font-medium">{{ contact.value }}</div>
                </div>
              </a>
            </div>
          </div>
          <!--Availability Card -->
          <div className="glass rounded-3xl p-8 border border-primary/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">Currently Available</span>
            </div>
            <p className="text-muted-foreground text-sm">
              I'm currently open to new opportunities and exciting projects. Whether you need a
              full-time engineer or a freelance, let's talk!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
