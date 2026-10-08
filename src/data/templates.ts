/** Chooses which grey wireframe composition Templates draws as the card thumbnail. */
export type TemplateThumbnail = 'pricing' | 'dashboard' | 'chat' | 'split' | 'mobile' | 'list'

export type Template = {
  id: string
  title: string
  description: string
  /** Short wordmark drawn above the title, where the original shows a partner logo. */
  wordmark: string
  thumbnail: TemplateThumbnail
  href: string
}

/** The two cards that span the full-width row. */
export const FEATURED_TEMPLATES: Template[] = [
  {
    id: 'stripe-subscriptions',
    title: 'Stripe Subscriptions Starter',
    description:
      'The all-in-one subscription starter kit for high-performance SaaS applications, powered by Stripe, Supabase, and Vercel.',
    wordmark: 'stripe',
    thumbnail: 'pricing',
    href: '#template-stripe',
  },
  {
    id: 'nextjs-starter',
    title: 'Next.js Starter',
    description:
      'A Next.js App Router template configured with cookie-based auth using Supabase, TypeScript and Tailwind CSS.',
    wordmark: 'next',
    thumbnail: 'dashboard',
    href: '#template-nextjs',
  },
]

/** The four-up row beneath the featured pair. */
export const TEMPLATES: Template[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    description:
      'An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Supabase.',
    wordmark: 'openai',
    thumbnail: 'chat',
    href: '#template-ai-chatbot',
  },
  {
    id: 'langchain',
    title: 'LangChain + Next.js Starter',
    description:
      'Starter template and example use-cases for LangChain projects in Next.js, including chat, agents, and retrieval.',
    wordmark: 'langchain',
    thumbnail: 'split',
    href: '#template-langchain',
  },
  {
    id: 'flutter-user-management',
    title: 'Flutter User Management',
    description:
      'Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.',
    wordmark: 'flutter',
    thumbnail: 'mobile',
    href: '#template-flutter',
  },
  {
    id: 'expo-starter',
    title: 'Expo React Native Starter',
    description:
      'An extended version of create-t3-turbo implementing authentication on both the web and mobile applications.',
    wordmark: 'expo',
    thumbnail: 'list',
    href: '#template-expo',
  },
]
