// 'use server'

import '@/styles/SupplierContainer.css'

import SupplierCard from './SupplierCard'
import { ListSuppliersProps } from './ListSuppliers';


const SupplierContainer = ({ data }: ListSuppliersProps) => {

    let supplierTop = ''
    data?.map((supplier) => {
        supplierTop = supplier.supplyList+',' + supplierTop
        supplierTop = supplierTop.slice(0,-1)
    })
    const supplierResult = supplierTop.split(',')
    

  return (
    <div className='container'>
        <div className='container-title'>
            <h2>Top Services</h2>
        </div>
        <div className='container-list supplier-list'>
            {supplierResult.map((supplier,index) => (
                <SupplierCard key={index} text={supplier} />
            ))}
        </div>
    </div>
);
};

export default SupplierContainer;