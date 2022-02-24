import React from 'react';
import { Link } from 'react-router-dom';

const Select = () => {
  return (
   <div>
       What's your poetry vibe?
       <Link to="/poem1">I stand by my life choices</Link>
       <Link to="/poem2">Kinda sorry, kinda not</Link>
       <Link to="/poem3">Give me romance</Link>
   </div>
  );
};

export default Select;