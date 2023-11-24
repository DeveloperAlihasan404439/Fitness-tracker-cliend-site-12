import SectionTitle from "../Sheard/SectionTitle/SectionTitle";
import about from "../assets/img/about.png";
const About = () => {
  return (
    <div>
      <SectionTitle title="Fitness Solutions" heading="About" />
      <div className="md:relative">
        <img src={about} alt="" />
        <div className="md:absolute top-0 w-full h-full flex items-center justify-center">
          <div className="md:w-10/12 lg:w-8/12 mx-auto px-2 py-4 md:p-10 bg-[#01020396] md:rounded-lg">
            <h1 className="text-white text-xl md:text-4xl font-medium text-center md:pb-5">Enhanced Fitness Solutions</h1>
            <p className="text-white text-center leading-relaxed">At Body Pulse, we're dedicated to empowering individuals on their fitness journey. With innovative tracking technology, personalized insights, and a supportive community, we aim to transform the way you approach fitness. Our comprehensive tools provide you with the guidance and motivation needed to achieve your wellness goals. Join us in redefining your fitness experience with Body Pulse.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
