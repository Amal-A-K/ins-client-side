import React from 'react';
import './insSignup.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {signUpId} from '../redux/slice/signupslice';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import '../services/mainservices'
import mainservices from '../service/mainservice';

// import axios from 'axios';
const InsSignup = () => {
    const dispatch=useDispatch()
    const [form, setForm] = useState({})
    const navigate = useNavigate()
    const onChangeHandler = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
        console.log(form);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        async function Signup(form) {
            const res = await mainservices.signup(form)

            if (res.data != null) {
                console.log("Signup Succesful");
                dispatch(signUpId(res.data.user_id))
                // console.log(User_id, "userid");

                navigate('/Insreg')
                // return <Link to="/Insreg" ></Link>
            }
            else {
                console.log("err");
            }
        }
        Signup(form);

        // axios.post('http://localhost:3002/user/signup', form)
        //     .then((response) => {
        //         console.log(" Signup Succesful");
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }
    return (
        <>
            <form>

                <fieldset className='fi'>
                    <div className='sign'>
                        <h1>
                            Signup

                        </h1>
                        <div className='albox'>
                            <label className='la' htmlFor='Fname'>First Name</label><br></br><br></br>
                            <input className='box' onChange={onChangeHandler} name='firstName' type='text' placeholder='Firstname'></input><br></br><br></br>
                            <label className='la' htmlFor='Lname'>Last Name</label><br></br><br></br>
                            <input className='box' onChange={onChangeHandler} name='lastName' type='text' placeholder='Lastname'></input><br></br><br></br>
                            <label className='la' htmlFor='Email'>Email</label><br></br><br></br>
                            <input className='box' onChange={onChangeHandler} name='email' type='email' placeholder='Email'></input><br></br><br></br>
                            <label className='la' htmlFor='Pass'>Password</label><br></br><br></br>
                            <input className='box' onChange={onChangeHandler} name='password' type='password' placeholder='Password'></input><br></br><br></br>
                        </div><br></br>
                        <button onClick={submitHandler}>
                            Signup
                        </button>
                    </div>

                </fieldset>
            </form>
        </>
    )
}
export default InsSignup;