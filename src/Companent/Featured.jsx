import SectionTitle from "../Sheard/SectionTitle/SectionTitle";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <SectionTitle title="Highlighted Offerings" heading="Featured" />
      <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="38px"
              width="38px"
              version="1.1"
              id="heart"
              viewBox="0 0 471.701 471.701"
            >
              <linearGradient id="gradientColor">
                <stop offset="5%" stopColor="#7eaaff"></stop>
                <stop offset="95%" stopColor="#ff48fb"></stop>
              </linearGradient>
              <g>
                <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
              </g>
            </svg>
          </div>
          <p className="title">Health Metrics</p>
          <p className="text">
            Track heart rate, sleep patterns, and stress levels for holistic
            health.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <linearGradient id="gradientColor">
                <stop offset="5%" stopColor="#7eaaff"></stop>
                <stop offset="95%" stopColor="#ff48fb"></stop>
              </linearGradient>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontFamily="Arial, sans-serif"
              >
                PI
              </text>
            </svg>
          </div>
          <p className="title">Personalized Insights</p>
          <p className="text">
            Tailored recommendations based on your activity and health data.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <linearGradient id="gradientColor">
                <stop offset="5%" stopColor="#7eaaff"></stop>
                <stop offset="95%" stopColor="#ff48fb"></stop>
              </linearGradient>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontFamily="Arial, sans-serif"
              >
                AT
              </text>
            </svg>
          </div>
          <p className="title">Activity Tracking</p>
          <p className="text">
            Monitor steps, distance, calories burned, and active minutes.
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <linearGradient id="gradientColor">
                <stop offset="5%" stopColor="#7eaaff"></stop>
                <stop offset="95%" stopColor="#ff48fb"></stop>
              </linearGradient>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontFamily="Arial, sans-serif"
              >
                WP
              </text>
            </svg>
          </div>
          <p className="title">Workout Plans</p>
          <p className="text">
            Access curated or custom routines for various fitness levels.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <linearGradient id="gradientColor">
                <stop offset="5%" stopColor="#7eaaff"></stop>
                <stop offset="95%" stopColor="#ff48fb"></stop>
              </linearGradient>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontFamily="Arial, sans-serif"
              >
                NT
              </text>
            </svg>
          </div>
          <p className="title">Nutrition Tracking</p>
          <p className="text">
            Log food intake and nutritional details for balanced fitness.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="38px"
              width="38px"
              version="1.1"
              id="heart"
              viewBox="0 0 471.701 471.701"
            >
              <linearGradient id="gradientColor">
                <stop offset="5%" stopColor="#7eaaff"></stop>
                <stop offset="95%" stopColor="#ff48fb"></stop>
              </linearGradient>
              <g>
                <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
              </g>
            </svg>
          </div>
          <p className="title">Personalized Insights</p>
          <p className="text">
            Tailored recommendations based on your activity and health data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
