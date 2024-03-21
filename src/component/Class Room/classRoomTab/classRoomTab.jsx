import React from 'react'
import './ClassRoom.css'
import Table from 'react-bootstrap/esm/Table'
import { useState } from 'react'
import { useEffect } from 'react'
import mainservice from '../../../service/mainservice'
import ClassRoomModal from './ClassRoomModal/ClassRoomModal'


const ClassRoomTab = () => {
    const [tabData, setTabData] = useState([]);
    const [show,setShow] = useState(false)
    const [modalData,setModalData] = useState()

    async function ClassDetails() {
        const res = await mainservice.getClassRoom()
        if (res != null) {
            setTabData(res?.data?.result)
            console.log(res?.data?.result, "res content");
            // return res.data
        }
        else {
            console.log("Failed to get class details");
        }
    }

    useEffect(() => {
        ClassDetails();

    }, [show])

    //................Edit Handler.......................

    const onEditHandler =(data)=>{
        console.log(data,"data log");
        if(data){
            setModalData(data)
            setShow(true)
        }
        else{
            console.log("Failed to store modal data");
        }

    }

    //.....................Delete Handler...............................

    const DeleteHandler = async (id)=>{
        if(id){
            try{
                const res= await mainservice.deleteClassRoom(id)
                if(res){
                    console.log("Successfully deleted the class");
                    ClassDetails();
                }
                else{
                    console.log("Failed to delete class room");
                }
            }
            catch(err){
                console.log("Something missing for deleting classroom");
            }
        }
        else{
            console.log("Couldn't found any id for deleting");
        }

    }
    return (
        <div className='cls'>
            <ClassRoomModal modalData={modalData} show={show} setShow={setShow}/>
           
            <h1>Class Details</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Year</th>
                        <th>Category</th>
                        <th>Branch</th>
                        <th>Section</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tabData?.map((item, index) => (
                        <tr key={item?._id}>
                            <td>{index + 1}</td>
                            <td>{item?.Year}</td>
                            <td>{item?.Category}</td>
                            <td>{item?.Branch}</td>
                            <td>{item?.Section}</td>
                            <td><button className='cls-button' onClick={()=>{onEditHandler(item)}}><i class="fa-solid fa-pen-to-square"></i></button><button className='cls-button' onClick={()=>{DeleteHandler(item._id)}}><i class="fa-solid fa-trash"></i></button></td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    )
}

export default ClassRoomTab