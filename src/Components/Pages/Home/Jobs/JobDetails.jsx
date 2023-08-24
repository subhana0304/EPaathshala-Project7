import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const pera = useParams();
    const peraId = pera.id;
    console.log(peraId);

    const jobs = useLoaderData();
    // console.log(jobs);

    let details = jobs.find(job => job.id == peraId);
    console.log(details);

    return (
        <div className='mx-6 md:mx-12 my-12'>
            <h1 className='text-4xl text-center font-semibold mb-2'>{details.title}</h1>
            <div className='text-xl space-y-2'>
                <h3 className='text-3xl text-success font-bold'>{details.jobTitle}</h3>
                <p>Phone: {details.phone}</p>
                <p>Email: {details.email}</p>
                <p>Address: {details.address}</p>
                <p>jobTime: {details.jobTime}</p>
                <p>Company Name: {details.text}</p>
                <p>JopType: {details.jobType}</p>
                <p>Location: {details.location}</p>
                <p>Salary: {details.salary}</p>
                <p>Experience: {details.experience}</p>
                <p>EducationalRequirements: {details.educationalRequirements}</p>
                <p>JobDescription: {details.jobDescription}</p>
                <p>JobResponsibility: {details.jobResponsibility}</p>
            </div>
        </div>
    );
};

export default JobDetails;