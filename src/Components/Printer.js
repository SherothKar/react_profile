import React, { Component } from 'react'
import { useEffect, useState } from 'react/cjs/react.development';

const Printer = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchValue, setSearchValue] = useState(null);
    const [items, setItems] = useState([]);
    const searchStart = (searchValue) => {

        setSearchValue(searchValue);
        searchApiCall(searchValue);
    }
    const searchApiCall = (searchItem) => {
        fetch("http://localhost:4000/search", {
            method: 'POST',
            body: JSON.stringify({
                searchKeyword: searchItem
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.requestBody);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }


    return (

        <div className='border-1-primary p-5'>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} &nbsp; &nbsp; &nbsp;
                        {item.color} &nbsp; &nbsp; &nbsp;
                        {item.model}
                    </li>
                ))}
            </ul>
            <input type='search' placeholder='Search' className='px-3 py-1' onChange={(e) => searchStart(e.target.value)} />
        </div>
    )

}
export default Printer
