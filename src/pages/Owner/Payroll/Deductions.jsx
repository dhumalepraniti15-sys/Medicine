import React from "react";
import "./Payroll.css";


function Deductions(){


const deductions = [

{
id:1,
name:"Dr. Rajesh Patil",
department:"Doctor",
basicSalary:"₹1,20,000",
tax:"₹12,000",
insurance:"₹3,000",
total:"₹15,000"
},


{
id:2,
name:"Anita Sharma",
department:"Nurse",
basicSalary:"₹45,000",
tax:"₹4,500",
insurance:"₹1,500",
total:"₹6,000"
},


{
id:3,
name:"Rahul Deshmukh",
department:"Pharmacist",
basicSalary:"₹35,000",
tax:"₹3,500",
insurance:"₹1,000",
total:"₹4,500"
},


{
id:4,
name:"Sneha More",
department:"Receptionist",
basicSalary:"₹25,000",
tax:"₹2,500",
insurance:"₹800",
total:"₹3,300"
},


{
id:5,
name:"Amit Jadhav",
department:"Lab Technician",
basicSalary:"₹40,000",
tax:"₹4,000",
insurance:"₹1,200",
total:"₹5,200"
}

];



return(


<div className="payroll-page">



<div className="payroll-header">

<h1>
➖ Deductions
</h1>

<p>
Manage employee salary deductions.
</p>

</div>




<div className="salary-table-card">


<table className="payroll-table">


<thead>

<tr>

<th>
ID
</th>


<th>
Employee Name
</th>


<th>
Department
</th>


<th>
Basic Salary
</th>


<th>
Tax Deduction
</th>


<th>
Insurance
</th>


<th>
Total Deduction
</th>


</tr>

</thead>




<tbody>


{
deductions.map((item)=>(

<tr key={item.id}>


<td>
{item.id}
</td>


<td>
{item.name}
</td>


<td>
{item.department}
</td>


<td>
{item.basicSalary}
</td>


<td>
{item.tax}
</td>


<td>
{item.insurance}
</td>


<td>

<span className="pending-status">
{item.total}
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


export default Deductions;