import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
function Readcomp() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://62049587c6d8b20017dc3592.mockapi.io/Dummydata`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    // For update purpose
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox);
     }
// for delete
     const onDelete = (id) => {
        axios.delete(`https://62049587c6d8b20017dc3592.mockapi.io/Dummydata/${id}`) .then(() => {
            getData();
      })
    }

      const getData = () => {
        axios.get(`https://62049587c6d8b20017dc3592.mockapi.io/Dummydata`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
    return (
        <div className='container my-5'>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>data</th>
                        <th>Update Option</th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td >{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                                 <td><button onClick={() => setData(data)}><Link to='/update'>Update</Link></button></td> 
                                 <td><button onClick={() => onDelete(data.id)}>Delete</button></td> 
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )

}

export default Readcomp
