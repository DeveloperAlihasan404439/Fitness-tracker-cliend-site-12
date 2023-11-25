import About from "../../Companent/About";
import Banner from "../../Companent/Banner";
import Featured from "../../Companent/Featured";
import {Helmet} from "react-helmet";
const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Body Pulse || Home</title>
            </Helmet>
            <Banner/>
            <Featured/>
            <About/>
        </div>
    );
};

export default Home;