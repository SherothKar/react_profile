import imgs from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Component } from 'react/cjs/react.production.min';
import { Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import HomeComponent from './homeComponent';
import AboutComponent from './aboutComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './Hellow';
import Welcome from './Welcome';
import StateExample from './StateExample';
import Counter from './Counter';
import Destructing from './Destructing';
import EventBinding from './EventBinding';
import Create from './create';
import Readcomp from './Readcomp';
import Update from './update';
import ApiCallComponent from './apiCallComponent';
import UploadForm from './Components/UploadForm';
import Printer from './Components/Printer';
import CounterOnFcomp from './Components/CounterOnFcomp';
import InputTwo from './Components/InputTwo';
import ArrayUsestate from './Components/ArrayUsestate';
import TitleCounter from './Components/TitleCounter';
import Dummy from './Components/Dummy';
import UseEffect2 from './Components/UseEffect2';
import UseEffect2Toggle from './Components/UseEffect2Toggle';
import TimerSec from './Components/TimerSec';
import StopTime from './Components/StopTime';
import DataFetching from './Components/DataFetching';
import DataFetching2 from './Components/DataFetching2';
import ContextComponentC from './Components/ContextComponentC';
import React from 'react';
import UseReducerCounter from './Components/UseReducerCounter';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default class App extends Component {
  pin = () => window.scrollTo(0, 0)

  render() {
    return (
      <div className="App">
        {/* <Welcome name="hi iam from class props syntax" />
        <Hello name="ima aprop yeah" age="23" />
        <Hello name="ima aprop yeah2" age="24" /> */}
        <BrowserRouter>
          <nav>
            <ul className='Navbar bg-primary'>
              <li> <Link to={"/"} className='text-white p-2' >Home</Link></li>
              <li> <Link to={"/about"} className='text-white p-2' >About</Link></li>
              <li> <Link to={"/read"} className='text-white p-2' >Read</Link></li>
            </ul>
          </nav>
          {/* <button onClick={this.pin}>Got top</button> */}
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/read" element={<Readcomp />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
        {/* <StateExample />
        <Counter />
        <Destructing name="sherothkar" position="React Js Learning" />
        <EventBinding />
        <Create />
<ApiCallComponent/> */}
        {/* <UploadForm/> */}
        {/* <Printer/> */}

        <CounterOnFcomp />
        <UseEffect2Toggle />
        <div className='py-3'></div>
        {/* <UseEffect2/> */}
        <div className='py-3'></div>
        <h2>Give input </h2>
        <InputTwo />
        <div className='py-3'></div>
        <h2>Array input </h2>
        <ArrayUsestate />
        <div className='py-3'></div>
        <TitleCounter />
        {/* <TimerSec/>
         */}
        <StopTime />
        <DataFetching />

        <DataFetching2 name="Madura" />

        <h4>Context:</h4>
        <UserContext.Provider value={'Parent for component C value'}>
          <ChannelContext.Provider value={'Im child of user context data'}>
            <ContextComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>

        <h4>Usereducer counter</h4>
        <UseReducerCounter/>
      </div>

    );
  }
}