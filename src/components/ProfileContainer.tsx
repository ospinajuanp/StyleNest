import '@/styles/ProfileContainer.css'
import '@/styles/CommonTopStyles.css'
import ProfileCard from './ProfileCard';
import { ListSuppliersProps } from './ListSuppliers';

const ProfileContainer = ({ data }: ListSuppliersProps) => {
    return (
        <div className='container'>
            <div className='container-title '>
                <h2>Top Profiles</h2>
            </div>
            <div className='container-list profile-list'>
                {data?.map((profile) => {
                    return (
                        <ProfileCard key={profile.id} profile={profile} />
                        )
                    }
                )}
            </div>
            
        </div>
    );
};

export default ProfileContainer;