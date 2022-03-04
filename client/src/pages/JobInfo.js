import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import {useDispatch,useSelector} from "react-redux";
import {useEffect,useState} from "react";
import {useParams} from 'react-router-dom'; 
import {Button} from 'antd';
import moment from 'moment';

function JobInfo() {
    const { id } = useParams();
const {jobs} =useSelector((state)=>state.jobsReducer);
const job =jobs.find((job) => job._id === (id));


return (
        <div>
            <DefaultLayout>
            <div className='jobinfobg'>
            <br></br>
            <div className='jobdetailsbg  p-2'>

                
            {job && ( <div>
                <p><b>Title</b> :  {job.title} </p>
                <p><b>Company</b> : {job.company}</p>
                <p><b>Small Description</b> : {job.smallDescription}</p>
                <p><b>Full Description</b> : {job.fullDescription}</p>
                <p><b>Title</b> : {job.title}</p>
                <p><b>Skills Required</b> : {job.skillsRequired}</p>
                <p><b>Experience</b> : {job.experience}</p>
                <p><b>Minimum Qualification</b> : {job.minimumQualification}</p>
                
                <hr/>

                <p><b>Salary Range</b> : {job.salaryFrom} - {job.salaryTo}</p>
                <p><b>Department</b> : {job.department}</p>
                <p><b>Company Profile</b> : {job.companyDescription}</p>
                <p><b>Total Candidates applied</b> : {job.appliedCandidates.length}</p>
            
                 <hr/>

                 <div className="flex justify-content-between">
                     <Button>Apply Now</Button>
                     <p><b>Posted on</b>: {moment(job.createdAt).format("MMM DD yyyy")}</p>
                 </div>
            </div>)}

            </div>
            <br></br>
            </div>
            </DefaultLayout>
        </div>
    );
}

export default JobInfo;