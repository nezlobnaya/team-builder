import React, { useState } from 'react';
import './App.css';
// import { Link } from 'react-router-dom';
import Form from './components/Form';
import MembersList from './components/MembersList';
import data from './data';


function App() {
  const [members, setMembers] = useState(data);

  const addNewMember = member => {

    const present = members.find(el => el.name === member.name || el.email === member.email)
    if (!present) {
      setMembers([...members, member ]);
    }
  };

  

  return (
    <div className="App">
      <h1>My Team Members</h1>
      <Form addNewMember={addNewMember} />
      <MembersList teamMembers={members}/>
    </div>
  );
}

export default App;
