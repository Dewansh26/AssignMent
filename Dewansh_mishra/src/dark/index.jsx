
import { useEffect, useState } from "react";
import DarkLauncherCard from "../launcherDark";
import "./style.css";

const DarkMode = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(3); // Starting value is 3
    const [checkemail,setCheckEmail] = useState(false)
    const [timerFinished, setTimerFinished] = useState(false);

    useEffect(() => {
        let intervalId;
         
        // Decrease seconds by 1 every second
        intervalId = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes === 0) {
                    clearInterval(intervalId);
                    setTimerFinished(true);
                    // Timer has reached 0
                    // You can perform any action here, like showing a message or triggering an event
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
            setCheckEmail(true)
        }, 1000);

        // Cleanup function to clear the interval
        return () => clearInterval(intervalId);
    }, [minutes, seconds,checkemail]);

    // Add leading zero to single digit numbers
    const formatTime = (value) => {
        return value < 10 ? `0${value}` : value;
    };
    if (timerFinished) {
        return <DarkLauncherCard />;
      }
    return (
        <div className="wrapper">
            <div className="Container">
                {/* Logo */}
                <nav className="logo">
                    THE <span>PRODUCT</span> PLATFORM
                </nav>

                {/* Content */}
                <div className="content">
                    <div className='titleIcon'>
                        <div className='rocimg'>
                            <img src="./images/Group.png" alt="" />
                        </div>
                        <div className='title'>
                            Launching New Module Soon!
                        </div>
                    </div>

                    {/* <h1> Launching New Module Soon!</h1> */}

                    <div className='Description'>
                        <p>Exciting things are in the works! We're currently <span>Crafting a new feature</span>  for you. Keep an eye out for updates – We're working to make it available soon!</p>
                    </div>
                </div>
                {/* middle */}
                <div className="middle">
                    {/* Reveal */}
                    <div className="reveal">GET READY FOR THE REVEAL!</div>

                    {/* Timer */}
                    <div className="timer">
                        <div className="minutes">
                            <span>{formatTime(minutes)}</span>
                            <p>Minutes</p>
                        </div>
                        <div className="colon">
                            <span>:</span>
                        </div>
                        <div className="seconds">
                            <span>{formatTime(seconds)}</span>
                            <p>Seconds</p>
                        </div>
                    </div>

                    <p className="timer-p">
                        Be the first to know! Share your email and We'll notify you when
                        it's live
                    </p>
                </div>

                <div className="emailverifier">

                    {/* <input type="email" placeholder="Please enter your email id" /> */}
                    <div className='notifySec'>
                        <div>
                            <input type="email" placeholder='Please enter your email id' className='inputField' />
                        </div>
                    </div>
                    <button className="btn">Notify Me {seconds}</button>
                </div>
            </div>
           
        </div>
   
    );
    
};

export default DarkMode;