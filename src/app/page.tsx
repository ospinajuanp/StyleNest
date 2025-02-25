'use server'

import { createClient } from '@/lib/db/client'
import { supplyListMatcher } from '@/lib/db/utils/supplyListConstants'
import { JSX } from 'react'

export default async function Page() {
  //TODO move to api?
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('userSupplier')
    .select('*')
    .limit(2)
  // TODO: control errors properly in here
  if (error) {
    console.error('Error fetching data:', error)
  } else {
    console.log('Fetched data:', data)
  }

  const displaySupplyList = (supplyList: string): JSX.Element[] => {
    const supplyListArray = supplyList.split(',')
    return supplyListArray.map((supply, index) => (
      <li key={index}>{supplyListMatcher(supply)}</li>
    ))
  }

  return (
    <>
      {data?.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <ul>{displaySupplyList(user.supplyList)}</ul>
          <p>{user.description}</p>
          <img src={user.imageUrl} alt={`${user.name}'s profile`} />
        </div>
      ))}
    </>
  )
}