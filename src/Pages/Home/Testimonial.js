import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews=[

        {
            _id:1,
            name: 'Md. Aminul Islam',
            location:'Feni',
            img:people1
        },
        {
            _id:2,
            name: 'Eshal Sarwana',
            location:'Chittagong',
            img: people2
        },
        {
            _id:3,
            name: 'Nasrin Akter',
            location:'Dhaka',
            img: people3
        },



    ];
    return (
    <section className='my-28'>
        <div className='flex justify-between'>
            <div>
                <h2 className='text-xl text-success text-bold'>Testimonials</h2>
                <h3 className='text-3xl'>What Our Payients Says</h3>

            </div>

            <div>
                <img className='w-24 lg:w-48' src={quote} alt=""/>

            </div>


        </div>


        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 '>
            {
                reviews.map(review => <Review
                key={review._id}
                review={review}
                ></Review>)
            }

        </div>
    </section>
    );
};

export default Testimonial;