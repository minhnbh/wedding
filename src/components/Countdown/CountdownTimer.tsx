import React, { useState, useEffect } from "react";

const CountdownTimer = ({ destinationDate }: { destinationDate: string }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(destinationDate));

  function calculateTimeLeft(destination: string) {
    const destinationTime = new Date(destination).getTime();
    const currentTime = new Date().getTime();
    const difference = destinationTime - currentTime;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(destinationDate));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [destinationDate]);

  return (
    <div id="clock">
      <div className="box">
        <div>
          <div className="time">{timeLeft.days}</div> <span>Days</span>{" "}
        </div>
      </div>
      <div className="box">
        <div>
          <div className="time">{timeLeft.hours}</div> <span>Hours</span>{" "}
        </div>
      </div>
      <div className="box">
        <div>
          <div className="time">{timeLeft.minutes}</div> <span>Mins</span>{" "}
        </div>
      </div>
      <div className="box">
        <div>
          <div className="time">{timeLeft.seconds}</div> <span>Secs</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
