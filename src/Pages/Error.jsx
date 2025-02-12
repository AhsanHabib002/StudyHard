import React from 'react';
import error from "../assets/Error.png";
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center gap-[30px]">
            <img src={error} alt="" />
            <h2 className='text-2xl md:text-6xl font-bold text-center'>404 Route not Found</h2>
            <Link to="/">
                <a className="btn bg-[#191A23] text-white">Back to Home</a>
              </Link>
        </div>
    );
};

export default Error;