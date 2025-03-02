// 'use server'

import '@/styles/SupplierContainer.css'

import SupplierCard from './SupplierCard'
import { Supplier } from './ListSuppliers';

const SupplierContainer = (data: Supplier[]) => {

  return (
    <div className='supplier'>
      <div className='supplier-title'>
        <h2>Top Services</h2>
      </div>
      <div className='supplier-list'>
        {data.map((supplier, index) => (
          <SupplierCard key={index} img={supplier.imageUrl} text={supplier.name} />
        ))}
      </div>
    </div>
  );
};

export default SupplierContainer;