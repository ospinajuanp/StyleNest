"use client"; // Esto lo hace un componente cliente

import '@/styles/ProfileCard.css'
import { useRouter } from 'next/navigation';
// import { supplyListMatcher } from '@/lib/db/utils/supplyListConstants'
import Image from "next/image";



const ProfileCard = ({ profile } : { profile : { id: number,created_at: string, name: string, imageUrl: string, supplyList: string,description: string,  }})=> {
    const router = useRouter();
    

    const goToProfile = () => {
        router.push(`/profile?id=${profile.id}`); // Usa el ID real
    };

    // const displaySupplyList = (supplyList: string): React.ReactElement[] => {
    //     const supplyListArray = supplyList.split(',')
    //     return supplyListArray.map((supply, index) => (
    //         <li key={index}>{supplyListMatcher(supply)}</li>
    //     ))
    // }

    return (
        <div className='profile-card container-card' onClick={goToProfile}>
            <div className='container-card-img profile-card-img'>
                <Image src={profile.imageUrl} alt="Example" width={400} height={400} />
            </div>
            <div className='profile-card-text'>
                <div>{profile.name}</div>
                <div className='light'>{profile.supplyList}</div>
                <div>$ 40</div>
                
            </div>
        </div>
    );
};

export default ProfileCard;
