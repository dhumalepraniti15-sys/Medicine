import React from "react";
import "./Payroll.css";


const EmployeeSalary = () => {


const employees = [

{
id:1,
name:"Rohan Patil",
department:"Pharmacy",
designation:"Chief Pharmacist",
salary:"₹60,000",
joining:"12 Jan 2022",
paymentDate:"28 July 2026",
status:"Paid"
},


{
id:2,
name:"Priya Sharma",
department:"Pharmacy",
designation:"Senior Pharmacist",
salary:"₹45,000",
joining:"05 March 2023",
paymentDate:"28 July 2026",
status:"Paid"
},


{
id:3,
name:"Amit More",
department:"Pharmacy",
designation:"Assistant Pharmacist",
salary:"₹35,000",
joining:"18 June 2024",
paymentDate:"Pending",
status:"Pending"
},


{
id:4,
name:"Sneha Joshi",
department:"Sales",
designation:"Cashier",
salary:"₹28,000",
joining:"20 Aug 2023",
paymentDate:"28 July 2026",
status:"Paid"
},


{
id:5,
name:"Rahul Kulkarni",
department:"Inventory",
designation:"Inventory Manager",
salary:"₹50,000",
joining:"10 Feb 2021",
paymentDate:"28 July 2026",
status:"Paid"
},


{
id:6,
name:"Kavita More",
department:"Store",
designation:"Store Keeper",
salary:"₹30,000",
joining:"15 May 2024",
paymentDate:"Pending",
status:"Pending"
},


{
id:7,
name:"Anjali Patil",
department:"Administration",
designation:"Accounts Manager",
salary:"₹55,000",
joining:"01 Dec 2022",
paymentDate:"28 July 2026",
status:"Paid"
}

];



return(

<div className="payroll-page">


<h1>
💊 Employee Salary
</h1>


<p>
Manage pharmacy employee salaries and payment details.
</p>




<table className="payroll-table">


<thead>

<tr>

<th>ID</th>

<th>Employee Name</th>

<th>Department</th>

<th>Designation</th>

<th>Salary</th>

<th>Joining Date</th>

<th>Payment Date</th>

<th>Status</th>

</tr>

</thead>



<tbody>


{
employees.map((emp)=>(

<tr key={emp.id}>


<td>{emp.id}</td>

<td>{emp.name}</td>

<td>{emp.department}</td>

<td>{emp.designation}</td>

<td>{emp.salary}</td>

<td>{emp.joining}</td>

<td>{emp.paymentDate}</td>


<td>

<span
className={
emp.status==="Paid"
?
"status-paid"
:
"status-pending"
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

)

}


export default EmployeeSalary;