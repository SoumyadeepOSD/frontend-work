import { useEffect, useState } from "react";

const LoadingBar = () => {
  const [value, setValue] = useState(0);
  const duration = 1000; // 1 second to complete the cycle
  const interval = 10; // Update every 10ms
  const increment = (interval / duration) * 100; // Calculate increment in percentage

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prev) => {
        // Reset the value to 0 if it reaches 100
        if (prev >= 100) return 0; // Reset to 0
        return prev + increment; // Increment the progress
      });
    }, interval);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [increment, interval]);

  return (
    <div className="bg-slate-200 w-full h-1 mt-10">
      <div
        className={`h-1 bg-gradient-to-r from-slate-200 from-33.33% via-slate-500 via-30.33% to-slate-200 to-30.33%`}
        style={{ width: `${value}%`, transition: 'width 0.3s ease' }} // Dynamic width with faster transition
      />
    </div>
  );
};

export default LoadingBar;
