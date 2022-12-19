import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Navigation from "../components/Navigation";

const About = () => {
  // const location = useLocation();
  const navigate = useNavigate();

  console.log(useLocation());

  // console.log('location', location);
  console.log('window.location', window.location);
  console.log('navigate', navigate);
  useEffect(() => {
    setTimeout(() => {
      // window.location.replace('/');
      // navigate('/');
    }, 3000);
  }, []);

  const handleNavigateHome = () => {
    const confirmAnswer = window.confirm('Do you want to go to home page?');
    console.log(confirmAnswer);
    if (confirmAnswer) {
      // redirect to home page
      navigate('/');
    }
  }

  return (
    <div>
      <Navigation />
      <h1>About Page</h1>
      <Link to="/">
        Go to home
      </Link>
      <div>
        <button onClick={handleNavigateHome}>Go to home</button>
      </div>
    </div>
  );
};

export default About;
