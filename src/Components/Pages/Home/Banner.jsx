import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1465568487/photo/colleagues-watching-something-on-laptop-while-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=ZsUmsBtCh9Ta8mnG1blSp6V0EqGclwqRNUQUz9Jft2w=)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-white">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-bold">Welcome To Dream-Jobs</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in.<br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-success text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;