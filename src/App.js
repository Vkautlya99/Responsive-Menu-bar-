
import { useState } from 'react';
import './App.css';

function App() {

 
  let [menustatus, setMenustatus] = useState(false);


  
  return (
    <div className="App">
      <button className="menu-icon" onClick={() => setMenustatus(!menustatus)}>
        {menustatus ?
          <span>&times;</span>
          :
          <span>&#9776;</span>
      }
       </button>
      <div className={`menu ${menustatus ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li><br />
          <li>About</li><br />
          <li>Courses</li><br />
          <li>Contact Us</li><br />
          <li>LogOut</li><br />
        </ul>
      </div>
     
     
    

      
      
     
    </div>
  );
}

export default App;
