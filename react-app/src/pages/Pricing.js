import React from 'react';
function Pricing () {
  const handleClick = () => {
    const data = 'some data';
    window.location.href = `/page2?data=${data}`;
  };

  return (
    <div>
      <button onClick={handleClick}>Go to Page 2</button>
    </div>
  );
}


export default Pricing
