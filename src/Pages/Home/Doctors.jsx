import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data))

            .then(err => console.log(err));
    }, []);

    console.log(doctors);

    return (
        <div>
            {
                doctors.map(doctor =>
                    <div>
                        
                    </div>
                )
            }
        </div>
    );
};

export default Doctors;