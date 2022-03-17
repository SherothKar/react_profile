import React from 'react';
import './App.css';
class ApiCallComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            postResponse: {requestBody: {}},
            getResponse: []
        }
        this.submitApiCall = this.submitApiCall.bind(this);
        this.getApiCall = this.getApiCall.bind(this);
    }
    submitApiCall(e) {
        e.preventDefault();
        fetch("http://localhost:4000/submit", {
            method: 'POST',
            body: JSON.stringify({
                name: 'bharath',
                email: 'bharath@example.com'
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((res) => res.json())
            .then((response) => {
                this.setState({ postResponse: response.requestBody })
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            });
    }
    getApiCall() {
        fetch("http://localhost:4000/url")
            .then((res) => res.json())
            .then((response) => {
                this.setState({ getResponse: response.Options })
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            });
    }
    render() {
        return (
            <div className="App">
                <h1>Api call GET</h1>
                <button onClick={() => this.getApiCall()}>GET api Call</button>
                <h1> API Response for GET: </h1>
                <h1>{this.state.getResponse}</h1>
                <br /><br />
                <h1>Api call POST</h1>

                <form onSubmit={this.formPreventDefault}>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                    <button onClick={e => this.submitApiCall(e)}>Submit</button>
                </form>
                <h1> API Response for POST: </h1>
                <h1>{this.state.postResponse.email}</h1>
            </div>
        );
    }
}

export default ApiCallComponent;