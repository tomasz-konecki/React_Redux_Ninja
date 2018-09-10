import React from 'react';

const Rainbow = (WrappedComponent) => {

  const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'indigo'];
  const randomColour = colours[Math.floor(Math.random() * 7)];
  const className = randomColour + "-text";

  return (
    <div className={className}>
      <WrappedComponent />
    </div>
  )
}

export default Rainbow;