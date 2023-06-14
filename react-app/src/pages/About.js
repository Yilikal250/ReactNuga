import React from 'react'
import { Link } from 'react-router-dom';
function About () {
  const location = useLocation();
  const data = new URLSearchParams(location.search).get('data');

  return (
    <div>
      <p>Data: {data}</p>
      <Link to="/page1">Go back to Page 1</Link>
    </div>
  );
}
export default About
