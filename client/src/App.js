import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/Home';
import {Button} from 'antd';
import JobInfo from './pages/JobInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppliedJobs from './pages/AppliedJobs';
import PostJob from './pages/PostJob';
import Profile from './pages/Profile';
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { useSelector } from 'react-redux';


function App() {
  const {loader} = useSelector(state=>state.loaderReducer)
  return (
    <Router>
    <div className="App">
      
      {loader && (<div className="sweet-loading text-center">
    <FadeLoader color={'#001529'}  />
      </div>)}
    
    <Routes>
    <Route path='/'exact element={<Home/>}/>
    <Route path='/appliedjobs'exact element={<AppliedJobs/>}/>
    <Route path='/postjob'exact element={<PostJob/>}/>
    <Route path='/profile'exact element={<Profile/>}/>

    </Routes>
    </div>
    </Router>
  );
}

export default App;
