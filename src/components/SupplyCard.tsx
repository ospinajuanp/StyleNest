import { Supply } from '@/lib/db/utils/ListSuppliers';
import { supplyListMatcher } from '@/lib/db/utils/supplyListConstants';
import '@/styles/SupplierCard.css'

// TODO change for SVGs offers better compatibility and performance
const icon = {
  'barbershop': '🧔',
  'haircut': '💇',
  'manicure': '💅',
  'pedicure': '🦶',
  'makeup': '💄',
  'massage': '💆',
  'facial': '🧖',
}

interface SupplyCardProps {
  supply: Supply;
}

const SupplyCard = ({ supply }: SupplyCardProps) => {
  return (
    <div className='supplier-card'>
      <div className='supplier-icon'>
        <div>{icon[supply]} </div>
      </div>
      <div className='supplier-text'>{supplyListMatcher(supply)}</div>
    </div>
  );
};

export default SupplyCard;