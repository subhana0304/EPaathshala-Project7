import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {id, logo, title, jobTitle, jobType} = job;
    return (
        <div className='text-left border p-10 space-y-3'>
            <img src={logo} alt="" />
            <h3 className='text-2xl font-bold'>{title}</h3>
            <h5 className='text-xl font-semibold'>{jobTitle}</h5>
            <p>{jobType}</p>
            <button className='btn btn-success text-white font-bold'><Link to={`/jobDetails/${id}`}>Show Details</Link></button>
        </div>
    );
};

export default Job;