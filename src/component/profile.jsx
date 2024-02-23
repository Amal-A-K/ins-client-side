import React from 'react';
import face from '../assets/man-user-circle-icon.svg';
import Button from 'react-bootstrap/Button';

import { useSelector } from "react-redux";

import './profile.css';

// import { useNavigate } from 'react-router-dom';


const Profile = () => {
    // const navigate = useNavigate();
    const details = useSelector((state) => state.userSlice.User)
    const ins=useSelector((state)=>state.loginIdSlice.insDetails)
    console.log(ins, "institute details in profile page");
    // console.log(details,"redux data fetched in profile");

    return (

        <div className='secndmain'>
            {/* <Sidebar />
                 <Outlet />  */}
            <div className='centre'>

                <div className='in-secndmain'>
                    <div className='sub'>
                        <div className='img'>
                            <img src={face} alt='icon'></img>
                            {/* onClick={() => { navigate('/Profile') }} */}
                        </div>
                        <div className='details'></div>
                        <h1>
                            {details.firstName} {details.lastName}
                        </h1>
                        <h1>{details.email}</h1>
                        {/* <h1>{details.instituteid}</h1> */}
                        <h1>{ins.InstitutionName}</h1>
                    </div><br></br>
                    <div className='det'>
                        <Button variant='outline-primary' size='lg'>Edit Profile</Button>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Profile;