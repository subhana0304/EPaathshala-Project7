import React, { useEffect, useState } from 'react';
import Job from './Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    // console.log(jobs);

    return (
        <div className='mx-6 md:mx-12 text-center my-12'>
            <h1 className='text-success text-3xl font-semibold mb-2'>View Jobs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam laboriosam nam nemo assumenda blanditiis eligendi quibusdam voluptatum obcaecati quia suscipit praesentium corporis, impedit dolorem tempore cupiditate a unde nostrum!</p>

            <div className='grid lg:grid-cols-2 gap-5 mt-8'>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            
        </div>
    );
};

export default Jobs;