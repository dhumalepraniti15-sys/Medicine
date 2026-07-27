import React from "react";
import "./Payroll.css";


const Payslips = () => {


const payslipData = [

{
id:1,
employee:"Rohan Patil",
department:"Chief Pharmacist",
month:"July 2026",
salary:"₹60,000",
status:"Paid"
},


{
id:2,
employee:"Priya Sharma",
department:"Pharmacist",
month:"July 2026",
salary:"₹45,000",
status:"Paid"
},


{
id:3,
employee:"Amit Deshmukh",
department:"Assistant Pharmacist",
month:"July 2026",
salary:"₹35,000",
status:"Pending"
},


{
id:4,
employee:"Sneha More",
department:"Cashier",
month:"July 2026",
salary:"₹28,000",
status:"Paid"
},


{
id:5,
employee:"Rahul Jadhav",
department:"Inventory Manager",
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
Manage pharmacy employee monthly payslips and salary records.
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