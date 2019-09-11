import React, {useState} from 'react';
import "./Form.css";

export default function Form(props){
    const [newMember, setNemMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChange = event => {
        setNemMember({
            ...newMember,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.setMembers([newMember, ...props.members]);
        resetForm();
    };

    const resetForm = () => {
        setNemMember({
            name: "",
            email: "",
            role: ""
        })
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input 
              type = "text"
              name = "name"
              placeholder = "Please enter your name"
              onChange = {handleChange}
              value = {newMember.title}
            />
            <input 
              type = "text"
              name = "email"
              placeholder = "Please enter your email"
              onChange = {handleChange}
              value = {newMember.email}
            />
            <input 
              type = "text"
              name = "role"
              placeholder = "Please enter your role"
              onChange = {handleChange}
              value = {newMember.role}
            />
            <button className = "button" type = "submit">Add New Member</button>
        </form>
    )
}