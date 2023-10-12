import React from 'react'

const User = ({ name, age,job }) => {
  return (
     <div> 
        <h2> {name} </h2>
        <h3> {job} </h3>
        <p> {age} </p>
    </div>
);
};

export default User;
