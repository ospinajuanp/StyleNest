'use client'

import SuppliesContainer from '@/components/SuppliesContainer'
import Nav from '@/components/Nav'
import { ListSuppliersProps, Supplier } from '../lib/db/utils/ListSuppliers'
import ProfileContainer from '@/components/ProfileContainer'
import MarketplaceContainer from '@/components/MarketplaceContainer'
import '@/styles//MainPageSkeleton.css'
import { useState } from 'react'

export default function MainPageSkeleton({ data }: ListSuppliersProps) {
  const [searchResults, setSearchResults] = useState<Supplier[]>([]);

  const handleSearch = (results: Supplier[]) => {
    setSearchResults(results);
  }

  return (
    <>
      <Nav onSearch={handleSearch} />
      <main className="main-container">
        <SuppliesContainer data={searchResults.length > 0 ? searchResults : data} />
        <ProfileContainer data={searchResults.length > 0 ? searchResults : data} />
        <MarketplaceContainer data={searchResults.length > 0 ? searchResults : data} />
      </main>
    </>
  )
}