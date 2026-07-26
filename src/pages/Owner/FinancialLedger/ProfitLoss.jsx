import React from "react";


import FinancialCard
from "../../../components/Financial/FinancialCard";


import ExportButton
from "../../../components/Financial/ExportButton";


import {

profitCards,

revenueData,

expenseAnalysis,

monthlyProfit

}

from "./profitLossData";


import "./FinancialLedger.css";



const ProfitLoss =()=>{


return (

<div className="financial-container">


<h1>
📊 Profit & Loss
</h1>



<div className="card-grid">


{
profitCards.map((card,index)=>(

<FinancialCard

key={index}

icon={card.icon}

title={card.title}

value={card.value}

/>

))

}


</div>



<div className="profit-section">


<h2>
📈 Revenue Analysis
</h2>


<table className="ledger-table">

<thead>

<tr>

<th>Revenue Source</th>

<th>Amount</th>

</tr>

</thead>


<tbody>


{
revenueData.map((item,index)=>(

<tr key={index}>

<td>{item.name}</td>

<td>{item.amount}</td>

</tr>

))

}


</tbody>


</table>


</div>





<div className="profit-section">


<h2>
📉 Expense Analysis
</h2>



<table className="ledger-table">

<thead>

<tr>

<th>Expense Category</th>

<th>Amount</th>

</tr>

</thead>



<tbody>


{
expenseAnalysis.map((item,index)=>(

<tr key={index}>

<td>{item.name}</td>

<td>{item.amount}</td>


</tr>

))

}


</tbody>


</table>


</div>





<div className="profit-section">


<h2>
📅 Monthly Profit Comparison
</h2>



<table className="ledger-table">


<thead>

<tr>

<th>Month</th>

<th>Revenue</th>

<th>Expense</th>

<th>Profit</th>

</tr>

</thead>



<tbody>


{
monthlyProfit.map((item,index)=>(

<tr key={index}>

<td>{item.month}</td>

<td>{item.revenue}</td>

<td>{item.expense}</td>

<td>{item.profit}</td>


</tr>

))

}


</tbody>


</table>


</div>



<ExportButton/>


</div>

)

}


export default ProfitLoss;