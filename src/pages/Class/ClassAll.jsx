import { useState } from "react";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ClassAll.css";
import SectionTitle from "../../Sheard/SectionTitle/SectionTitle";
import useClass from "../../Sheard/Hooks/useClass";
import { Link } from "react-router-dom";
const ClassAll = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const saturday=["Yin Yoga Serenity","Suspension Training Core","Circuit Fury","Mind-Body Balance Pilates",]
   const sunday= ["Suspension Training Core","Tai Chi Harmony","Boxing Basics","Kettlebell Fusion","Mindful Stretch & Relax"]
 const monday=["Aqua Aerobics Splash","Barre Burnout","Yin Yoga Serenity","Salsa Sweat Session","TRX Total Tone"]
  const tuesday=["Functional Fitness Flow","Circuit Fury","Meditative Hike","Parkour Prep","Cardio Kickboxing Fury"]
  const wednesday=["Cardio Kickboxing Fury","Mind-Body Balance Pilates","Aerial Silks Adventure","Stretch & Release Yoga","BollyFit Groove"]
  const thursday=["Sweat & Sculpt Barbell","TRX Total Tone","Interval Training Madness","Balance Board Basics","Mountain Biking Challenge"]
  
  const {classAll} = useClass()
  return (
    <div>
      <Helmet>
        <title>Body Pulse | Class</title>
      </Helmet>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxmaXRuZXNzfGVufDB8fDB8fHww"
          alt=""
          className="w-full md:h-[600px]  object-center"
        />
        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <div className="w-full md:w-[70%] mx-auto border border-white/20 rounded-lg md:py-10 bg-black/70">
            <h1 className="text-center text-white  text-xl md:text-3xl font-semibold">
            Unlock Your Potential with Fitness Tracker Classes
            </h1>
            <p className="text-center md:w-10/12 mx-auto text-lg md:text-xl mt-3 text-white">
              {" "}
              Unleash your best self through our Fitness Tracker Classes. Personalized guidance, real-time progress tracking, and expert support for a journey to peak fitness
            </p>
          </div>
        </div>
      </div>
      <SectionTitle heading="Class" title="Trainer Post All Class"/>
      <div className="md:w-11/12 mx-auto text-center my-5 md:my-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Saturday</Tab>
            <Tab>Sunday</Tab>
            <Tab>Monday</Tab>
            <Tab>Tuesday</Tab>
            <Tab>Wednesday</Tab>
            <Tab>Thursday</Tab>
            <Tab>Friday</Tab>
          </TabList>
          <TabPanel>
            <div className="md:w-9/12 mx-auto flex gap-5 justify-center flex-wrap p-10 border rounded-xl bg-[#5b1ae9]/70 ">
                {
                    saturday?.map((day,i)=><h1 key={i} className="py-2 px-4 text-xl font-medium text-black rounded-lg bg-white">{day}</h1>)
                }
            </div>
          </TabPanel>
          <TabPanel>
             <div className="md:w-9/12 mx-auto flex gap-5 justify-center flex-wrap p-10 border rounded-xl bg-[#5b1ae9]/70 ">
                {
                    sunday?.map((day,i)=><h1 key={i} className="py-2 px-4 text-xl font-medium text-black rounded-lg bg-white">{day}</h1>)
                }
            </div>
          </TabPanel>
          <TabPanel>
             <div className="md:w-9/12 mx-auto flex gap-5 justify-center flex-wrap p-10 border rounded-xl bg-[#5b1ae9]/70 ">
                {
                    monday?.map((day,i)=><h1 key={i} className="py-2 px-4 text-xl font-medium text-black rounded-lg bg-white">{day}</h1>)
                }
            </div>
          </TabPanel>
          <TabPanel>
             <div className="md:w-9/12 mx-auto flex gap-5 justify-center flex-wrap p-10 border rounded-xl bg-[#5b1ae9]/70 ">
                {
                    tuesday?.map((day,i)=><h1 key={i} className="py-2 px-4 text-xl font-medium text-black rounded-lg bg-white">{day}</h1>)
                }
            </div>
          </TabPanel>
          <TabPanel>
             <div className="md:w-9/12 mx-auto flex gap-5 justify-center flex-wrap p-10 border rounded-xl bg-[#5b1ae9]/70 ">
                {
                    wednesday?.map((day,i)=><h1 key={i} className="py-2 px-4 text-xl font-medium text-black rounded-lg bg-white">{day}</h1>)
                }
            </div>
          </TabPanel>
          <TabPanel>
             <div className="md:w-9/12 mx-auto flex gap-5 justify-center flex-wrap p-10 border rounded-xl bg-[#5b1ae9]/70 ">
                {
                    thursday?.map((day,i)=><h1 key={i} className="py-2 px-4 text-xl font-medium text-black rounded-lg bg-white">{day}</h1>)
                }
            </div>
          </TabPanel>
          <TabPanel>
             <div className="md:w-9/12 mx-auto flex gap-5 justify-center flex-wrap p-10 border rounded-xl bg-[#5b1ae9]/70 ">
                <h1  className="py-2 px-4 text-xl font-medium text-black rounded-lg bg-white">Off Day</h1>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div className="md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6 gap-5">
        {
          classAll?.map(classTranier => 
          <div key={classTranier._id} className="relative border rounded-lg border-[#5b1ae9]/60 bg-white ">
            <img src={classTranier.photo} alt="" className="h-[300px] w-full"/>
            <h1 className="text-center text-black text-3xl font-semibold my-5">{classTranier.tranier_name}</h1>
            <Link to={`/classAll/${classTranier._id}`}>
            <button className="bg-[#5b1ae9] w-full py-2 text-2xl font-medium text-white rounded-b-lg">Show details</button>
            </Link>
        </div>)
        }
      </div>
      </div>
  );
};

export default ClassAll;
