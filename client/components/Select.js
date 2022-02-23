import React from 'react';
import { Link } from 'react-router-dom';

const Select = () => {
  return (
   <div>
       What's your poetry vibe?
       <button>I stand by my life choices</button>
       <Link to="/poem2">Kinda sorry, kinda not</Link>
       <button>Give me romance</button>
   </div>
  );
};

export default Select;