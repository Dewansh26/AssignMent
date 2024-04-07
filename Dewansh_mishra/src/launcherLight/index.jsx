import "./style.css";

const LightLauncherCard = () => {
    return (
        <>
            <div >
                <div className="wrapper">
                    {/* Logo */}
                    <nav className="logo">
                        THE <span>PRODUCT</span> PLATFORM
                    </nav>
                </div>
                <div className="Card">
                    <p className="title">We are Live Now!</p>
                    <p className="dis">Our new feature is now <span>Live and ready</span> for you to explore. Go ahead and give it a try</p>
                    <button>Get Started</button>
                </div>
            </div>

        </>


    );
};

export default LightLauncherCard;