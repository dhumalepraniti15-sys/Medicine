import React from "react";


const IncomeLedger = () => {


const incomeData = [

{
date:"26 July 2026",
source:"Medicine Sales",
amount:"$5000"
},

{
date:"27 July 2026",
source:"Prescription Medicines",
amount:"$2500"
},

{
date:"28 July 2026",
source:"OTC Medicines",
amount:"$3200"
},

{
date:"29 July 2026",
source:"Health Supplements",
amount:"$1800"
},

{
date:"30 July 2026",
source:"Medical Devices Sales",
amount:"$4500"
},

{
date:"31 July 2026",
source:"Personal Care Products",
amount:"$12000"
},

{
date:"01 August 2026",
source:"Baby Care Products",
amount:"$6500"
},

{
date:"02 August 2026",
source:"Diabetic Care Products",
amount:"$3500"
},

{
date:"03 August 2026",
source:"First Aid Products",
amount:"$2200"
},

{
date:"04 August 2026",
source:"Home Delivery Orders",
amount:"$4000"
}

];



const totalIncome = incomeData.reduce(

(total,item)=>

total + Number(
item.amount.replace("$","")
),

0

);




return(


<div className="page-container">


<h1>
💰 Income Ledger
</h1>


<p>
Pharmacy income transactions details
</p>





<div className="summary-card">


<h3>
Total Income
</h3>


<h2>
${totalIncome}
</h2>


</div>






<table>


<thead>


<tr>

<th>Date</th>

<th>Income Source</th>

<th>Amount</th>

</tr>


</thead>





<tbody>


{

incomeData.map((item,index)=>(


<tr key={index}>


<td>
{item.date}
</td>


<td>
{item.source}
</td>


<td>
{item.amount}
</td>


</tr>


))


}



</tbody>



</table>




</div>


)


}


export default IncomeLedger;