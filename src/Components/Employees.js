// Create a button,
// Upon getting the content from the endpoint, output each empl as a button

import axios from "axios";
import { useState, useEffect } from "react";
import Employee from "./Employee";


function Employees() {

    
    const [employeeData, setEmployeeData] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(getEmployees, []);

    function getEmployees(){
        
        axios.get('https://statenweb.mockable.io/employees').then(function(resonse){
            
            setEmployeeData(resonse.data);
        });
        
    }

    if(employeeData.length === 0){
        return <div className="display-2 vh-100 d-flex justify-content-center align-items-center animate__animated animate__flash animate__repeat-infinte"> Hold Up🤚</div>
    }
   
    if (selectedEmployee) {
        return (
        <div className="my-3 mx-3">
            <Employee selectedEmployee={selectedEmployee}/>
            <button className="my-2" onClick={() => setSelectedEmployee(null)}>View All</button>
        </div>
        );
    }



    return(
        <div className="my-5 container">
            <h2>Here is a list of all employees</h2>

            <table className="table">
            <thead>
                <tr>
                <th scope="col">ID#</th>
                <th scope="col">Name</th>
                <th scope="col">Department</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {employeeData.map(function(employee){
                return (
                    <tr key = {employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.department}</td>
                    <td>
                        <button onClick={() => setSelectedEmployee(employee.id)}> 
                            Details
                        </button>
                    </td>
                    </tr>
                    )
            })}
            </tbody>
            </table>
        </div>
    );
}

export default Employees;