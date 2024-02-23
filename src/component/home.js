import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { instituteDetails } from '../redux/slice/Loginidslice'
import { useEffect } from "react";
import mainservice from "../service/mainservice";
import './home.css';


const Home = () => {
    const dispatch=useDispatch();
    const userName = useSelector((state) => state.userSlice.User)
    // const details = useSelector((state) => state.userSlice.User)
    // const ins=useSelector((state)=>state.loginIdSlice.insDetails)
    // console.log(ins.Index[0].Teacher,"Index Teacher Details");
    // console.log(details,"redux data fetched in Home page");
    console.log(userName,"redux data fetched in Home page");
    const insid=userName.instituteid;
    
    async function InsDetails(id){
        const res=await mainservice.getINSByid(id)
        if(res.data!=null){
            const insdata=res.data.insdata
            dispatch(instituteDetails(insdata))
            // return res.data.insdata
            //  return res.data.insdata.InstitutionName

            console.log(res.data.insdata,"institution details in Home page");
        }
        else{
            console.log("failed to get institution details");
        }

        
    }
    useEffect(()=>{
        if(insid){
            InsDetails(insid);

        }
    },[insid])
    console.log(userName, "username ha ha aha");
    return (
        <div className="home">
            <h1>Welcome <span>{" " + userName.firstName + " " + userName.lastName}</span></h1>
            
        </div>

    )

}
export default Home;