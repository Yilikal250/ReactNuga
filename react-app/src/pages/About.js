import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function About () {
  const location = useLocation();
  const dataName = new URLSearchParams(location.search).get('data');

  return (
    <div>
      <p>Data: {dataName}</p>
      <Link to="/Home">Go back to Page 1</Link>
    </div>
  );
}
export default About
