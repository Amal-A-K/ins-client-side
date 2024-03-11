import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import mainservice from '../../service/mainservice';
import './Teacherform.css';

function TeacherForm() {
    const [form, setForm] = useState({})
    const navigate=useNavigate();
    // const details = useSelector((state) => state.userSlice.User)
    const ins=useSelector((state)=>state.loginIdSlice.insDetails)
    // const det = useSelector((state) => state.loginIdSlice.insDetails)
    useEffect(()=>{
        console.log(ins.Index[0].Teacher,"Index Teacher Details");
       
        console.log(ins, "institute details");
    


    },[ins])
   
    const tchrId=ins.Index[0].Teacher;
    console.log(tchrId,"Teacher Id");
   

    // console.log(details, "entho details");
    // const insdet=det.Index.Teacher
    // console.log(insdet);
    // const insid = details.instituteid
    const onChangeHandler = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
        console.log(form);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(form);
        async function AddTeacher(id, form) {
            const res = await mainservice.addTeacher(id, form)
            if (res.data != null) {
                console.log("Successfully added Teacher");
                navigate('/TchrTable')
                console.log(ins, "institute details inside teacher from");
                // console.log(details, "entho details inside teacher form");
            }
            else {
                console.log(res);
            }

        }
        AddTeacher(tchrId, form);
    }

    return (
        <div className='teach'>

            <Form >
                <fieldset className='field'>
                    <h1>
                        Teacher Form
                    </h1><br></br>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>FirstName</Form.Label>
                        <Form.Control type="text" placeholder="Enter FirstName" name='FirstName' onChange={onChangeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control type="text" placeholder="Enter lastname" name='LastName' onChange={onChangeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" name='Address' onChange={onChangeHandler} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control type="date" placeholder="Enter Date of Birth" name='DateOfBirth' onChange={onChangeHandler} width={'200px'} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Age" name='Age' onChange={onChangeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <Form.Label>Gender</Form.Label><br></br>
                        <Form.Select name='Gender' onChange={onChangeHandler}>
                            <option onChange={onChangeHandler}>--Select your Gender--</option>
                            <option onChange={onChangeHandler}>Male</option>
                            <option onChange={onChangeHandler}>Female</option>
                            <option onChange={onChangeHandler}>Transgender</option>
                        </Form.Select >




                        {/* <Form.Control type="text" placeholder="Gender" name='Gender' /> */}
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicBloodgroup">
                        <Form.Label>BloodGroup</Form.Label>
                        <Form.Control type="text" placeholder="BloodGroup" name='BloodGroup' onChange={onChangeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicQualification">
                        <Form.Label>Qualification</Form.Label>
                        <Form.Control type="text" placeholder="Qualification" name='Qualification' onChange={onChangeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDesignation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" placeholder="Designation" name='Designation' onChange={onChangeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" name='Subject' onChange={onChangeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSubject">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Email" name='Email' onChange={onChangeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhonenumber">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="number" placeholder="Phone number" name='PhoneNumber' onChange={onChangeHandler} />
                    </Form.Group>

                    {/* 
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}


                    <Button variant="primary" type="submit" onClick={onSubmitHandler}>
                        Submit
                    </Button>
                </fieldset>
            </Form>
        </div>
    );
}

export default TeacherForm;