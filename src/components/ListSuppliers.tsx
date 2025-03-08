// 'use server'

import { JSX } from 'react'
import { supplyListMatcher } from '@/lib/db/utils/supplyListConstants'
import Image from "next/image";
import Link from 'next/link'

const displaySupplyList = (supplyList: string): JSX.Element[] => {
  const supplyListArray = supplyList.split(',')
  return supplyListArray.map((supply, index) => (
    <li key={index}>{supplyListMatcher(supply)}</li>
  ))
}

export interface Supplier {
  id: number;
  name: string;
  supplyList: string;
  description: string;
  imageUrl: string;
  created_at: string;
}

export interface ListSuppliersProps {
  data: Supplier[] | null; // TODO type well xD
}

export default function ListSuppliers({ data }: ListSuppliersProps) {
  return (
    <>
      {data?.map((user) => (
        <Link key={user.id} href={`/profile/${user.id}`}>
          <h1>{user.name}</h1>
          <ul>{displaySupplyList(user.supplyList)}</ul>
          <p>{user.description}</p>
          {/* TODO use next image */}
          <Image src={user.imageUrl} alt={`${user.name}'s profile`} width={400} height={400} />
        </Link>
      ))}
    </>
  )
}