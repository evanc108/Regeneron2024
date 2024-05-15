import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ArrowComponent = () => {
    const handleForwardClick = () => {
        console.log("Forward");
    };

    const handleBackwardClick = () => {
        console.log("Backward");
    };

    return (
        <div style={{bottom: '0', left: '0', right: '0', marginTop: '40px', backgroundColor: 'white' }}>
            <FaChevronLeft onClick={handleBackwardClick} style={{ marginRight: '40px', fontSize: '30px' }} />
            <FaChevronRight onClick={handleForwardClick} style={{ marginLeft: '40px', fontSize: '30px' }} />
        </div>
    );
};

export default ArrowComponent;