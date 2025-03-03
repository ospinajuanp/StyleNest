import '@/styles/SupplierCard.css'

const SupplierCard = ({text }: {text: string }) => {
    return (
        <div className='supplier-card container-card'>
            <div className='container-card-img supplier-card-img '>
                {/* TODO research for proper use of next IMAGE */}
                {/* TODO add image according to property */}
                <div>🐕 </div>
            </div>
            <div className='supplier-card-text'>{text}</div>
        </div>
    );

};

export default SupplierCard;