import React from "react";
import "./Payroll.css";


function Deductions(){


const deductions = [

{
id:1,
name:"Rohan Patil",
department:"Chief Pharmacist",
basicSalary:"₹60,000",
tax:"₹6,000",
insurance:"₹2,000",
total:"₹8,000"
},


{
id:2,
name:"Priya Sharma",
department:"Pharmacist",
basicSalary:"₹45,000",
tax:"₹4,500",
insurance:"₹1,500",
total:"₹6,000"
},


{
id:3,
name:"Amit Deshmukh",
department:"Assistant Pharmacist",
basicSalary:"₹35,000",
tax:"₹3,500",
insurance:"₹1,000",
total:"₹4,500"
},


{
id:4,
name:"Sneha More",
department:"Cashier",
basicSalary:"₹28,000",
tax:"₹2,800",
insurance:"₹900",
total:"₹3,700"
},


{
id:5,
name:"Rahul Jadhav",
department:"Inventory Manager",
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
Manage pharmacy employee salary deductions.
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