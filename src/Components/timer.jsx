import React, { useState, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);

    return (
        <div>
            <h2>Current Time: {time}</h2>
        </div>
    );
}

export default Timer;