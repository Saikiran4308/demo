import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ name, age }) => {
  return (
    <div style={{
      margin: 20, 
      padding: 20, 
      borderColor: "black", 
      borderStyle: "solid", 
      borderWidth: 2, 
      borderRadius: 10,  // Rounded corners
      backgroundColor: "#f9f9f9", // Light background color
      boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.1)" // Subtle shadow for depth
    }}>
      <h1 style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>Name: {name}</h1>
      <h2 style={{ fontFamily: "Arial, sans-serif", color: "#666" }}>Age: {age}</h2>
    </div>
  );
};

Display.defaultProps = {
  name: "This is the default name",
  age: 16
};

export default Display;
