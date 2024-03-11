import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/esm/Table'
import TeacherModal from '../TeacherModal/TeacherModal'
import mainservice from '../../../service/mainservice'
import './TeacherTab.css'

const TeacherTab = () => {
  const [show, setShow] = useState(false)
  const [tableData, setTableData] = useState([])
  const [modalData,setModalData] = useState()
  console.log(tableData,"table data");
  const [tchrId, setTchrId] = useState()
  // const [tableId,setTableId]= useState()
  const ins = useSelector((state) => state.loginIdSlice.insDetails)
  console.log(ins, "Institute details teacher table");
  // const tchrId=ins?.Index[0]?.Teacher;
  // console.log(tchrId,"teacher id in index");

  //---------------- Collecting Teacher details --------------------------------//

  async function GetTeachers(id) {
    try {
      const res = await mainservice.getTchrById(id)
      if (res) {
        console.log("Teacher details available", res.data.result3.Teacher);
        setTableData(res.data.result3.Teacher)
        // return res;
      }
      else {
        console.log("Something wrong to get TEACHER details");
      }
    }
    catch (error) {
      console.log("Something wrong to fetch TEACHER data");
    }

  }

  useEffect(() => {
    setTchrId(ins?.Index[0]?.Teacher)
    console.log(tchrId, "teacher id in index");
    GetTeachers(tchrId);
  }, [tchrId, ins.Index,show]);

  //----------------- EditHandler ---------------------------------------------

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


  //---------------- DeleteHandler --------------------------------------------

  const onDeleteHandler = async (tchrid, id) => {

    try {
      console.log(tchrid, "id from mainservice");
      const del = await mainservice.deleteOneTeacher(tchrid, id)
      if (del) {
        console.log("Successfully deleted teacher");
        GetTeachers(tchrId);
        console.log("Fresh teachers page");
      }
      else {
        console.log("Failed to delete teacher");
      }
    }
    catch (error) {
      console.log("SOMETHING MISSSING FOR THE DELETION OF TEACHER");
    }

  }


  return (
    <>
      <TeacherModal modalData={modalData} show={show} setShow={setShow} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Index</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address</th>
            <th>DateOfBirth</th>
            <th>Age</th>
            <th>Gender</th>
            <th>BloodGroup</th>
            <th>Qualification</th>
            <th>Designation</th>
            <th>Subject</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.FirstName}</td>
              <td>{item.LastName}</td>
              <td>{item.Address}</td>
              <td>{item.DateOfBirth}</td>
              <td>{item.Age}</td>
              <td>{item.Gender}</td>
              <td>{item.BloodGroup}</td>
              <td>{item.Qualification}</td>
              <td>{item.Designation}</td>
              <td>{item.Subject}</td>
              <td>{item.Email}</td>
              <td>{item.PhoneNumber}</td>
              <td><button className='tchr-button' onClick={()=>onEditHandler(item)} ><i class="fa-regular fa-pen-to-square"></i></button><button onClick={() => onDeleteHandler(tchrId, item._id)} className='tchr-button'><i class="fa-solid fa-trash"></i></button></td>

            </tr>
          ))}

        </tbody>
      </Table>
    </>


  )
}

export default TeacherTab