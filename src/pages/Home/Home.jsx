import About from "../../Companent/About";
import Featured from "../../Companent/Featured";
import {Helmet} from "react-helmet";
import Newsletter from "../../Companent/Newsletter";
import FeaturedClass from "../../Companent/FeaturedClass";
import Teistimonlale from "../../Companent/Teistimonlale";
import Experience from "../../Companent/Experience";
import Slider from "./Slider/Slider";
import ClassAll from "../Class/ClassAll";
const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Body Pulse | Home</title>
            </Helmet>
            <Slider/>
            <Experience/>
            <FeaturedClass/>
            <ClassAll/>
            {/* <Featured/> */}
            {/* <About/> */}
            <Teistimonlale/>
            {/* <Newsletter/> */}
        </div>
    );
};

export default Home;