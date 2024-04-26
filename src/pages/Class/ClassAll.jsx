import { useState } from "react";
import "./ClassAll.css";
import { Link } from "react-router-dom";
const ClassAll = () => {
  const [tabIndex, setTabIndex] = useState("All Events");
  const tabsList = [
    {
      title: "All Events",
      id: 1,
    },
    {
      title: "Hatha Yoga",
      id: 2,
    },
    {
      title: "Yoga Dance",
      id: 3,
    },
    {
      title: "Ashtanga Yoga",
      id: 4,
    },
    {
      title: "Kundalini Yoga",
      id: 5,
    },
    {
      title: "Morning Flow",
      id: 6,
    },
  ];
  const tabtext = [
    {
      id: 1,
      title: 'Morning Flow',
      discription:"Advanced Sequence",
      time: '09.00 - 10.00',
      link: 'Lily Carter',
      hovertext: 'Morning relaxation and stretching',
      bgColor: '#73C6CD',
      timeDay: '09:00'

    },
    {
      id: 2,
      title: 'Kundalini Yoga',
      discription:"Basic Kundalini",
      time: '09.00 - 10.00',
      link: 'Grace Dean',
      hovertext: 'Kundalini workflow for beginners',
      bgColor: '#E8BC6F',
      timeDay: '09:00'
    },
    {
      id: 3,
      title: 'Morning Flow',
      discription:"Advanced Sequence",
      time: '09.00 - 10.00',
      link: 'Lily Carter',
      hovertext: 'Morning relaxation and stretching',
      bgColor: '#73C6CD',
      timeDay: '09:00'

    },
    {
      id: 4,
      title: 'Kundalini Yoga',
      discription:"Basic Kundalini",
      time: '09.00 - 10.00',
      link: 'Grace Dean',
      hovertext: 'Kundalini workflow for beginners',
      bgColor: '#E8BC6F',
      timeDay: '09:00'
    },
    {
      id: 5,
      title: 'Morning Flow',
      discription:"Advanced Sequence",
      time: '09.00 - 10.00',
      link: 'Lily Carter',
      hovertext: 'Morning relaxation and stretching',
      bgColor: '#73C6CD',
      timeDay: '09:00'

    },
    {
      id: 6,
      title: 'Kundalini Yoga',
      discription:"Basic Kundalini",
      time: '09.00 - 10.00',
      link: 'Grace Dean',
      hovertext: 'Kundalini workflow for beginners',
      bgColor: '#E8BC6F',
      timeDay: '09:00'
    },
    {id: 7,
      title: 'Morning Flow',
      discription:"Advanced Sequence",
      time: '09.00 - 10.00',
      link: 'Lily Carter',
      hovertext: 'Morning relaxation and stretching',
      bgColor: '#73C6CD',
      timeDay: '09:00'
    },
    {
      id: 8,
      title: 'Ashtanga Yoga',
      discription:"Weight Loss",
      time: '10.00 - 11.00',
      link: 'Sophia Keat',
      hovertext: 'Cardio Workflow for weight loss',
      bgColor: '#CD7399',
      timeDay: '10:00'
    },
    {
      id: 9,
      title: '',
      discription:"",
      time: '',
      link: '',
      hovertext: '',
      bgColor: '',
      timeDay: ''
    },
    {
      id: 10,
      title: 'Ashtanga Yoga',
      discription:"Weight Loss",
      time: '10.00 - 11.00',
      link: 'Sophia Keat',
      hovertext: 'Cardio Workflow for weight loss',
      bgColor: '#CD7399',
      timeDay: '10:00'
    },
    {
      id: 11,
      title: '',
      discription:"",
      time: '',
      link: '',
      hovertext: '',
      bgColor: '',
      timeDay: ''
    },
    {
      id: 12,
      title: 'Ashtanga Yoga',
      discription:"Weight Loss",
      time: '10.00 - 11.00',
      link: 'Sophia Keat',
      hovertext: 'Cardio Workflow for weight loss',
      bgColor: '#CD7399',
      timeDay: '10:00'
    },
    {
      id: 13,
      title: '',
      discription:"",
      time: '',
      link: '',
      hovertext: '',
      bgColor: '',
      timeDay: ''
    },
    {
      id: 14,
      title: 'Kundalini Yoga',
      discription:"Basic Kundalini",
      time: '11.00 - 12.00',
      link: 'Grace Dean',
      hovertext: 'Grace Dean',
      bgColor: '#CD7399',
      timeDay: '11:00'
    },
    {
      id: 15,
      title: 'Ashtanga Yoga',
      discription:"Weight Loss",
      time: '11.00 - 12.00',
      link: 'Sophia Keat',
      hovertext: 'Cardio Workflow for weight loss',
      bgColor: '#E8BC6F',
      timeDay: '11:00'
    },
    {
      id: 16,
      title: 'Yoga Dance',
      discription:"Cardio Fit",
      time: '11.00 - 12.00',
      link: 'Daniel Brooks',
      hovertext: 'Yoga Sequence with dancing moves',
      bgColor: '#62AED6',
      timeDay: '11:00'
    },
    {
      id: 17,
      title: '',
      discription:"",
      time: '',
      link: '',
      hovertext: '',
      bgColor: '',
      timeDay: '11:00'
    },
    {
      id: 18,
      title: 'Yoga Dance',
      discription:"Cardio Fit",
      time: '11.00 - 12.00',
      link: 'Daniel Brooks',
      hovertext: 'Yoga Sequence with dancing moves',
      bgColor: '#62AED6',
      timeDay: '11:00'
    },
    {
      id: 19,
      title: '',
      discription:"",
      time: '',
      link: '',
      hovertext: '',
      bgColor: '',
      timeDay: '11:00'
    },
    {
      id: 20,
      title: 'Yoga Dance',
      discription:"Cardio Fit",
      time: '11.00 - 12.00',
      link: 'Daniel Brooks',
      hovertext: 'Yoga Sequence with dancing moves',
      bgColor: '#62AED6',
      timeDay: '11:00'
    },
    {
      id: 21,
      title: 'Ashtanga Yoga',
      discription:"Weight Loss",
      time: '12.00 - 13.00',
      link: 'Sophia Keat',
      hovertext: 'Cardio Workflow for weight loss',
      bgColor: '#E8BC6F',
      timeDay: '12:00'
    },
  ]
  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-xl md:text-3xl font-bold text-center py-5 pb-10">
        Classes Timetable
      </h2>
      <div className="tabs_container">
        <div className="tabs_box flex flex-wrap">
          {tabsList.map((tab) => (
            <div key={tab.id} className="relative">
              <button
                onClick={() => setTabIndex(tab.title)}
                className={`${
                  tabIndex === tab.title ? "tab_button active" : "tab_button"
                }`}
              >
                {tab.title}
              </button>
              {tabIndex === tab.title && (
                <div className="absolute -bottom-[3px]  w-full h-1 bg-[#25BFBF] rounded-lg transition-all delay-700"></div>
              )}
            </div>
          ))}
        </div>
        <div className="tabs_contant">
          {tabsList.map((tab) => (
            <div
              key={tab.id}
              className={`${
                tabIndex === tab.title ? "contant active" : "contant"
              }`}
            >
              <div className="day-content">
                <div className="w-full flex justify-between">
                  <span className="day-text "></span>
                  <span className="day-text ">Monday</span>
                  <span className="day-text ">Tuesday</span>
                  <span className="day-text ">Wednesday</span>
                  <span className="day-text ">Thursday</span>
                  <span className="day-text ">Friday</span>
                  <span className="day-text ">Saturday</span>
                  <span className="day-text ">Sunday</span>
                </div>
                <div className="mt-4 w-full flex justify-between bg-white">
                  <div className ="day-discription">
                  <span className=" ">helkdgf</span>
                  </div>
                  <div className ="day-discription">
                  <span className=" ">dgdsg</span>
                  </div>
                  <div className ="day-discription">
                  <span className=" "></span>
                  </div>
                  <div className ="day-discription">
                  <span className=" "></span>
                  </div>
                  <div className ="day-discription">
                  <span className=" "></span>
                  </div>
                  <div className ="day-discription">
                  <span className=" "></span>
                  </div>
                  <div className ="day-discription">
                  <span className=" "></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassAll;
