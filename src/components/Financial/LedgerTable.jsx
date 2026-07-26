import React from "react";


const LedgerTable = ({data,type}) => {


return (

<table className="ledger-table">

<thead>

<tr>

<th>ID</th>
<th>Date</th>

{
type==="income" ?

<>
<th>Source</th>
<th>Payment Mode</th>
</>

:

<>
<th>Category</th>
<th>Vendor</th>
</>

}


<th>Amount</th>
<th>Status</th>


</tr>

</thead>


<tbody>

{
data.map((item)=>(

<tr key={item.id}>


<td>{item.id}</td>

<td>{item.date}</td>


{
type==="income" ?

<>
<td>{item.source}</td>
<td>{item.payment}</td>
</>

:

<>
<td>{item.category}</td>
<td>{item.vendor}</td>
</>

}


<td>{item.amount}</td>


<td>

<span className={
item.status==="Paid" || item.status==="Received"
?
"received"
:
"pending"
}>

{item.status}

</span>

</td>


</tr>

))

}


</tbody>


</table>

)

}


export default LedgerTable;