import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {BsArrowLeftCircle} from 'react-icons/bs'
import {TiTickOutline} from 'react-icons/ti'



const AddEdit = () => {
    const [Task, setTask] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    function addUpdateHeading() {
        if (id) {
            document.getElementById('heading').innerText="Update the Task below";
        }
    }

    useEffect(() => {
        getSinglePriorityRecord();
        addUpdateHeading();
    }, [id]); //only run when we have the id value

    /**Get single Priority date */
    function getSinglePriorityRecord() {
        axios.get(`http://localhost:7000/single/${id}`).then((result) => {
            setTask(result.data[0].Task);
        }).catch(err => toast.error(err));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = { Task };
        const url = "http://localhost:7000/add";
        const url2 = `http://localhost:7000/update/${id}`;
        if (Task !== '') {
            if (id) {
                axios.put(url2, dataToSubmit)
                    .then(() => {
                        toast.success("Task succesfully Updated");
                        setTimeout(() => navigate('/'), 1000);

                    }).catch(err => toast.error(err));
            } else {
                axios.post(url, dataToSubmit)
                    .then((result) => {
                        setTask('');
                        toast.success("added succesfully");
                        setTimeout(() => navigate('/'), 1000);
                    }).catch(err => toast.error(err.response.data));

            }
        } else {
            toast.error("Please all fields must be filled");
        }
    }
    return (
        <div>
            <h1 id='heading'>Add a Task Below</h1>
            <input value={Task || ""} onChange={e => { setTask(e.target.value) }} type="text" placeholder='Task here' required />
            <input value={id ? '☑ Update' : '☑ Save'} onClick={e => handleSubmit(e)} className='save' />
            
            <Link to='/'><p className='link back'><BsArrowLeftCircle></BsArrowLeftCircle> Go back</p></Link>
        </div>
    )
}

export default AddEdit;