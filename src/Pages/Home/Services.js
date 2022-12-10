import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services=[

        {
            _id:1,
            name: 'Fluoride Treatment',
            des:'if a dog chews shoes whose shoes does he choose?',
            img: fluoride
        },
        {
            _id:2,
            name: 'Cavity Filling',
            des:'if a dog chews shoes whose shoes does he choose?',
            img: cavity
        },
        {
            _id:3,
            name: 'Teeth Whitening',
            des:'if a dog chews shoes whose shoes does he choose?',
            img: whitening
        },



    ];
    return (
       
        <div className='my-28'>
            <div className='text-center'>
            <h2 className='text-success font-bold uppercase text-xl'>Our services</h2>
            <h4 className='text-4xl'>Service We Provide</h4>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 '>
            {
                services.map(service=> <Service
                key={service._id}
                service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;