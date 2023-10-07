import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {
    const [inputData, setInputData] = useState({ name: '', email: '' })
    const navigate = useNavigate()
    function handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:3000/users', inputData)
            .then(res => {
                alert('Data Added Successfully');
                navigate('/');
            }).catch(er => console.log(er));
    }
    return (
        <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' className='form-control' onChange={e => setInputData({ ...inputData, name: e.target.value })}></input>
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='text' name='email' className='form-control' onChange={e => setInputData({ ...inputData, email: e.target.value })}></input>
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Add
