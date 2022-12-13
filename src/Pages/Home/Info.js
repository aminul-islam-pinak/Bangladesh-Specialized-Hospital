import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3  '>
            <InfoCard cardTitle="Opening Hour" img={clock}></InfoCard>
            <InfoCard cardTitle="Location" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us" img={phone}></InfoCard>
        </div>
    );
};

export default Info;