import React from "react";
import "./Payroll.css";


const Payslips = () => {


const payslipData = [

{
id:1,
employee:"Dr. Rahul Sharma",
department:"Cardiology",
month:"July 2026",
salary:"₹1,20,000",
status:"Paid"
},


{
id:2,
employee:"Nikita Patil",
department:"Pharmacy",
month:"July 2026",
salary:"₹45,000",
status:"Paid"
},


{
id:3,
employee:"Amit Deshmukh",
department:"Administration",
month:"July 2026",
salary:"₹60,000",
status:"Pending"
},


{
id:4,
employee:"Priya More",
department:"Nursing",
month:"July 2026",
salary:"₹55,000",
status:"Paid"
},


{
id:5,
employee:"Sanjay Jadhav",
department:"Laboratory",
month:"July 2026",
salary:"₹40,000",
status:"Pending"
}


];




return (

<div className="payroll-page">


<div className="payroll-header">

<h1>
📄 Employee Payslips
</h1>

<p>
Manage employee monthly payslips and salary records.
</p>

</div>





<div className="payroll-table-container">


<table className="payroll-table">


<thead>

<tr>

<th>ID</th>

<th>Employee Name</th>

<th>Department</th>

<th>Month</th>

<th>Salary</th>

<th>Status</th>

<th>Action</th>

</tr>

</thead>




<tbody>


{
payslipData.map((item)=>(


<tr key={item.id}>


<td>
{item.id}
</td>


<td>
{item.employee}
</td>


<td>
{item.department}
</td>


<td>
{item.month}
</td>


<td>
{item.salary}
</td>


<td>

<span 
className={
item.status==="Paid"
?
"status-paid"
:
"status-pending"
}
>

{item.status}

</span>

</td>



<td>

<button 
className="view-btn"
onClick={()=>alert(`Downloading Payslip of ${item.employee}`)}
>

Download

</button>

</td>



</tr>


))

}


</tbody>



</table>



</div>



</div>

);

};


export default Payslips;