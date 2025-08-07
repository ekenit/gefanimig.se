Nuxt 4 Base Template for Fly.io – The Ultimate Setup

A sleek, powerful foundation for any modern web project, ready for SaaS, dashboards, landing pages, and more.
✅ Stack Summary
Layer Tech
Frontend Nuxt 4 + Tailwind CSS
Backend API Nuxt Server API (/server/api)
Database PostgreSQL on Fly.io
ORM Prisma
State Mgmt Pinia
Deployment Fly.io with custom Dockerfile
Styling Tailwind + optional UI libs
SEO & Meta useHead(), definePageMeta()
Extras Prerendering, Page transitions
🛠 Full Setup Checklist

1. Initialize Nuxt 4 App

npx nuxi@latest init my-app
cd my-app
npm install

2. Install Core Dependencies

# Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Prisma + Nuxt integration

npm install prisma @prisma/client @prisma/nuxt
npx prisma init

3. Configure Tailwind in Nuxt

nuxt.config.ts:

export default defineNuxtConfig({
css: ['@/assets/tailwind.css'],
build: { transpile: ['@prisma/client'] },
modules: ['@prisma/nuxt'],
})

assets/tailwind.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

tailwind.config.js:

module.exports = {
content: [
'./app.vue',
'./components/**/*.{vue,js}',
'./layouts/**/*.{vue,js}',
'./pages/**/*.{vue,js}',
'./plugins/**/*.{js,ts}',
'./nuxt.config.{js,ts}',
],
theme: { extend: {} },
plugins: [],
}

4. Set Up Prisma for Fly.io

Edit prisma/schema.prisma:

datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}

generator client {
provider = "prisma-client-js"
}

Then create and migrate your schema:

npx prisma migrate dev --name init

5. Use Prisma in Nuxt API

server/api/users.ts:

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async () => {
return await prisma.user.findMany()
})

6. Configure Environment Variables

.env:

DATABASE_URL="postgresql://your-fly-postgres-url"

Fly.io injects this when you attach the DB. 7. Create Fly.io PostgreSQL Instance

flyctl postgres create --name your-db-name
flyctl postgres attach --app your-app-name your-db-name

8. Custom Dockerfile for Nuxt + Prisma

Dockerfile:

FROM node:20-alpine
WORKDIR /app

COPY package\*.json ./
RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

CMD ["node", ".output/server/index.mjs"]

9. Fly.io Config (fly.toml)

app = "your-app-name"
primary_region = "ams"

[build]
dockerfile = "./Dockerfile"

[env]
NODE_ENV = "production"

[[services]]
internal_port = 3000
protocol = "tcp"

[[services.ports]]
port = 80
handlers = ["http"]

10. Deploy to Fly.io

fly launch
fly deploy

🎨 Tailwind + UI Best Practices
Tailwind Plugins

npm install -D @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio

Add to tailwind.config.js:

plugins: [
require('@tailwindcss/forms'),
require('@tailwindcss/typography'),
require('@tailwindcss/aspect-ratio'),
]

Optional UI Libraries

npm install @headlessui/vue

Or use Radix Vue / ShadCN Vue (WIP).
Design Tips

    Use container mx-auto px-4

    Stick to consistent spacing (gap-6, p-4)

    Use dark mode: dark:bg-gray-900

    Use @apply for class utilities

🔁 Pinia Store (Global State)

Install:

npm install @pinia/nuxt

Add to nuxt.config.ts:

modules: ['@pinia/nuxt']

Example store: stores/user.ts

export const useUserStore = defineStore('user', () => {
const user = ref(null)
const setUser = (u: any) => user.value = u
return { user, setUser }
})

🔍 SEO & Meta Setup

Install:

npm install @nuxtjs/seo

nuxt.config.ts:

modules: ['@nuxtjs/seo']

In pages:

definePageMeta({
title: 'Home - MyApp',
description: 'Welcome to the modern Nuxt base',
})

useHead({
title: 'Home - MyApp',
meta: [
{ name: 'description', content: 'Modern Nuxt base on Fly.io' },
{ property: 'og:title', content: 'Home - MyApp' },
]
})

🎞️ Page Transitions

In app.vue:

<template>
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'fade', mode: 'out-in' }" />
  </NuxtLayout>
</template>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity 0.4s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
}
</style>

⚙️ Extra Features
Feature Recommended Tool
Layouts layouts/default.vue
Auto imports Built-in
Auth Nuxt Auth / Lucia / Supabase
Testing @nuxt/test-utils, vitest
Linting eslint, prettier
Caching useFetch, nitro.cache()
Static files Place in public/
🧱 Folder Structure

my-app/
├─ assets/ # Tailwind CSS, fonts
├─ components/ # Auto-imported UI components
├─ layouts/ # App layouts
├─ pages/ # Route views
├─ public/ # Static assets
├─ server/ # API routes, Prisma utils
│ └─ api/
│ └─ utils/postgres.ts
├─ prisma/ # Prisma schema + migrations
├─ stores/ # Pinia stores
├─ .env # Secrets
├─ nuxt.config.ts # App config
└─ Dockerfile # Fly.io deployment

⚡ Prerendering (SSG) with Nuxt 4

Perfect for landing pages, docs, etc.

nuxt.config.ts:

export default defineNuxtConfig({
nitro: {
prerender: {
routes: ['/', '/about', '/contact'],
},
},
})

Dynamic Routes Example (/blog/[slug]):

routes: async () => {
const slugs = await fetchSomehow()
return slugs.map(slug => `/blog/${slug}`)
}

Per-page prerendering:

definePageMeta({ prerender: true })

Full static export (optional):

ssr: true,
nitro: { preset: 'static' }

✅ You can mix SSR and prerendering smartly in Nuxt 4.
✅ You're Now Ready To Build:

    A modern SaaS or app platform

    Landing pages and documentation

    Real-time dashboard with PostgreSQL

    Fly.io-native Nuxt 4 deployment

    Fully customizable design
