import axios from "axios";
import { message } from "antd";

export const getAllJobs = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.get("/api/jobs/getalljobs");
    dispatch({ type: "GET_ALL_JOBS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
  }
};

export const postJob = (values) => async (dispatch, getState) => {
  try {
    values.postedBy = JSON.parse(localStorage.getItem("userInfo"))._id;
  } catch (error) {
    console.log("Not authorized");
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: "LOADING", payload: false });
  }

  dispatch({ type: "LOADING", payload: true });

  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    const response = await axios.post("/api/jobs/postjob", values, config);
    dispatch({ type: "LOADING", payload: false });
    message.success("Job Posted Successfully");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: "LOADING", payload: false });
  }
};
