import React from "react";


import FinancialCard
from "../../../components/Financial/FinancialCard";


import ExportButton
from "../../../components/Financial/ExportButton";


import {
cashCards,
cashTransactions,
monthlyCashFlow
}
from "./cashFlowData";


import "./FinancialLedger.css";



const CashFlow =()=>{


return (

<div className="financial-container">


<h1>
💵 Cash Flow
</h1>



<div className="card-grid">


{
cashCards.map((card,index)=>(

<FinancialCard

key={index}

icon={card.icon}

title={card.title}

value={card.value}

/>

))

}


</div>




<h2>
📊 Monthly Cash Flow
</h2>



<div className="chart-box">


{
monthlyCashFlow.map((item,index)=>(


<div className="bar-item" key={index}>


<p>{item.month}</p>


<div className="income-bar">

Income ${item.income}

</div>


<div className="expense-bar">

Expense ${item.expense}

</div>


</div>


))

}


</div>




<h2>
💳 Cash Transactions
</h2>



<table className="ledger-table">


<thead>

<tr>

<th>ID</th>
<th>Date</th>
<th>Description</th>
<th>Credit</th>
<th>Debit</th>
<th>Balance</th>

</tr>

</thead>


<tbody>


{
cashTransactions.map((item)=>(

<tr key={item.id}>


<td>{item.id}</td>

<td>{item.date}</td>

<td>{item.description}</td>

<td>{item.credit}</td>

<td>{item.debit}</td>

<td>{item.balance}</td>


</tr>

))

}


</tbody>


</table>



<ExportButton/>


</div>

)

}


export default CashFlow;