import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    function handleSubmit(event) {
        event.preventDefault()
        axios.put('http://localhost:3000/users/' + id, data)
            .then(res => {
                alert('Data update successfully !')
                navigate('/')
            })
    }
    return (
        <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>ID:</label>
                        <input type='text' name='name' disabled value={data.id} className='form-control'  ></input>
                    </div>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' value={data.name} className='form-control' onChange={e => setData({ ...data, name: e.target.value })} ></input>
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='text' name='email' value={data.email} className='form-control' onChange={e => setData({ ...data, email: e.target.value })} ></input>
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit
