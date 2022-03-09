import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import { Button } from "antd";
import JobInfo from "./pages/JobInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppliedJobs from "./pages/AppliedJobs";
import PostJob from "./pages/PostJob";
import Profile from "./pages/Profile";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/CircleLoader";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "./redux/actions/jobActions";
import { useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostedJobs from "./pages/PostedJobs";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  return (
    <Router>
      <div className="App">
        {loader && (
          <div className="sweet-loading text-center">
            <FadeLoader color={"#001529"} />
          </div>
        )}

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/appliedjobs" exact element={<AppliedJobs />} />
          <Route path="/postjob" exact element={<PostJob />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/jobs/:id" exact element={<JobInfo />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/posted" exact element={<PostedJobs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
