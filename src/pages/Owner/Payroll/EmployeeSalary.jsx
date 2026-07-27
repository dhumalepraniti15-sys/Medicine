import React from "react";
import "./Payroll.css";


function EmployeeSalary(){

const employees = [

{
id:1,
name:"Rohan Patil",
department:"Chief Pharmacist",
salary:"₹60,000",
status:"Paid"
},

{
id:2,
name:"Priya Sharma",
department:"Pharmacist",
salary:"₹45,000",
status:"Paid"
},

{
id:3,
name:"Amit Deshmukh",
department:"Assistant Pharmacist",
salary:"₹35,000",
status:"Pending"
},

{
id:4,
name:"Sneha More",
department:"Cashier",
salary:"₹28,000",
status:"Paid"
},

{
id:5,
name:"Rahul Jadhav",
department:"Inventory Manager",
salary:"₹40,000",
status:"Pending"
}

];


return(

<div className="payroll-page">


<div className="payroll-header">

<h1>
💊 Employee Salary
</h1>

<p>
Manage pharmacy employee salaries and payment details.
</p>

</div>



<div className="salary-table-card">


<table className="payroll-table">


<thead>

<tr>

<th>
Employee ID
</th>

<th>
Employee Name
</th>

<th>
Department
</th>

<th>
Monthly Salary
</th>

<th>
Payment Status
</th>

</tr>

</thead>



<tbody>


{
employees.map((emp)=>(

<tr key={emp.id}>


<td>
{emp.id}
</td>


<td>
{emp.name}
</td>


<td>
{emp.department}
</td>


<td>
{emp.salary}
</td>


<td>

<span
className={
emp.status==="Paid"
?
"paid-status"
:
"pending-status"
}
>

{emp.status}

</span>

</td>


</tr>

))

}


</tbody>


</table>


</div>


</div>

)

}


export default EmployeeSalary;