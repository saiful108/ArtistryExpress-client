import React from 'react';
import { Circles } from 'react-loader-spinner';

const Spiner = () => {
    return (
        <div className='grid justify-center mt-24'>
             <Circles 
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
        </div>
    );
};

export default Spiner;