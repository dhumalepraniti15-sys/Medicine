import React from "react";
import "./Payroll.css";


const Bonus = () => {


const bonusData = [

{
id:1,
employee:"Rohan Patil",
department:"Chief Pharmacist",
bonusType:"Performance Bonus",
amount:"₹30,000",
date:"26 July 2026"
},

{
id:2,
employee:"Priya Sharma",
department:"Pharmacist",
bonusType:"Festival Bonus",
amount:"₹20,000",
date:"28 July 2026"
},

{
id:3,
employee:"Amit Deshmukh",
department:"Assistant Pharmacist",
bonusType:"Annual Bonus",
amount:"₹18,000",
date:"30 July 2026"
},

{
id:4,
employee:"Sneha More",
department:"Cashier",
bonusType:"Attendance Bonus",
amount:"₹12,000",
date:"02 August 2026"
},

{
id:5,
employee:"Rahul Jadhav",
department:"Inventory Manager",
bonusType:"Inventory Performance Bonus",
amount:"₹25,000",
date:"04 August 2026"
}

];



return (

<div className="payroll-page">


<div className="payroll-header">

<h1>
🎁 Bonus Management
</h1>

<p>
Manage pharmacy employee bonus payments and incentives.
</p>

</div>




<div className="payroll-table-container">


<table className="payroll-table">


<thead>

<tr>

<th>ID</th>

<th>Employee Name</th>

<th>Department</th>

<th>Bonus Type</th>

<th>Amount</th>

<th>Date</th>

</tr>

</thead>



<tbody>


{
bonusData.map((item)=>(

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
{item.bonusType}
</td>


<td>
{item.amount}
</td>


<td>
{item.date}
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


export default Bonus;