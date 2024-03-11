import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import mainservice from '../../../service/mainservice';

function StudentModal({ modalData, show, setShow }) {
    
    console.log(modalData?.Name, "Name");
    const [form, setForm] = useState({

    })
    useEffect(() => {
        setForm({
            Name: modalData?.Name || '',
            Course: modalData?.Course || '',
            DateOfBirth: modalData?.DateOfBirth || '',
            Email: modalData?.Email || '',
            Address: modalData?.Address || '',
            Gaurdian: modalData?.Gaurdian || '',
            PhoneNumber: modalData?.PhoneNumber || ''


        })
    }, [modalData])
    console.log(form, "form");
    const ins = useSelector((state) => state.loginIdSlice.insDetails)
    const stdIndexId = ins?.Index[0]?.Student;
    const handleClose = () => setShow(false);
    // const handleShow = () => setshow(true);
    const ChangeHandler = (event) => {
        const { name, value } = event.target
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
        console.log(form);
    }
    console.log(modalData, "modaldata");
    const updateHandler = async (e) => {
        e.preventDefault()

        // async function UpdateOneTchr(indexid,tchrid,form){

        try {
            const res = await mainservice.updateOneStudent(stdIndexId, modalData?._id, form)
            if (res) {
                console.log("Successfully Updated Student");
                handleClose();
                
            }
            else {
                console.log("Failed to upadte student");
            }
        }
        catch (err) {
            console.log("Something is misssing for teacher updation ");
        }
        // }


    }

    return (
        <>
            <Modal show={show} size="lg" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Student Details Editing Page</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-2" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" name="Name" onChange={ChangeHandler} value={form?.Name} />
                                    </Form.Group>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-2" controlId="formBasicCourse">
                                        <Form.Label>Course</Form.Label>
                                        <Form.Control type="text" placeholder="Course" name='Course' onChange={ChangeHandler} value={form?.Course} />
                                    </Form.Group>
                                </Col>
                            </Row>



                            <Row>
                                <Form.Group className="mb-2" controlId="formBasicDateOfBirth">
                                    <Form.Label>Date Of Birth</Form.Label>
                                    <Form.Control type="date" placeholder="Enter Date of Birth" name='DateOfBirth' onChange={ChangeHandler} width={'200px'} value={form?.DateOfBirth} />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-2" controlId="formBasicSubject">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" placeholder="Email" name='Email' onChange={ChangeHandler} value={form?.Email} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Form.Group className="mb-2" controlId="formBasicAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter address" name='Address' onChange={ChangeHandler} value={form?.Address || ''} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-2" controlId="formBasicGaurdian">
                                        <Form.Label>Gaurdian</Form.Label>
                                        <Form.Control type="text" placeholder="Gaurdian" name='Gaurdian' onChange={ChangeHandler} value={form?.Gaurdian} />
                                    </Form.Group>
                                </Col>
                            </Row>


                            <Form.Group className="mb-2" controlId="formBasicPhonenumber">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="number" placeholder="Phone number" name='PhoneNumber' onChange={ChangeHandler} value={form?.PhoneNumber} />
                            </Form.Group>

                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit" onClick={updateHandler}>
                                Save Changes
                            </Button>
                        </Container>
                    </Form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit' onClick={updateHandler}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )

}
export default StudentModal