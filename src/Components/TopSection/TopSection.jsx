import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const TopSection = ({ headline, paragraph }) => {
    const { darkMode } = useContext(AuthContext);
    return (
        <div>
            <div className={`${darkMode ? "text-white" : "text-sky-700"}`}>
                <h2 className=' text-4xl font-bold'>{headline}</h2>
                <hr className='w-1/4 mx-auto my-4 border border-red-800' />
                <p className='  font-semibold'>{paragraph}</p>
            </div>
        </div>
    );
};

export default TopSection;