import React from 'react';
import './inReg.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import axios from 'axios';
import mainservices from '../service/mainservice';
import { useNavigate } from 'react-router-dom';


const InsReg = () => {
    const user_id = useSelector((state) => state.signupIdSlice.userId)
    const [form, setForm] = useState({})
    const onChangeHandler = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
        console.log(form);
    };

    const navigate = useNavigate();

    //.................empty student field................................

    async function Student() {
        const res2 = await mainservices.addStud()
        if (res2.data.Studentid != null) {
            console.log("Student field is Successful", res2.data.Studentid)
            return res2.data.Studentid;
        }
        else {
            console.log('Something wrong in Student field', res2);
        }
    }

    //.....................empty teacher field...............................

    async function Teacher() {
        const res2 = await mainservices.addTchr()
        if (res2.data.Teacherid != null) {
            console.log("Teacher field is Successful", res2.data.Teacherid)
            return res2.data.Teacherid;
        }
        else {
            console.log('Something wrong in Teacher field', res2);
        }
    }

    //............. id updation in registration field ..........................

    async function SecInsUpdate(id, user_id, data) {
        const res4 = await mainservices.secondupdateINS(id, user_id, data)
        if (res4.data != null) {
            console.log("Id updation successful")
        }
        else {
            console.log("Something wrong in id updation")
            // console.log(response.data.InstituteId);
        }
    }

    //.................... main Institute Registration Code .................................
    const submitHandler = (event) => {
        event.preventDefault();

        async function InsRegistration(form) {
            const response = await mainservices.addINS(form)
            console.log(response.data);
            if (response.data != null) {
                console.log(" Registration Succesful");

                //................... empty student field component calling and storing id .................................

                const Student_id = await Student();
                console.log(Student_id);

                //................. empty teacher field component calling and storing id .................................

                const Teacher_id = await Teacher();
                console.log(Teacher_id);


                //.............. teacher and student id storing in index array .....................

                const Index =
                {
                    Student: Student_id,
                    Teacher: Teacher_id
                }




                console.log(Index, "payload");

                //..................  Storing institute id in insid  .....................................

                const insid = response.data.Instituteid
                console.log(insid, "ins id")
                console.log(user_id, "user-id");

                //.............. id updation in registration field component calling ......................

                SecInsUpdate(insid, user_id, { Index: Index });

                //........................ login page .....................................................

                navigate('/Login')

            }
            else {
                console.log('error in institute registration');

            }
        }
        InsRegistration(form);


    }
    return (
        <>
            <form>

                <fieldset className='set'>
                    <h1>
                        Institute Registration

                    </h1>
                    <br></br>
                    <div className='albox'>
                        <label className='lab' htmlFor='insName'>Institution Name</label><br></br><br></br>
                        <input className='bo' onChange={onChangeHandler} name='InstitutionName' type='string' placeholder='Institute Name' required></input><br></br><br></br>
                        <label className='lab' htmlFor='address'>Address</label><br></br><br></br>

                        <input className='bo' onChange={onChangeHandler} name='Address' type='string' placeholder='Address'></input><br></br><br></br>
                        {/* <input className='bo' onChange={onChangeHandler} name='Address' type='string' placeholder='Address'></input><br></br><br></br> */}

                        <div className='phone'>
                            <label className='lab' htmlFor='contact'>Phone Number</label><br></br><br></br>
                            <input className='bo' onChange={onChangeHandler} name='PhoneNumber' type='number' placeholder='Phone Number'></input><br></br><br></br>


                            <label className='lab' id='em' htmlFor='email'>Email</label><br></br><br></br>
                            <input className='bo' onChange={onChangeHandler} name='Email' type='email' placeholder='Email'></input><br></br><br></br>
                        </div>



                        {/* <label className='la' for='index'>Index</label><br></br><br></br>
                        <input className='box' onChange={onChangeHandler} name='Index' type='string' placeholder='Student or Teacher'></input><br></br><br></br> */}
                        <div className='sta'>

                            <label className='lab' htmlFor='state'>State</label><br></br><br></br>
                            <input className='bo' onChange={onChangeHandler} name='State' type='string' placeholder='State'></input><br></br><br></br>


                            <label className='lab' htmlFor='district'>District</label><br></br><br></br>
                            <input className='bo' onChange={onChangeHandler} name='District' type='string' placeholder='District'></input><br></br><br></br>


                            <label className='lab' htmlFor='cityortown'>City Or Town</label><br></br><br></br>
                            <input className='bo' onChange={onChangeHandler} name='CityOrTown' type='string' placeholder='City Or Town'></input><br></br><br></br>
                        </div>

                        {/* <label className='lab' for='category'>Category</label><br></br><br></br>
                        <input className='bo' onChange={onChangeHandler} name='Category' type='string' placeholder='College or School'></input><br></br><br></br>
 */}

                        {/* <label className='lab' for='coursecategory'>CourseCategory</label><br></br><br></br>
                        <input className='bo' onChange={onChangeHandler} name='CourseCategory' type='string' placeholder='Course Category'></input><br></br><br></br>


                        <label className='lab' for='coursename'>CourseName</label><br></br><br></br>
                        <input className='bo' onChange={onChangeHandler} name='CourseName' type='string' placeholder='Course Name'></input><br></br><br></br>
 */}

                        {/* <label className='lab' for='coursecode'>CourseCode</label><br></br><br></br>
                        <input className='bo' onChange={onChangeHandler} name='CourseCode' type='string' placeholder='Course Code'></input><br></br><br></br>
 */}

                    </div><br></br>
                    <button className='button1' onClick={submitHandler}>
                        Submit
                    </button><br></br>

                </fieldset>
            </form>
        </>
    )
}
export default InsReg;