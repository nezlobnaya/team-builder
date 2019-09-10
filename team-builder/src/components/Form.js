import React, { useState } from 'react';


const Form = props => {

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    })

    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.value}, );
    }

    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };

        if (!newMember.name || !newMember.email || !newMember.role) {
            alert('Please fill out all fields!');
        } else {
            
         props.addNewMember(newMember);
        
        }
    }

    const resetForm = event => {
        
        setMember({
            name: '',
            email: '',
            role: ''
        })
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name' hidden>Name</label>
            <input type='text' name='name' placeholder='Name' value={member.name} 
            onChange={changeHandler}  
            />

            <label htmlFor='email' hidden>Email</label>
            <input type='email' name='email' placeholder='Email' value={member.email} onChange={changeHandler}
            />

            <label htmlFor='role' hidden>Name</label>
            <input type='text' name='role' placeholder='Role' value={member.role} onChange={changeHandler}
            />
            <button type='submit'>Add a member</button>
            <button type='reset' onClick={resetForm}>Reset</button>
        </form>
    );
}

export default Form;