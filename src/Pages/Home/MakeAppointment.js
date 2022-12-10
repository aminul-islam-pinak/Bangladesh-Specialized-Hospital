import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} 
         className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt=""/>

            </div>
            <div className='flex-1 px-5'>
                <h2 className='text-xl text-success py-2'>Appointment</h2>
                <h3 className='text-3xl text-white py-2'>Make Appointment</h3>
                <p className='text-white py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget justo tellus. Nullam nec fringilla erat. Nullam condimentum elit in dui imperdiet tristique. Aliquam erat volutpat. Morbi a laoreet neque. Aenean arcu urna, elementum quis laoreet eget, vestibulum sit amet elit. Pellentesque dapibus lectus massa. Vivamus dignissim eros vitae faucibus egestas.
                </p>
                <button class="btn btn-success uppercase font-bold text-white">Get Started</button>

            </div>
        </section>
    );
};

export default MakeAppointment;