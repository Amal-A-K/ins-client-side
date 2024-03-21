import './App.css';
import InsSignup from './component/inssignup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InsLogIn from './component/inslogin';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

import InsReg from './component/insRegistration';
import Home from './component/home';
import mainservices from './service/mainservice';
import { AddUser } from './redux/slice/userslice';
import { loginId, logInIdentification} from './redux/slice/Loginidslice';
import Profile from './component/profile';

import ForceRedirect from './routeProtection/ForcedRedirect'
import ProtectedRoute from './routeProtection/ProtectedRoute';
import Main from './component/Main/main';
import Studentform from './component/Student/Studentform';
import TeacherForm from './component/Teacher/TeacherForm';
import Schedule from './component/Teacher/Schedule';
import StdTable from './component/Student/Student Table/StdTable';
import TeacherTab from './component/Teacher/TeacherTable/TeacherTab'
import ClassRoom from './component/Class Room/ClassRoom';
import ClassRoomTab from './component/Class Room/classRoomTab/classRoomTab';

function App() {
  const dispatch = useDispatch()

  const userID = useSelector((state) =>
    state.loginIdSlice.userId
  )
  async function VerifyToken(data) {
    const res = await mainservices.verifyToken(data)
    if (res.data != null) {
      console.log(res);
      dispatch(loginId(res.data._id))
      dispatch(logInIdentification(true))
      FetchData(res.data._id)
    }
    else {
      console.log("error token verification");
      dispatch(logInIdentification(false))
      console.log(data, "ERR MSG");
    }
  }
  async function FetchData(id) {
    const res = await mainservices.getUser(id)
    if (res.data != null) {
      console.log(res.data,"fetch datas");
      const userDetails = {
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        instituteid: res.data.InstituteId
      }
      dispatch(AddUser(userDetails))

    }
    else {
      console.log("User couldn't find");
    }
  }
  // const details=useSelector((state)=>state.userSlice.User)
  // const insDetails=FetchData(details.instituteid)
  // dispatch(instituteDetails(insDetails))
  // console.log(insDetails);

  const Bool = useSelector((state) => { return state.loginIdSlice.isLoggedIn })
  const token = localStorage.getItem('Token')
  console.log(Bool);
  useEffect(() => {
    if (token) {
      const data = { token: token }
      VerifyToken(data);
      FetchData(userID);

      console.log(userID, "userid");

    }


  }, [Bool])

  // FetchData(id)
  // useEffect
  return (

    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InsSignup />}></Route>
          <Route path='/Insreg' element={<InsReg />}></Route>
          <Route path='/Login' element={<ForceRedirect user={Bool}><InsLogIn /></ForceRedirect>}></Route>
          <Route element={<Main />}>
            <Route path='/Home' element={<ProtectedRoute user={Bool}><Home /></ProtectedRoute>}></Route>
            <Route path='/std' element={<ProtectedRoute user={Bool}><Studentform /></ProtectedRoute>}></Route>
            <Route path='/tchr' element={<ProtectedRoute user={Bool}><TeacherForm /></ProtectedRoute>}></Route>
            <Route path='/sch' element={<ProtectedRoute user={Bool}><Schedule /></ProtectedRoute>}></Route>
            <Route path='/Profile' element={<ProtectedRoute user={Bool}><Profile /></ProtectedRoute>}></Route>
            <Route path='/StdTable' element={<ProtectedRoute user={Bool}><StdTable/></ProtectedRoute>}></Route>
            <Route path='/TchrTable' element={<ProtectedRoute user={Bool}><TeacherTab/></ProtectedRoute>}></Route>
            <Route path='/Classroom' element={<ProtectedRoute user={Bool}><ClassRoom/></ProtectedRoute>}></Route>
            <Route path='/ClassroomTab' element={<ProtectedRoute user={Bool}><ClassRoomTab/></ProtectedRoute>}></Route>

          </Route>

        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;