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

const SupplierCard = ({ text }: { text: 'barbershop' | 'haircut' | 'manicure' | 'pedicure' | 'makeup' | 'massage' | 'facial' }) => {
  return (
    <div className='supplier-card'>
      <div className='supplier-icon'>
        <div>{icon[text]} </div>
      </div>
      <div className='supplier-text'>{supplyListMatcher(text)}</div>
    </div>
  );

};

export default SupplierCard;