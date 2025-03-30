// 'use server'

import '@/styles/SuppliesContainer.css';
import SupplierCard from './SupplierCard';
import { ListSuppliersProps } from './ListSuppliers';
import { useRef, useState } from 'react';

const SuppliesContainer = ({ data }: ListSuppliersProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  let supplierTop = '';
  data?.forEach((supplier) => {
    supplierTop += supplier.supplyList + ',';
  });

  const supplierResult = supplierTop.slice(0, -1).split(',');

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="top-services">
      <h2 className="title">Servicios Top</h2>
      <div
        className="supplies-list"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {supplierResult.length > 0 ? (
          supplierResult.map((supplier, index) => (
            <SupplierCard key={index} text={supplier} />
          ))
        ) : (
          <p className="no-data-message text-gray-500">No hay servicios disponibles.</p>
        )}
      </div>
    </section>
  );
};

export default SuppliesContainer;
