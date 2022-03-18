import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './Components/home/Home';
import PrisedeMasse from './Components/masse/Prisedemasse';
import PrisedeSéche from './Components/séche/Prisedeséche';
import PrivateRoute from './Components/privateRoute';
import ProgrammeDeMuscu from './Components/ProgrammeDeMuscu';
import SignUp from './Components/Signup/SignUp';
import Conseil from './Components/Conseil/Conseil';
import Admin from './Components/Admin/Admin'
import ExercicesListe from './Components/exercises/ExercicesListe';
import Navbare from './Components/Navbar';
import { getcurrent } from './redux/actions/authActions';
import { useDispatch } from 'react-redux';
import Login from './Components/Login';
import GetUsers from './Components/Admin/GetUsers';
import Coach from './Components/Coach/Coach';
import AdminSalles from './Components/Admin/Salles';
import Salles from './Components/Salles/Salles'
import AddContact from './Components/Admin/AddContact';
import AdminCoachs from './Components/Admin/Coachs';
import AdminUsers from './Components/Admin/Users';
import EditContact from './Components/Admin/EditContact';

function App() {

 const dispatch=useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('token')){
      dispatch (getcurrent())}
    }
    ,[])
  const [exercises,setexercises]  = useState([
    {
       id: 1,
       Title: "Biceps",
       video: "https://www.youtube.com/embed/ciTeNO4Hqf0" ,
       Description: " Le biceps brachial est un muscle situé dans la partie antérieure du bras, région du membre supérieur localisée entre l'épaule et le coude..",
     }, 
     {
      id: 2,
      Title: "Chest",
      video: "https://www.youtube.com/embed/jWc8gHlAkoM" ,
      Description: " Partie du corps humain qui s'étend des épaules à l'abdomen et qui contient le cœur et les poumons.",
    }, 
    {
      id: 3,
      Title: "Jambe",
      video: "https://www.youtube.com/embed/AqrJwvyPn-g" ,
      Description: "Partie du membre inférieur comprise entre le genou et le cou-de-pied. Dans le langage courant, le membre inférieur tout entier.",
    }, 
    {
      id: 4,
      Title: "Triceps",
      video: "https://www.youtube.com/embed/o3Pidia57m4" ,
      Description: " Le muscle triceps brachial est un muscle de la partie postérieure du bras, formé de trois portions musculaires : la longue portion du triceps, le vaste externe et le vaste interne.",
    }, 
    {
      id: 5,
      Title: "Dorsaux",
      video: "https://www.youtube.com/embed/tQr4Om_Mhc8" ,
      Description: " Le grand dorsal est le plus grand et large muscle de notre corps. C'est lui qui donne la forme en V du dos. Le grand dorsal est le plus grand et large muscle de notre corps.",
    }, 
    ])
    const [search , setsearch] = useState('')
  return (
    <div className="App">
<Navbare></Navbare>
<br></br>
<br></br>
    <Routes>
    <Route path ='/' element= {<Home/>} />
    <Route path='/signup'  element={<SignUp></SignUp>}   > </Route>
    <Route path='/signin'  element={<Login />}   ></Route>
    <Route path='/ProgrammeDeMuscu'  element={<PrivateRoute><ProgrammeDeMuscu></ProgrammeDeMuscu></PrivateRoute>}  ></Route>
    <Route path='/PrisedeMasse'  element={<PrivateRoute><PrisedeMasse/></PrivateRoute>}   > </Route>
    <Route path='/PrisedeSeche'  element={<PrivateRoute><PrisedeSéche/></PrivateRoute> }   > </Route>

    <Route path='/ExercicesListe'  element={ <PrivateRoute><ExercicesListe setsearch={setsearch}  search={search} exercises={exercises}   setexercises={setexercises}   /> </PrivateRoute>  }   > </Route>
    <Route path='/admin'  element={<PrivateRoute><Admin/></PrivateRoute>}   > </Route>
    <Route path='/Conseil'  element={<PrivateRoute><Conseil/></PrivateRoute> }   > </Route>
    <Route path ='/GetUsers' element= {<PrivateRoute><GetUsers/></PrivateRoute>} />
    <Route path ='/Salles' element= {<PrivateRoute><Salles/></PrivateRoute>} />
    <Route path ='/AddContact' element= {<PrivateRoute><AddContact/></PrivateRoute>} />
    <Route path ='/EditContact' element= {<PrivateRoute><EditContact/></PrivateRoute>} />
    {/* <Route path ='/CardAdmin' element= {<PrivateRoute><CardAdmin/></PrivateRoute>} /> */}
    <Route path='/MeilleursCoachEnTunis'  element={<Coach      /> }   > </Route>
    <Route path='/MeilleursSalleEnTunis'  element={<Salles      /> }   > </Route>
    <Route path='/admin/salles' element={<PrivateRoute><AdminSalles/></PrivateRoute>} />
    <Route path='/admin/coachs' element={<PrivateRoute><AdminCoachs/></PrivateRoute>} />
    <Route path='/admin/users' element={<PrivateRoute><AdminUsers/></PrivateRoute>} />
    </Routes>
  
    </div>
  );
}

export default App;
