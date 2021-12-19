import axios from "axios";
import { useEffect, useState } from 'react'


function Employee({selectedEmployee}){
 
    
    const [selectedEmployeeData, setselectedEmployeeData] = useState(null);

    useEffect(() => {
        axios.get(`http://statenweb.mockable.io/employee/${selectedEmployee}`).then((r) => setselectedEmployeeData(r.data));
    
    }, [selectedEmployee]);

    if(!selectedEmployeeData){
        return <div className="display-4 vh-100 d-flex justify-content-center align-items-center"> Looking...</div>
    }

   const {
       id,
       name,
       startDate,
       role,
       department,
       photo
   } = selectedEmployeeData;

   return <div >
        <div className="card border-dark" style={{width: '18rem'}}>
        <img style = {{maxHeight: '300px'}} src={photo} alt={photo}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    <p><strong>Start date: </strong>{startDate}</p>
                    <p><strong>Department: </strong>{department}</p>
                    <p><strong>Role: </strong>{role}</p>
                </p>
                <button className="my-1 btn-danger" onClick={() =>  alert("Pretend they are fired")}>FIRE</button>
            </div>
        </div>
   </div>

}

export default Employee;