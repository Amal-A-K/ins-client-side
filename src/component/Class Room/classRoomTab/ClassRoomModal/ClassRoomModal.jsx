import React, { useState } from 'react'
import './ClassRoomModal.css'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import { useEffect } from 'react'
import mainservice from '../../../../service/mainservice'

const ClassRoomModal = ({modalData,show,setShow}) => {
    const [form,setForm] = useState({})
    const handleClose = () => setShow(false);
    useEffect(()=>{
        setForm({
            Year:modalData?.Year || '',
            Category:modalData?.Category || '',
            Branch:modalData?.Branch || '',
            Section:modalData?.Section || ''
        })
    },[modalData])

    const ChangeHandler =(event)=>{
        const {name,value} = event.target
        setForm(prevForm=>({
            ...prevForm,
            [name]:value
        }))
        console.log(form);

    }

    const updateHandler = async (e)=>{
        e.preventDefault();
        const id=modalData?._id
       try{
        const res = await mainservice.updateClassRoom(id,form)
        if(res){
            console.log("Successfully updated ClassRoom");
            handleClose();
        }
        else{
            console.log("Failed to update classroom");
        }
       }
       catch(err){
        console.log("Something missing for updating classroom",err);
       } 
    }
  return (
    <>
    <Modal show={show} size="lg" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Class Room Editing Page</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-2" controlId="formBasicYear">
                                        <Form.Label>Year</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Year" name="Year" onChange={ChangeHandler} value={form?.Year} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-2" controlId="formBasicCategory">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Category" name="Category" onChange={ChangeHandler} value={form?.Category} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Form.Group className="mb-2" controlId="formBasicBranch">
                                    <Form.Label>Branch</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Branch" name='Branch' onChange={ChangeHandler} value={form?.Branch || ''} />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group className="mb-2" controlId="formBasicSection">
                                    <Form.Label>Section</Form.Label>
                                    <Form.Control type="text" placeholder="Section" name='Section' onChange={ChangeHandler} width={'200px'} value={form?.Section} />
                                </Form.Group>
                            </Row>

                            <Button variant="secondary" onClick={handleClose} className='classroom-modal-button'>
                                Close
                            </Button>
                            <Button variant="primary" type="submit" onClick={updateHandler}>
                                Save Changes
                            </Button>
                        </Container>
                    </Form>
                </Modal.Body>
               
            </Modal>
    </>
  )
}

export default ClassRoomModal