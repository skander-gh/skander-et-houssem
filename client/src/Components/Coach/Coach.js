import {useDispatch, useSelector} from 'react-redux';
import React,{useEffect , useState} from 'react'
import { getCoach } from '../../redux/actions/contactAction'
import CoachCard from './CoachCard'
import{Form ,FormControl ,Button } from 'react-bootstrap';
function Coach() {
  const [search , setSearch] = useState(0)
  const [filterCoachs,setFilterCoachs]=useState([])
  const coachs=useSelector(state=>state.contactReducer.coachs)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCoach())
    setFilterCoachs(coachs)
    },[])

// handle filter
    const handleFilter=()=>{
      setFilterCoachs(coachs.filter(el=>el.prix==search))
    }
    const reset=()=>{
      setFilterCoachs(coachs)
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
     filterCoachs.map ((el=><CoachCard el = {el}  key={el._id}  ></CoachCard>))}


       
    </div>
  )
}

export default Coach