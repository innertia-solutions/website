<script setup lang="ts">
useSeoMeta({
  title: 'innertia — Tecnología que impulsa tu empresa',
  description: 'Arquitectura de sistemas, DevOps, consultoría y desarrollo de software. Soluciones tecnológicas para empresas chilenas.',
})

const darkPref = useCookie<boolean>('innertia-dark', { default: () => false })

useHead({
  htmlAttrs: { class: computed(() => darkPref.value ? 'dark' : '') },
})

function toggleDark() {
  darkPref.value = !darkPref.value
}

const isDark = computed(() => darkPref.value)

const heroMouseX = ref(0)
const heroMouseY = ref(0)
const heroHovering = ref(false)

function onHeroMouseMove(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  heroMouseX.value = e.clientX - rect.left
  heroMouseY.value = e.clientY - rect.top
}

const glowDotsStyle = computed(() => ({
  '--glow-x': heroHovering.value ? `${heroMouseX.value}px` : '-999px',
  '--glow-y': heroHovering.value ? `${heroMouseY.value}px` : '-999px',
}))

const nav = [
  { label: 'Servicios', to: '#servicios' },
  { label: 'Especialidades', to: '#especialidades' },
  { label: 'Proceso', to: '#proceso' },
  { label: 'Clientes', to: '#clientes' },
]

const services = [
  {
    number: '01',
    icon: 'i-lucide-code-2',
    title: 'Desarrollo de Software',
    description: 'Aplicaciones web y APIs a medida con Vue/Nuxt, Laravel y Node.js. Código limpio, entregable y mantenible. Sin promesas vacías, sin features que nadie pidió.',
  },
  {
    number: '02',
    icon: 'i-lucide-cloud',
    title: 'Infraestructura & Cloud',
    description: 'Diseño e implementación de arquitecturas cloud en AWS, GCP y Azure. Infraestructura como código, contenedores, Kubernetes y pipelines CI/CD para equipos que quieren entregar rápido.',
  },
  {
    number: '03',
    icon: 'i-lucide-git-merge',
    title: 'Integraciones B2B',
    description: 'Conectamos tu negocio con el ecosistema digital. SAP, Shopify, VTEX, ERPs y sistemas legados. Integraciones robustas, monitoreadas y que no se caen en producción.',
  },
  {
    number: '04',
    icon: 'i-lucide-radio',
    title: 'IoT, RFID & BLE',
    description: 'Implementaciones de hardware conectado para trazabilidad, control de activos y automatización. Desde el dispositivo hasta el dashboard, end-to-end.',
  },
]

const specialties = [
  {
    icon: 'i-simple-icons-kubernetes',
    title: 'Kubernetes',
    description: 'Orquestación de contenedores en producción. Helm charts, GitOps, observabilidad y autoscaling.',
  },
  {
    icon: 'i-lucide-cloud-cog',
    title: 'Cloud Architecture',
    description: 'Arquitecturas resilientes en AWS, GCP y Azure. Infraestructura como código y costos bajo control.',
  },
  {
    icon: 'i-lucide-share-2',
    title: 'Integraciones end-to-end',
    description: 'Conectamos sistemas legados, ERPs, ecommerce y APIs externas. Flujos monitoreados y tolerantes a fallos.',
  },
]

const process = [
  {
    title: 'Diagnóstico',
    description: 'Entendemos el problema real, no el síntoma. Una reunión técnica honesta antes de proponer cualquier solución.',
  },
  {
    title: 'Propuesta técnica',
    description: 'Arquitectura, stack y plan de entrega en lenguaje claro. Sin ambigüedad, sin letra chica.',
  },
  {
    title: 'Desarrollo',
    description: 'Iteraciones cortas, código limpio y entrega continua. Visibilidad total del avance en todo momento.',
  },
  {
    title: 'Soporte',
    description: 'Te acompañamos en producción y en lo que viene después. No desaparecemos al entregar.',
  },
]

const clients = [
  { name: 'Green', logo: '/logos/green.png', url: 'https://green.cl', light: false },
  { name: 'Sofnet', logo: '/logos/sofnet.png', url: 'https://sofnet.cl', light: false },
  { name: 'Openlink', logo: null, url: null, light: false },
  { name: 'ECOS Chile', logo: '/logos/ecos.png', url: 'https://ecos-chile.com', light: true },
  { name: 'Fundación Sumando', logo: '/logos/sumando.png', url: null, light: false },
]

const products = [
  {
    icon: 'i-lucide-database',
    title: 'Asetio',
    description: 'Gestión de activos en tiempo real. Ciclo de vida, asignaciones y mantenimiento desde un solo lugar.',
    badge: 'SaaS',
  },
  {
    icon: 'i-lucide-file-text',
    title: 'Documentia',
    description: 'Gestión documental inteligente. Organiza, procesa y recupera documentos con IA integrada.',
    badge: 'IA · SaaS',
  },
  {
    icon: 'i-lucide-sparkles',
    title: 'Pomely',
    description: 'Cotizaciones con IA y gestión avanzada de propuestas comerciales.',
    badge: 'IA · SaaS',
  },
  {
    icon: 'i-lucide-terminal-square',
    title: 'LocalRun',
    description: 'Entornos de desarrollo locales rápidos y reproducibles. Open source.',
    badge: 'Open Source',
  },
]
</script>

<template>
  <div class="bg-white text-slate-900 antialiased dark:bg-[#080f20] dark:text-white">

    <!-- FLOATING PILL NAV -->
    <header class="sticky top-4 z-50 px-4">
      <nav class="max-w-5xl mx-auto flex items-center justify-between py-2 ps-5 pe-2 rounded-[26px] bg-white/90 dark:bg-[#0c1628]/95 border border-slate-200/70 dark:border-white/10 backdrop-blur-md shadow-sm">
        <a href="/" class="flex-none block">
          <img v-if="isDark" src="/isologo-light.png" alt="innertia" class="block h-7 w-auto">
          <img v-else src="/isologo-dark.png" alt="innertia" class="block h-7 w-auto">
        </a>

        <div class="hidden md:flex items-center">
          <a
            v-for="item in nav"
            :key="item.label"
            :href="item.to"
            class="px-3 py-4 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
          >
            {{ item.label }}
          </a>
        </div>

        <div class="flex items-center gap-x-2">
          <button
            class="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 transition"
            @click="toggleDark"
          >
            <Icon :name="isDark ? 'i-lucide-sun' : 'i-lucide-moon'" class="h-4 w-4" />
          </button>
          <a
            href="mailto:hola@innertia.cl"
            class="inline-flex items-center gap-x-2 py-2 px-4 bg-sky-500 text-white text-sm font-medium rounded-full hover:bg-sky-400 transition"
          >
            Hablemos
          </a>
        </div>
      </nav>
    </header>

    <main id="content">

      <!-- HERO -->
      <div
        class="relative overflow-hidden"
        @mousemove="onHeroMouseMove"
        @mouseenter="heroHovering = true"
        @mouseleave="heroHovering = false"
      >
        <div class="dot-grid-far pointer-events-none absolute inset-0" />
        <div class="dot-grid pointer-events-none absolute inset-0" />
        <div class="dot-grid-glow pointer-events-none absolute inset-0" :style="glowDotsStyle" />

        <div class="relative max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
          <h1 class="font-semibold text-5xl md:text-6xl leading-[1.1] tracking-tight">
            El <span class="text-sky-500">aliado tecnológico</span> que tu empresa necesitaba.
          </h1>
          <div class="mt-5 max-w-2xl">
            <p class="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              Arquitectura, DevOps, consultoría y desarrollo de software. Un equipo pequeño y enfocado que entrega sin intermediarios ni burocracia.
            </p>
          </div>
          <div class="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <a
              href="#servicios"
              class="inline-flex items-center gap-x-2 py-2.5 px-5 bg-sky-500 text-white text-sm font-medium rounded-full hover:bg-sky-400 transition"
            >
              Ver servicios
            </a>
            <a
              href="mailto:hola@innertia.cl"
              class="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
            >
              hola@innertia.cl →
            </a>
          </div>
        </div>
      </div>
      <!-- END HERO -->

      <!-- CLIENTS -->
      <div id="clientes" class="pb-16">
        <div class="max-w-5xl px-4 xl:px-0 mx-auto">
          <div class="mb-6">
            <p class="text-sm text-slate-400 dark:text-slate-500">Empresas que confían en nosotros</p>
          </div>
          <div class="flex flex-wrap items-center justify-between gap-6 pb-10 border-b border-slate-100 dark:border-white/10">
            <template v-for="c in clients" :key="c.name">
              <component
                :is="c.url ? 'a' : 'div'"
                v-bind="c.url ? { href: c.url, target: '_blank', rel: 'noopener noreferrer' } : {}"
                class="group flex h-12 w-36 items-center justify-center grayscale transition duration-200 hover:grayscale-0"
              >
                <img
                  v-if="c.logo"
                  :src="c.logo"
                  :alt="c.name"
                  :class="[
                    'max-h-12 max-w-[144px] object-contain transition duration-200',
                    c.light
                      ? 'invert dark:invert-0'
                      : 'dark:invert dark:group-hover:invert-0',
                  ]"
                >
                <span v-else class="text-3xl font-bold text-slate-700 dark:text-slate-300 tracking-tight">{{ c.name }}</span>
              </component>
            </template>
          </div>
        </div>
      </div>
      <!-- END CLIENTS -->

      <!-- SERVICES -->
      <div id="servicios">
        <div class="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
          <div class="max-w-3xl mb-10 lg:mb-14">
            <h2 class="font-semibold text-2xl md:text-4xl md:leading-tight">Servicios</h2>
            <p class="mt-1 text-slate-500 dark:text-slate-400">
              Un equipo pequeño y enfocado que entrega resultados reales. Sin intermediarios, sin humo.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 border border-slate-100 dark:border-white/10 divide-y lg:divide-x divide-slate-100 dark:divide-white/10 rounded-xl overflow-hidden">
            <div
              v-for="s in services"
              :key="s.title"
              class="group relative p-6 md:p-8 flex flex-col bg-white dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/[0.04] transition border-b last:border-b-0 lg:[&:nth-child(3)]:border-b-0 border-slate-100 dark:border-white/10"
            >
              <div class="mb-5 flex items-start justify-between">
                <span class="font-mono text-xs font-semibold text-slate-300 dark:text-white/20">{{ s.number }}</span>
                <Icon :name="s.icon" class="h-5 w-5 text-sky-500 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <h3 class="mb-2 font-semibold text-xl">{{ s.title }}</h3>
              <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{{ s.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- END SERVICES -->

      <!-- SPECIALTIES -->
      <div id="especialidades">
        <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-16 mx-auto">
          <div class="max-w-3xl mb-10 lg:mb-14">
            <h2 class="font-semibold text-2xl md:text-4xl md:leading-tight">Especialidades</h2>
            <p class="mt-1 text-slate-500 dark:text-slate-400">
              Donde realmente brillamos. Las áreas en las que tenemos profundidad técnica probada.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              v-for="sp in specialties"
              :key="sp.title"
              class="group rounded-2xl border border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6 hover:border-sky-500/40 dark:hover:border-sky-500/40 transition"
            >
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500 mb-5">
                <Icon :name="sp.icon" class="h-5 w-5" />
              </div>
              <h3 class="font-semibold text-lg mb-2">{{ sp.title }}</h3>
              <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{{ sp.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- END SPECIALTIES -->

      <!-- PROCESS -->
      <div id="proceso">
        <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          <div class="max-w-3xl mb-10 lg:mb-14">
            <h2 class="font-semibold text-2xl md:text-4xl md:leading-tight">Nuestro approach</h2>
            <p class="mt-1 text-slate-500 dark:text-slate-400">
              No trabajamos con tendencias. Usamos herramientas que conocemos en profundidad y un proceso que elimina la incertidumbre.
            </p>
          </div>

          <div class="max-w-2xl">
            <p class="text-sky-500 text-xs font-semibold uppercase tracking-widest mb-6">Proceso</p>

            <div
              v-for="(step, i) in process"
              :key="step.title"
              class="flex gap-x-5 ms-1"
            >
              <div
                class="relative"
                :class="i < process.length - 1 ? 'after:absolute after:top-8 after:bottom-0 after:start-4 after:-translate-x-px after:border-s after:border-slate-200 dark:after:border-white/10' : ''"
              >
                <div class="relative z-10 size-8 flex justify-center items-center">
                  <span class="flex shrink-0 justify-center items-center size-8 border border-slate-200 dark:border-white/10 text-sky-500 font-semibold text-xs rounded-full">
                    {{ i + 1 }}
                  </span>
                </div>
              </div>
              <div class="grow pt-0.5 pb-8 sm:pb-12">
                <p class="text-sm lg:text-base text-slate-500 dark:text-slate-400">
                  <span class="font-medium text-slate-900 dark:text-white">{{ step.title }}:</span>
                  {{ step.description }}
                </p>
              </div>
            </div>

            <a
              href="mailto:hola@innertia.cl"
              class="inline-flex items-center gap-x-2 py-2 px-4 bg-sky-500 text-white text-sm font-medium rounded-full hover:bg-sky-400 transition"
            >
              <Icon name="i-lucide-phone" class="h-4 w-4" />
              Agendar una llamada
            </a>
          </div>
        </div>
      </div>
      <!-- END STACK + PROCESS -->

      <!-- PRODUCTS -->
      <div>
        <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          <div class="max-w-3xl mb-10 lg:mb-14">
            <h2 class="font-semibold text-2xl md:text-4xl md:leading-tight">Productos propios</h2>
            <p class="mt-1 text-slate-500 dark:text-slate-400">
              No solo consultamos. También construimos productos que resuelven problemas reales.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="p in products"
              :key="p.title"
              class="rounded-2xl border border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6"
            >
              <div class="mb-3 flex items-start justify-between gap-2">
                <div class="flex items-center gap-2">
                  <Icon :name="p.icon" class="h-4 w-4 shrink-0 text-sky-500" />
                  <span class="font-semibold">{{ p.title }}</span>
                </div>
                <span class="shrink-0 rounded-full bg-slate-100 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {{ p.badge }}
                </span>
              </div>
              <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{{ p.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- END PRODUCTS -->

      <!-- CONTACT -->
      <div id="contact">
        <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          <div class="border border-slate-100 dark:border-white/10 rounded-2xl p-8 lg:p-14 bg-slate-50 dark:bg-white/[0.02]">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 class="font-semibold text-2xl md:text-4xl md:leading-tight">¿Tienes un proyecto en mente?</h2>
                <p class="mt-3 text-slate-500 dark:text-slate-400">
                  Conversemos. Sin compromiso, sin burocracia. Solo una charla técnica honesta.
                </p>
                <div class="mt-6 flex flex-col gap-3">
                  <div class="flex items-center gap-3">
                    <Icon name="i-lucide-mail" class="h-4 w-4 text-sky-500 shrink-0" />
                    <a href="mailto:hola@innertia.cl" class="text-sm text-slate-500 dark:text-slate-400 hover:text-sky-500 transition">
                      hola@innertia.cl
                    </a>
                  </div>
                  <div class="flex items-center gap-3">
                    <Icon name="i-lucide-map-pin" class="h-4 w-4 text-sky-500 shrink-0" />
                    <span class="text-sm text-slate-500 dark:text-slate-400">Santiago de Chile</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-center md:justify-end">
                <a
                  href="mailto:hola@innertia.cl"
                  class="inline-flex items-center gap-x-2 py-3 px-8 bg-sky-500 text-white font-medium rounded-full hover:bg-sky-400 transition text-sm"
                >
                  Escribirnos →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END CONTACT -->

    </main>

    <!-- FOOTER -->
    <footer class="border-t border-slate-100 dark:border-white/10 py-8">
      <div class="max-w-5xl px-4 xl:px-0 mx-auto">
        <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
          <img v-if="isDark" src="/isologo-light.png" alt="innertia" class="block h-7 w-auto">
          <img v-else src="/isologo-dark.png" alt="innertia" class="block h-7 w-auto">
          <p class="text-sm text-slate-400 dark:text-slate-500">{{ new Date().getFullYear() }} innertia · Chile</p>
          <a href="mailto:hola@innertia.cl" class="text-sm text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition">
            hola@innertia.cl
          </a>
        </div>
      </div>
    </footer>

  </div>
</template>
