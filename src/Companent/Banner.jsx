import { Link } from 'react-router-dom';
import '../Sheard/Button/Button.css'
const Banner = () => {
    return (
        <div className="bg-[#FFFFFF]">
        <div className="w-11/12 mx-auto flex justify-between items-center">
            <div className="w-[50%]">
                <h1 className="text-2xl md:text-4xl font-medium">Elevate Your Fitness <br /> Monitoring <span className="text-[#5b1ae9]">Experience</span></h1>
                <p className="py-3 text-lg md:text-xl"> BodyPulse Tracker revolutionizes your fitness journey. Monitor your activities, track vital stats, and unlock personalized insights for a holistic approach to your well-being. Sync, track, and excel with BodyPulse Tracker</p>
                <Link to ="/classAll">
                <button className='btn uppercase'>Tap for Wellness</button>
                </Link>
            </div>
            <div className="w-[50%]">
            <img src="https://img.freepik.com/premium-vector/isometric-concept-train-together-reach-your-goal-using-mobile-app-track-your-activity_130740-55.jpg?size=626&ext=jpg&uid=R116477275&ga=GA1.1.973147496.1700747084&semt=ais" alt="" className="w-full h-[60vh]"/>
            </div>
        </div>
        </div>
    );
};

export default Banner;