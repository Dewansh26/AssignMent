// import './Style.css'
// // import img from '..images/';

// const DarkMode = () => {
//     return (
//         <div className='page'>
//             <div className='logo'>
//                 <p>THE <span>PRODUCT</span> PLATFORM</p>
//             </div>

//             <div className='mainContent'>
//                 <div className='header'>
//                     <div className='titleIcon'>
//                         <div className='rocimg'>
//                             <img src="./images/Group.png" alt="" />
//                         </div>
//                         <div className='title'>
//                             Launching New Module Soon!
//                         </div>
//                     </div>

//                     <div className='Description'>
//                         <p>Exciting things are in the works! We're currently <span>Crafting a new feature</span>  for you. Keep an eye out for updates – We're working to make it available soon!</p>
//                     </div>
//                 </div>
//                 <div className='timer'>
//                     <div className='minutes'>
//                         <div className='minDes'>00</div>
//                         <div className='minText'>Minutes</div>
//                     </div>
//                     <div className='colon'> : </div>

//                     <div className='second'>
//                         <div className='secDes'>03</div>
//                         <div className='secText'>Second</div>
//                     </div>
//                 </div>
//                 <div className='notify'>
//                     <div className='notifyDes'>
//                         Be the first to know! Share your email and We'll notify you when it's live
//                     </div>
//                     <div className='notifySec'>
//                         <div>
//                             <input type="email" placeholder='Please enter your email id' className='inputField' />
//                         </div>
//                         <div >
//                             <button className='notifyBtn'>Notify Me</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>

//     )
// }

// export default DarkMode

import "./Style.css";
// import img from '..images/';

const LightMode = () => {
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
                            <span>00</span>
                            <p>Minutes</p>
                        </div>
                        <div className="colon">
                            <span>:</span>
                        </div>
                        <div className="seconds">
                            <span>03</span>
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
                    <button className="btn">Notify Me</button>
                </div>
            </div>
        </div>
    );
};

export default LightMode;