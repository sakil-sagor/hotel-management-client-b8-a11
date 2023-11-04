import React from 'react';

const TitleBoard = ({ titleWord }) => {
    return (
        <div>
            <div className='container mx-auto px-2 bg-blue-500 text-white font-bold text-center text-2xl py-2 rounded'>
                <h3>{titleWord}</h3>
            </div>

        </div>
    );
};

export default TitleBoard;