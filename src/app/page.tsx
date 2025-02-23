'use cliente'

import { createClient } from '@/lib/db/client'

export default async function Page() {
  const supabase = await createClient()
  console.log('Supabase client initialized:', supabase)
  const { data } = await supabase.from('userSupplier').select('*')
  const { error } = await supabase
    .from('userSupplier')
    .update({ name: 'piano' })
    .eq('id', 1)

  if (error) {
    console.error('Error fetching data:', error)
  } else {
    console.log('Fetched data:', data)
  }
  return (
    <>
      {data?.map((user) => user.name)}
    </>
  )
}