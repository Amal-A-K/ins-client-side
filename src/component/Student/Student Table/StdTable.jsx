import React from 'react';
import Table from 'react-bootstrap/Table';
import './StdTable.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import mainservice from '../../../service/mainservice';
import StudentModal from '../Student Modal/StudentModal';

const StdTable = () => {
  const [show, setShow] = useState(false)
  const [modalData,setModalData] = useState()
  const [tableData, setTableData] = useState([])
  const [stdId,setStdId]=useState()
  const ins = useSelector((state) => state.loginIdSlice.insDetails)
  console.log(ins, "Index Student Details in std table");
  // const insId=ins._id
  // console.log(insId,"institute id in std table");
  // const stdId = ins.Index[0].Student;
  console.log(ins.Index[0].Student, "student id in index");

  async function GetStudents(id) {
    try {
      const res = await mainservice.getStudById(id)
      if (res) {
        console.log("Student details available", res.data.result3.Student);
        setTableData(res.data.result3.Student)
        // return res;
      }
      else {
        console.log("Something wrong to get student details");
      }
    }
    catch (error) {
      console.log("Something wrong to fetch data");
    }

  }
  useEffect(() => {
    
    setStdId(ins.Index[0].Student)
    GetStudents(stdId);
  }, [stdId,ins.Index,show]);

//................... Edit Handler .......................................

const onEditHandler =  (data) => {
  console.log(data,"item data");
  if (data) {
    setModalData(data)
    setShow(true)
  }
  else {
    console.log("Failed to store data in state");
  }


}


//................... Delete Handler .......................................

  const  onDeleteHandler =async (id,studid) => {
    
      try {
        console.log(id,"id from mainservice");
        const del = await mainservice.deleteStudOne(id,studid)
        if (del) {
          console.log("Successfully deleted student");
          GetStudents(stdId);
          console.log("Fresh students page");
        }
        else {
          console.log("Failed to delete student");
        }
      }
      catch (error) {
        console.log("SOMETHING MISSSING FOR THE DELETION");
      }
    
  }


  return (
    <>
    <StudentModal modalData={modalData} show={show} setShow={setShow} />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Course</th>
          <th>Date Of Birth</th>
          <th>Email</th>
          <th>Address</th>
          <th>Gaurdian</th>
          <th>PhoneNumber</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.Name}</td>
            <td>{item.Course}</td>
            <td>{item.DateOfBirth}</td>
            <td>{item.Email}</td>
            <td>{item.Address}</td>
            <td>{item.Gaurdian}</td>
            <td>{item.PhoneNumber}</td>
            
            <td><button className='std-button' onClick={()=>onEditHandler(item)} ><i class="fa-regular fa-pen-to-square"></i></button><button onClick={()=>onDeleteHandler(stdId,item._id)} className='std-button'><i class="fa-solid fa-trash"></i></button></td>
          </tr>
        ))}

      </tbody>
    </Table>
    </>

  )
}

export default StdTable