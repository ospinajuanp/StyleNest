// app/api/env-check/route.ts
export async function GET() {
    return Response.json({
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    })
  }