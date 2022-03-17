import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);

    useEffect(() => {
            setID(localStorage.getItem('ID'))
            setFirstName(localStorage.getItem('First Name'));
            setLastName(localStorage.getItem('Last Name'));
            setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);
    const updateAPIData = () => {
        axios.put(`https://62049587c6d8b20017dc3592.mockapi.io/Dummydata/${id}`, {
            firstName,
             lastName,
             checkbox
        })
    }
    return (
        <div>
          
             
                    <label>First Name</label>
                    <input placeholder='First Name update' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
               
        
                    <label>Last Name</label>
                    <input placeholder='Last Name update' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              
                    <input type="checkbox" label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
       
                <button type='submit' onClick={updateAPIData}>Update</button>
      
        </div>
    )
}