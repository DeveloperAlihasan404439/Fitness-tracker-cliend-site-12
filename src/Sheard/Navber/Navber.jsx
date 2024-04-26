import "remixicon/fonts/remixicon.css";
import "./Navber.css";
import { useEffect, useState } from "react";
function Navber() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <div className="header">
      <nav className={`${scrolling?"nav-container scrolling " :"nav-container rounded-b-md"} `}>
        <input type="checkbox" name="" id="check" />
        <div className="logo-container">Fitness tracker</div>
        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              <li className="nav-link" style={{ "--i": " .6s" }}>
                <a href="#">Home</a>
              </li>
              <li className="nav-link" style={{ "--i": " .85s" }}>
                <a href="#">Gallery</a>
              </li>
              <li className="nav-link" style={{ "--i": " 1.1s" }}>
                <a href="#">Trainer</a>
              </li>
              <li className="nav-link" style={{ "--i": "1.40s" }}>
                <a href="#">Classes</a>
              </li>
              <li className="nav-link" style={{ "--i": "1.88s" }}>
                <a href="#">Dashboard</a>
              </li>
              <li className="nav-link" style={{ "--i": " 2.2s" }}>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>
          <div className="log-sign" style={{ "--i": "3.27s" }}>
            <button className="btns transparents">Log in</button>
            <button className="btns solid">Sign up</button>
          </div>
        </div>
        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
