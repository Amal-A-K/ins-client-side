import React from 'react'
import './Class.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
import mainservice from '../../service/mainservice'

const ClassRoom = () => {
    const navigate=useNavigate()
    const [form, setForm] = useState({
        Year: '',
        Category: '',
        Branch: '',
        Section: ''
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
        console.log(form);

    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            const res = await mainservice.addClassRoom(form)
            if (res != null) {
                console.log("Successfully created class");
                navigate('/ClassroomTab');
            }
            else {
                console.log("Data is null. Add data then submit!");
            }
        }
        catch (err) {
            console.log("Failed to create class");
        }

        // useEffect(()=>{
        //     AddClass(form)
        // },[form])


    }
    return (
        <>
            <Form onSubmit={onSubmitHandler} className='f-1'>
                <fieldset className='fieldcover'>
                <Row>
                    <h1>Classroom Generation</h1>
                </Row>
                <Row>
                    <Col>
                        <Form.Group   className="mb-3" controlId="formBasicYear">
                            <Form.Label  >Year</Form.Label>
                            
                            <Form.Control type="number"  placeholder="Enter Year" onChange={onChangeHandler} name='Year' />
                           
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter Category" onChange={onChangeHandler} name='Category'/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicBranch">
                            <Form.Label>Branch</Form.Label>
                            <Form.Control type="text" placeholder="Enter Branch" onChange={onChangeHandler} name='Branch'/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicSection">
                            <Form.Label>Section</Form.Label>
                            <Form.Control type="text" placeholder="Enter Section" onChange={onChangeHandler} name='Section'/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Col>
                </Row>
                </fieldset>
            </Form>
        </>
    )
}

export default ClassRoom