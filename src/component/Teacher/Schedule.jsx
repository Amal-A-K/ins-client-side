import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import './Schedule.css';

const Schedule = () => {
    return (
        <Form>
            <fieldset className='fi'>
                <h1>Time Table Schedule</h1>
                <Form.Group>
                    <Form.Label className='dt'>Date</Form.Label>
                    <Form.Control type='date' placeholder='Enter date' name='Date'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='dt'>Time</Form.Label>
                    <Form.Control type='time' placeholder='Enter time' name='Time'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='dt'>Subject</Form.Label>
                    <Form.Control type='text' placeholder='Enter subject' name='Subject'></Form.Control>
                </Form.Group><br></br>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </fieldset>
        </Form>
    )
}

export default Schedule