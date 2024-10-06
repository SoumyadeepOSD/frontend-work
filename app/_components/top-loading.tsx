import { useEffect, useState } from "react";

const LoadingBar = () => {
  const [value, setValue] = useState(0);
  const duration = 1000; 
  const interval = 10;
  const increment = (interval / duration) * 100; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) return 0; 
        return prev + increment; 
      });
    }, interval);

   
    return () => clearInterval(intervalId);
  }, [increment, interval]);

  return (
    <div className="bg-slate-200 w-full h-1 mt-10">
      <div
        className={`h-1 bg-gradient-to-r from-slate-200 from-33.33% via-slate-500 via-30.33% to-slate-200 to-30.33%`}
        style={{ width: `${value}%`, transition: 'width 0.3s ease' }} 
      />
    </div>
  );
};

export default LoadingBar;
