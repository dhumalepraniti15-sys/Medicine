import React from "react";


import FinancialCard
from "../../../components/Financial/FinancialCard";


import ExportButton
from "../../../components/Financial/ExportButton";


import {
accountCards,
ledgerEntries
}
from "./generalLedgerData";


import "./FinancialLedger.css";



const GeneralLedger =()=>{


return (

<div className="financial-container">


<h1>
📚 General Ledger
</h1>



<div className="card-grid">


{
accountCards.map((card,index)=>(

<FinancialCard

key={index}

icon={card.icon}

title={card.title}

value={card.value}

/>

))

}


</div>



<div className="filter-area">


<input

placeholder="Search Account"

/>


<select>

<option>
All Accounts
</option>

<option>
Assets
</option>

<option>
Revenue
</option>

<option>
Expenses
</option>


</select>


</div>



<h2>
Ledger Entries
</h2>



<table className="ledger-table">


<thead>

<tr>

<th>ID</th>

<th>Date</th>

<th>Account Name</th>

<th>Debit</th>

<th>Credit</th>

<th>Balance</th>


</tr>

</thead>



<tbody>


{
ledgerEntries.map((item)=>(

<tr key={item.id}>


<td>{item.id}</td>

<td>{item.date}</td>

<td>{item.account}</td>

<td>{item.debit}</td>

<td>{item.credit}</td>

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


export default GeneralLedger;