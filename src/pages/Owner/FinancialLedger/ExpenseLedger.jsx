import React from "react";


import FinancialCard
from "../../../components/Financial/FinancialCard";


import LedgerTable
from "../../../components/Financial/LedgerTable";


import ExportButton
from "../../../components/Financial/ExportButton";


import {
expenseCards,
expenseData
}
from "./expenseLedgerData";


import "./FinancialLedger.css";



const ExpenseLedger =()=>{


return (

<div className="financial-container">


<h1>
📤 Expense Ledger
</h1>



<div className="card-grid">


{
expenseCards.map((card,index)=>(

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

placeholder="Search Expense"

/>


<select>

<option>
All Categories
</option>


<option>
Medicine
</option>


<option>
Salary
</option>


<option>
Maintenance
</option>


</select>


</div>




<LedgerTable

data={expenseData}

type="expense"

/>




<ExportButton/>


</div>

)

}


export default ExpenseLedger;