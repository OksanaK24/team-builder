import React, {useState} from 'react';
import './App.css';
import Form from "./Form";

function App() {

  const [members, setMembers] = useState ([
    {
      name: "Big Boss",
      email: "bigboss@greek.com",
      role: "Big Boss"
    }
  ]);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Our Team</h1>
      <Form members = {members} setMembers = {setMembers}/>
      {members.map((member, index) => (
        <div key = {index}>
          <p>My name is {member.name}. I'm a {member.role} of this project. You can contact me via email: {member.email}.</p>
        </div>
      ))}

      </header>
      
    </div>
  );
}

export default App;
