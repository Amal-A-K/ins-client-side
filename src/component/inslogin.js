import React from 'react';
import './inslogin.css';
import { useState } from 'react';
// import axios from 'axios';
import mainservice from '../service/mainservice';
import { useDispatch, useSelector } from 'react-redux';
import { instituteDetails } from '../redux/slice/Loginidslice'
import { useNavigate } from 'react-router-dom';
// const cors=require('cors')
const InsLogIn = () => {
    const [form, setForm] = useState({})

    const dispatch = useDispatch()
    const Details = useSelector((state) => state.userSlice.User)
    console.log(Details,"details1");
    async function InsDetails(id) {
        const res2 = await mainservice.getINSByid(id)
        console.log(res2.data);
        if (res2.data != null) {
            dispatch(instituteDetails(res2.data))
            console.log("Successfully stored ins details in redux");
        } else {
            console.log("Failed to store ins details in redux");
        }

    }

    const onChangeHandler = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
        console.log(form);
    };
    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        async function Signin(form) {
            const res = await mainservice.signin(form)
            if (res.data != null) {
                console.log(res);
                localStorage.setItem('Token', res.data.token)
                console.log(Details,"details2");

                // InsDetails(Details.instituteid);
                const fullDetails = InsDetails(Details.instituteid);
                dispatch(instituteDetails(fullDetails))
                console.log(fullDetails, "FULL DETAILS");

                window.location.reload(false)
                console.log("Login Succesful");

                navigate('/Home');
            } else {
                console.log("err");
            }
        }
        Signin(form);

        // const insDetails = FetchData(details.instituteid)
        // const fullDetails=InsDetails(Details.instituteid);
        // dispatch(instituteDetails(fullDetails))
        // console.log(fullDetails,"FULL DETAILS");
        // axios.post('http://localhost:3002/user/signin', form)
        //     .then((response) => {
        //         console.log(" Login Succesful");
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }
    return (
        <>
            <form>

                <fieldset className='pi'>
                    <h1>
                        Log in

                    </h1>

                    <div className='albox'>
                        <label className='la' for='Email'>Email</label><br></br><br></br>
                        <input className='box' onChange={onChangeHandler} name='email' type='email' placeholder='Email'></input><br></br><br></br>
                        <label className='la' for='Pass'>Password</label><br></br><br></br>
                        <input className='box' onChange={onChangeHandler} name='password' type='password' placeholder='Password'></input><br></br><br></br>
                    </div><br></br>
                    <button onClick={submitHandler}>
                        Log in
                    </button><br></br><br></br>
                    <p>
                        Or <a href='/'>Create an account</a>
                    </p>

                </fieldset>
            </form>
        </>
    )
}
export default InsLogIn;