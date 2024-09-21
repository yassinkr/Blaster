"use client";
import React, { useState } from 'react';

const SendBtn = () => {
    const [animate, setAnimate] = useState("");

    const handleClick = () => {
        setAnimate("send-move");
    };

    // Handler for when the animation ends
    const handleAnimationEnd = () => {
        setAnimate(""); // Reset the animation state
    };

    return (
        <button className="overflow-hidden bg-white rounded-xl w-12 h-10 flex justify-center items-center" onClick={handleClick}>
            <div 
                className={animate} 
                onAnimationEnd={handleAnimationEnd} // Listen for animation end
            >
                <img src='/sent.svg' alt="Sent Icon" />
            </div>
        </button>
    );
};

export default SendBtn;
