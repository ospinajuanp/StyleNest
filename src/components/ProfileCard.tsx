"use client";

import '@/styles/ProfileCard.css';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { supplyListMatcher } from '@/lib/db/utils/supplyListConstants';

const ProfileCard = ({ profile }: { profile: { id: number, created_at: string, name: string, imageUrl: string, supplyList: string, description: string } }) => {
  const router = useRouter();

  const goToProfile = () => {
    router.push(`/profile/${profile.id}`);
  };

  const formatSupplyList = (supplyList: string): string => {
    return supplyList.split(',').map((supply) => supplyListMatcher(supply)).join(', ');
  };

  return (
    <div className='profile-card' onClick={goToProfile}>
      <Image className='profile-card-img' src={profile.imageUrl} alt={profile.name} width={400} height={400} />
      <div className='profile-card-text'>
        <p>{profile.name}</p>
        <p className='light'>
          {formatSupplyList(profile.supplyList)}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
