import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/Home';
import {Button} from 'antd';
import JobInfo from './pages/JobInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppliedJobs from './pages/AppliedJobs';
import PostJob from './pages/PostJob';
import Profile from './pages/Profile';


function App() {
  return (
    <Router>
    <div className="App">
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
