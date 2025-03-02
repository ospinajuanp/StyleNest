import '@/styles/SupplierCard.css'

const SupplierCard = ({ img, text }: { img: string; text: string }) => {
    return (
        <div className='supplier-card'>
            <div className='supplier-card-img'>
                <div>{img}</div>
            </div>
            <div className='supplier-card-text'>{text}</div>
        </div>
    );
};

export default SupplierCard;