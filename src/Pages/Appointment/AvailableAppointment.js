import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <h4 className='text-center text-success uppercase font-bold mt-3'>Available Appointment on : {format(date, 'PP')} </h4>
        </div>
    );
};

export default AvailableAppointment;