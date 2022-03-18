
import{Form ,FormControl,Button } from 'react-bootstrap';
import React,{useEffect , useState} from 'react'
import SallesCard from './SallesCard'
import { getSalle } from '../../redux/actions/contactAction'
import {useDispatch, useSelector} from 'react-redux';

function Salles() {
  const [search , setSearch] = useState(0)
  const [filterSalles,setFilterSalles]=useState([])
  const salles=useSelector(state=>state.contactReducer.salles)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getSalle())
    setFilterSalles(salles)
    },[])
// handle filter
const handleFilter=()=>{
  setFilterSalles(salles.filter(el=>el.prix==search))
}
  
const reset=()=>{
  setFilterSalles(salles)
}
  return (
    <div>
      <Form className="d-flex">
           <FormControl onChange={(event)=>setSearch(event.target.value)}
             type="number"
             placeholder="You Can Search Here"
             className="me-2"
             aria-label="Search"
             style={{width:"20%",marginLeft:"20%"}}
           />
           <Button   variant='secondary' onClick={handleFilter} >Filtre Par Prix</Button>
           <Button  variant='danger' onClick={reset} >reset</Button>
         </Form>
         <br></br>

{
     filterSalles.map((el=><SallesCard el = {el} key={el._id}  />))
     
     
     
     }





    </div>
  )
}

export default Salles