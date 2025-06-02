import React from 'react';
import SliderHero from '../../Components/SliderHero';
import Banner from './Banner';
import HotJobs from '../../Components/HotJobs/HotJobs';

const jobsPromise = fetch("http://localhost:5000/jobs").then(res=>res.json());
const Home = () => {

 
  return (
    <div className='max-w-screen-xl mx-auto my-3'>
     
      <Banner></Banner>
      <HotJobs jobsPromise={jobsPromise}></HotJobs>
    </div>
  );
};

export default Home;