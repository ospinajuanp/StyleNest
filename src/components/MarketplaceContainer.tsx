import React from 'react';
import { ListSuppliersProps } from '../lib/db/utils/ListSuppliers';
import MarketplaceCard from './MarketplaceCard';
import '@/styles/MarketplaceContainer.css';

const MarketplaceContainer: React.FC<ListSuppliersProps> = ({ data }) => {
  return (
    <section className="container">
      <h1 className="container-title">Los mejores cerca de tí</h1>
      <div className="marketplace-list">
        {data && data.length > 0 ? (
          data.map((profile) => (
            <MarketplaceCard key={profile.id} profile={profile} />
          ))
        ) : (
          <p className="no-data-message">No hay perfiles disponibles.</p>
        )}
      </div>
    </section>
  );
};

export default MarketplaceContainer;
