import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import mainservice from '../../../service/mainservice';

function TeacherModal({ modalData, show, setShow }) {
    console.log(modalData?.FirstName, "firstname");
    const [form, setForm] = useState({

    })
    useEffect(() => {
        setForm({
            FirstName: modalData?.FirstName || '',
            LastName: modalData?.LastName || '',
            Address: modalData?.Address || '',
            DateOfBirth: modalData?.DateOfBirth || '',
            Age: modalData?.Age || '',
            Gender: modalData?.Gender || '',
            BloodGroup: modalData?.BloodGroup || '',
            Qualification: modalData?.Qualification || '',
            Designation: modalData?.Designation || '',
            Subject: modalData?.Subject || '',
            Email: modalData?.Email || '',
            PhoneNumber: modalData?.PhoneNumber || ''


        })
    }, [modalData])
    console.log(form, "form");
    const ins = useSelector((state) => state.loginIdSlice.insDetails)
    const tchrIndexId = ins?.Index[0]?.Teacher;
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
        e.preventDefault();

        // async function UpdateOneTchr(indexid,tchrid,form){

        try {
            const res = await mainservice.updateOneTeacher(tchrIndexId, modalData?._id, form)
            if (res) {
                console.log("Successfully Updated Teacher");
                handleClose();
            }
            else {
                console.log("Failed to upadte teacher");
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
                    <Modal.Title>Teacher Details Editing Page</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-2" controlId="formBasicFirstName">
                                        <Form.Label>FirstName</Form.Label>
                                        <Form.Control type="text" placeholder="Enter First Name" name="FirstName" onChange={ChangeHandler} value={form?.FirstName} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-2" controlId="formBasicLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Last Name" name="LastName" onChange={ChangeHandler} value={form?.LastName} />
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
                                <Form.Group className="mb-2" controlId="formBasicDateOfBirth">
                                    <Form.Label>Date Of Birth</Form.Label>
                                    <Form.Control type="date" placeholder="Enter Date of Birth" name='DateOfBirth' onChange={ChangeHandler} width={'200px'} value={form?.DateOfBirth} />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-2" controlId="formBasicAge">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="number" placeholder="Age" name='Age' onChange={ChangeHandler} value={form?.Age} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-2" controlId="formBasicGender">
                                        <Form.Label>Gender</Form.Label><br></br>
                                        <Form.Select name='Gender' onChange={ChangeHandler} value={form?.Gender}>
                                            <option onChange={ChangeHandler}>--Select your Gender--</option>
                                            <option onChange={ChangeHandler}>Male</option>
                                            <option onChange={ChangeHandler}>Female</option>
                                            <option onChange={ChangeHandler}>Transgender</option>
                                        </Form.Select >
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-2" controlId="formBasicBloodgroup">
                                        <Form.Label>BloodGroup</Form.Label>
                                        <Form.Control type="text" placeholder="BloodGroup" name='BloodGroup' onChange={ChangeHandler} value={form?.BloodGroup} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-2" controlId="formBasicQualification">
                                <Form.Label>Qualification</Form.Label>
                                <Form.Control type="text" placeholder="Qualification" name='Qualification' onChange={ChangeHandler} value={form?.Qualification} />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicDesignation">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text" placeholder="Designation" name='Designation' onChange={ChangeHandler} value={form?.Designation} />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Subject" name='Subject' onChange={ChangeHandler} value={form?.Subject} />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicSubject">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Email" name='Email' onChange={ChangeHandler} value={form?.Email} />
                            </Form.Group>

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
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )

}
export default TeacherModal