import React from "react";
import "./Payroll.css";


const EmployeeSalary = () => {


const employees = [

{
id:1,
name:"Dr. Rahul Patil",
department:"Cardiology",
designation:"Senior Doctor",
salary:"₹1,20,000",
joining:"12 Jan 2022",
paymentDate:"28 July 2026",
status:"Paid"
},


{
id:2,
name:"Sneha Sharma",
department:"Nursing",
designation:"Staff Nurse",
salary:"₹45,000",
joining:"05 March 2023",
paymentDate:"28 July 2026",
status:"Paid"
},


{
id:3,
name:"Amit More",
department:"Pharmacy",
designation:"Pharmacist",
salary:"₹35,000",
joining:"18 June 2024",
paymentDate:"Pending",
status:"Pending"
},


{
id:4,
name:"Priya Joshi",
department:"Reception",
designation:"Receptionist",
salary:"₹25,000",
joining:"20 Aug 2023",
paymentDate:"28 July 2026",
status:"Paid"
},


{
id:5,
name:"Dr. Neha Kulkarni",
department:"General Medicine",
designation:"Doctor",
salary:"₹90,000",
joining:"10 Feb 2021",
paymentDate:"28 July 2026",
status:"Paid"
},


{
id:6,
name:"Rajesh More",
department:"Laboratory",
designation:"Lab Technician",
salary:"₹30,000",
joining:"15 May 2024",
paymentDate:"Pending",
status:"Pending"
},


{
id:7,
name:"Kavita Patil",
department:"Administration",
designation:"HR Manager",
salary:"₹55,000",
joining:"01 Dec 2022",
paymentDate:"28 July 2026",
status:"Paid"
}


];



return(

<div className="payroll-page">


<h1>
👨‍⚕️ Employee Salary
</h1>


<p>
Manage employee salaries and payment details.
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