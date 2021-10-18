import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const HospitalDetails = () => {
    const {hospitalId} = useParams();
    const [service, setService] = useState([])
    console.log(hospitalId)

    useEffect( () => {
        fetch('/fakeServices.json')
        .then(res => res.json())
        .then(data => {
            const matchedItem = data?.find(d => d.id == hospitalId);
            setService(matchedItem)
        })

    } ,[])

    return (
        <div>
            {
                <h2>{service.name}</h2>
            }
        </div>
    );
};

export default HospitalDetails;