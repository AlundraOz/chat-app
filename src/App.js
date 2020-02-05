import React from 'react';
import Contact from './components/Contact';
import './components/Contact.css';


let contacts = [{
  name:"Rene Arnold",
  avatar:"https://randomuser.me/api/portraits/men/60.jpg",
  status:true,},
  {
  name:"Zack Phillips",
  avatar:"https://randomuser.me/api/portraits/men/45.jpg",
  status:false,},
  {
  name:"Billy Foster",
  avatar:"https://randomuser.me/api/portraits/men/61.jpg",
  status:true,}
]

function App() {
  return (
    <div className="App">
     <Contact image={contacts[0].avatar} name={contacts[0].name} status={contacts[0].status}/>
     <Contact image={contacts[1].avatar} name={contacts[1].name} status={contacts[1].status}/>
     <Contact image={contacts[2].avatar} name={contacts[2].name} status={contacts[2].status}/>
    </div>
  );
}

export default App;
