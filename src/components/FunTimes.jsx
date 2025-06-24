import React, { useEffect, useState } from 'react';

const FunTimes = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden px-4">
      <h1
        className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#0b0c10]
        transition-transform transition-opacity duration-[2000ms] ease-in-out 
        transform 
        ${show ? 'translate-x-0 translate-y-[-100px] opacity-100' : 'translate-x-full opacity-0'}`}
      >
        Coding is The Only Fun
      </h1>
    </div>
  );
};

export default FunTimes;
