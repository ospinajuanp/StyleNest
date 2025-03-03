"use client";

import { faArrowLeft, faCalendarDays,faClock, faLocationDot, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearchParams, useRouter  } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import './profile.css'

export default function Page() {
    const router = useRouter();
    const [profile, setProfile] = useState(0);
    const [services, setServices] = useState([0]);

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    useEffect(() => {
        const services = document.getElementById('services');
        const about = document.getElementById('about');
        const price = document.getElementById('price');

        const servicesContent = document.getElementById('services-content');
        const aboutContent = document.getElementById('about-content');
        const priceContent = document.getElementById('price-content');

        if (profile === 0 && services && servicesContent && about && price && aboutContent && priceContent) {
            about.classList.remove('selected');
            price.classList.remove('selected');
            services.className = 'selected';
            servicesContent.classList.remove('hidden');
            servicesContent.className = 'services';
            servicesContent.className = 'visible';
            aboutContent.className = 'hidden';
            priceContent.className = 'hidden';
        }
        if (profile === 1 && about && aboutContent && services && price && servicesContent && priceContent) {
            services.classList.remove('selected');
            price.classList.remove('selected');
            about.className = 'selected';
            aboutContent.classList.remove('hidden');
            aboutContent.className = 'visible';
            servicesContent.className = 'hidden';
            priceContent.className = 'hidden';
        }
        if (profile === 2 && price && priceContent && services && about && servicesContent && aboutContent) {
            services.classList.remove('selected');
            about.classList.remove('selected');
            price.className = 'selected';
            priceContent.classList.remove('hidden');
            priceContent.className = 'visible';
            servicesContent.className = 'hidden';
            aboutContent.className = 'hidden';

        }
    }, [profile,setProfile]);

    useEffect(() => {
        const servicesContent = document.getElementById('services-content');
        services.length === 0 && servicesContent ? setServices([0]) : null
        if (servicesContent) {
            for (let i = 0; i < servicesContent.children.length; i++) {
                servicesContent.children[i].className = 'item';
            }
        }
        services.forEach((service) => {
            if (servicesContent) {
                servicesContent.children[service].className = 'item selected';
            }

            
        })
    }, [services]);

    const changeProfile = (index: number) => {
        setProfile(index);
    };

    const toggleServices = (number: number) => {
        services.indexOf(number) !== -1 ? setServices(services.filter((item) => item !== number)) : setServices([...services, number]);
    };

    const goToProfile = () => {
        router.push(`/`); 
    };
    
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); 

    return (
        <div className='profile'>
            <div className='profile-header'>
                <div className='background-header'></div>
                <div className='profile-header_back' onClick={goToProfile}><FontAwesomeIcon icon={faArrowLeft} />Back</div>
                <div className='profile-header_info'>
                    <div>NAME</div>
                    <div>SERVICES</div>
                    <div>PRICE</div>
                </div>
                <div className='profile-header_img'>
                    <img src="https://rznkuhtjleowjbvrmztk.supabase.co/storage/v1/object/public/userSupplierImage//barber.jpg" alt=""/>
                </div>
            </div>

            <div className='profile-actions'>
                <div className='profile-actions_item'>
                <FontAwesomeIcon icon={faLocationDot} />
                    DIRECTION
                </div>
                <div className='profile-actions_item'>
                <FontAwesomeIcon icon={faShareNodes} />
                    SHARE
                </div>
            </div>

            <div className='profile-info'>
                <div className='profile-info_select'>
                    <div id='services' onClick={() => changeProfile(0)}>SERVICES</div>
                    <div id='about' onClick={() => changeProfile(1)}>ABOUT</div>
                    <div id='price' onClick={() => changeProfile(2)}>PRICE</div>
                </div>
                <div className='profile-info_content'>
                    <div id='services-content' className='services hidden'>
                        <div className='item selected' onClick={() => toggleServices(0)}>BarberShop</div>
                        <div className='item' onClick={() => toggleServices(1)}>Haircut</div>
                        <div className='item' onClick={() => toggleServices(2)}>BarberShop</div>
                        <div className='item' onClick={() => toggleServices(3)}>Haircut</div>
                    </div>
                    <div id='about-content' className='about hidden'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos earum tenetur fugiat sapiente eius consectetur debitis totam, et commodi accusantium dolorum nostrum repellendus. Quis, similique! Ullam consequatur consectetur eos voluptatibus!
                    </div>
                    <div id='price-content' className='price hidden'>
                        <table className="price-table">
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Haircut</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>BarberShop</td>
                                    <td>45</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className='profile-works'>
                <div className='profile-works_title'>
                    Recent Works
                </div>
                <div className='profile-works_imgs'>
                <div ><img src="https://rznkuhtjleowjbvrmztk.supabase.co/storage/v1/object/public/userSupplierImage//barber.jpg" alt="" /></div>
                    <div><img src="https://rznkuhtjleowjbvrmztk.supabase.co/storage/v1/object/public/userSupplierImage//barber.jpg" alt="" /></div>
                    <div><img src="https://rznkuhtjleowjbvrmztk.supabase.co/storage/v1/object/public/userSupplierImage//barber.jpg" alt="" /></div>
                    <div><img src="https://rznkuhtjleowjbvrmztk.supabase.co/storage/v1/object/public/userSupplierImage//barber.jpg" alt="" /></div>
                </div>
            </div>

            <div className='profile-appointment'>
                <a className='profile-appointment_link' href="/" target="_blank" rel="noopener noreferrer">
                    <span className='profile-appointment_text'>Appointment</span>
                    <div className='profile-appointment_icons'>
                        <FontAwesomeIcon className='calendar' icon={faCalendarDays} />
                        <FontAwesomeIcon className='clock' icon={faClock} />
                    </div>
                </a>
            </div>
        </div>
    )
}