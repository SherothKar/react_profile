import React, { useCallback } from 'react'
import { useState } from 'react';
import axios from 'axios';
export default function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [successData, setSuccessData] = useState('')
    const postData = () => {
        setSuccessData('Loading...');
        axios.post(`https://62049587c6d8b20017dc3592.mockapi.io/Dummydata`, {
            firstName,
            lastName,
            checkbox
        }).then(res => { setFirstName(''); setLastName(''); setSuccessData('Success');  })
    }   
    return (
        <div>
            <label>First Name</label>
            <input placeholder='First Name' value = {firstName} onChange={(e) => setFirstName(e.target.value)} />

            <label>Last Name</label>
            <input placeholder='Last Name' value = {lastName} onChange={(e) => setLastName(e.target.value)} />


            <input type="checkbox" onChange={(e) => setCheckbox(!checkbox)} />
            <button type='submit' onClick={postData}>Submit</button>
            <h1>{successData}</h1>
        </div>
    )
}

