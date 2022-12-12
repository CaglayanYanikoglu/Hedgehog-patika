import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Navigation from "../components/Navigation";

const About = () => {
  // const location = useLocation();
  const navigate = useNavigate();

  // console.log('location', location);
  console.log('window.location', window.location);
  console.log('navigate', navigate);
  useEffect(() => {
    setTimeout(() => {
      // window.location.replace('/');
      navigate('/');
    }, 3000);
  }, []);
  return (
    <div>
      <Navigation />
      <h1>About Page</h1>
    </div>
  );
};

export default About;
