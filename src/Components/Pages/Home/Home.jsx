import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Jobs from './Jobs/jobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;