'use client'

import SupplierContainer from '@/components/SupplierContainer'
import Nav from '@/components/Nav'
import ListSuppliers, { ListSuppliersProps } from './ListSuppliers'
import { useState } from 'react'

export default function MainPageSkeleton({ data }: ListSuppliersProps) {
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const x = [{
    img: "🍕",
    text: "Pizzas"
  },
  {
    img: "🐈",
    text: "Gato"
  },
  {
    img: "🐕",
    text: "Perro"
  },
  ]

  const handleSearch = (results: any[]) => {
    setSearchResults(results);
  }

  return (
    <>
      <Nav onSearch={handleSearch} />
      <SupplierContainer data={x} />
      <ListSuppliers data={searchResults.length > 0 ? searchResults : data} />
    </>
  )
}