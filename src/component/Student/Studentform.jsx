import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import mainservice from '../../service/mainservice';
import './Studentform.css';

function Studentform() {
    const [form, setForm] = useState({})
    const navigate = useNavigate();
    const institute = useSelector((state) => state.loginIdSlice.insDetails)
    const ins = useMemo(() => institute, [institute]);


    useEffect(() => {
        console.log(ins, "Index Student Details");

    }, [ins])
    const stdId = ins?.Index[0]?.Student;
    const onChangeHandler = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
        console.log(form);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        async function AddStud(id, fo) {

            const res = await mainservice.addStudent(id, fo)
            console.log(res,"consoling res");

            if (res.data != null) {
                console.log("Successfully added Student");
                navigate('/StdTable')

            }
            else {
                console.log("Failed to add Student");
            }


        }

        AddStud(stdId, form);
    }

    return (
        <div className='studa'>
            <Form>
                <fieldset className='studf'>
                    <h1>
                        Student Form
                    </h1><br></br>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={onChangeHandler} name='Name' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCourse">
                        <Form.Label>Course</Form.Label>
                        <Form.Control type="text" placeholder="Enter course" onChange={onChangeHandler} name='Course' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDataeOfBirth">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control type="date" placeholder="Enter Date Of Birth" onChange={onChangeHandler} name='DateOfBirth' width={'200px'} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" onChange={onChangeHandler} name='Email' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="address" as="textarea" placeholder="Address" onChange={onChangeHandler} name='Address' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicGaurdian">
                        <Form.Label>Gaurdian</Form.Label>
                        <Form.Control type="text" placeholder="Gaurdian" onChange={onChangeHandler} name='Gaurdian' />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="number" placeholder="Phone number" onChange={onChangeHandler} name='PhoneNumber' />
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

export default Studentform;