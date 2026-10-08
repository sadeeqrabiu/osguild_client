export type Testimonial = {
  id: string
  handle: string
  quote: string
}

/*
 * Transcribed from the community wall in the source material.
 *
 * The original renders several cards at very low opacity behind an edge fade;
 * where a card's text was not legible enough to transcribe, it is left out
 * rather than paraphrased, since these are attributed to real accounts.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'nerdburn',
    handle: '@nerdburn',
    quote:
      "It's fun, feels lightweight, and really quick to spin up user auth and a few tables. Almost too easy! Highly recommend.",
  },
  {
    id: 'patrickc',
    handle: '@patrickc',
    quote:
      'Very impressed by @supabase’s growth. For new startups, they seem to have gone from "promising" to "standard" in remarkably short order.',
  },
  {
    id: 'shadcn',
    handle: '@shadcn',
    quote: 'Supabase is really good. ⚡',
  },
  {
    id: 'aliahsan',
    handle: '@Aliahsan_sfv',
    quote:
      "Okay, I finally tried Supabase today and wow... why did I wait so long? 😅 Went from 'how do I even start' to having auth + database + real-time updates working in like 20 minutes. Sometimes the hype is actually justified! #Supabase",
  },
  {
    id: 'yatsiv',
    handle: '@yatsiv_yuriy',
    quote:
      'Supabase is the best product experience I’ve had in years.\nNot just tech - taste.\nFrom docs to latency to the URL structure that makes you think "oh, that’s obvious"\nFeels like every other platform should study how they built it\n@supabase I love you',
  },
  {
    id: 'adeelibr',
    handle: '@adeelibr',
    quote:
      '@supabase shout out, their MCP is awesome. It’s helping me create better row securities and telling me best practises for setting up a supabase app',
  },
  {
    id: 'tyronbache',
    handle: '@TyronBache',
    quote:
      'Really impressed with @supabase’s Assistant.\n\nIt has helped me troubleshoot and solve complex CORS Configuration issues on Pinger.',
  },
  {
    id: 'minimeditor',
    handle: '@MinimEditor',
    quote:
      'I’ve always used Supabase just as a database.\n\nYesterday, I helped debug a founder’s vibe-coding project built with React + React Router — no backend server.\nThe “backend” was entirely Supabase Edge Functions as the API.',
  },
  {
    id: 'orlandopedro',
    handle: '@orlandopedro_',
    quote: 'Love @supabase custom domains\n\nmakes the auth so much better',
  },
  {
    id: 'sdusteric',
    handle: '@sdusteric',
    quote:
      'Loving #Supabase MCP. Claude Code would not only plan what data we should save but also figure out a migration script by checking what the schema looks like on Supabase via MCP.',
  },
]
