import React from "react";
import { useNavigate } from "react-router-dom";
import "./FinancialLedger.css";

import {
  Wallet,
  CreditCard,
  BarChart3,
  FileText,
  TrendingUp
} from "lucide-react";


const FinancialLedger = () => {


const navigate = useNavigate();



const ledgerData = [

{
title:"Income Ledger",
description:"Hospital income transactions",
icon:<Wallet/>,
path:"/financial-ledger/income"
},


{
title:"Expense Ledger",
description:"Hospital expenses records",
icon:<CreditCard/>,
path:"/financial-ledger/expense"
},


{
title:"Cash Flow",
description:"Cash movement summary",
icon:<BarChart3/>,
path:"/financial-ledger/cash-flow"
},


{
title:"General Ledger",
description:"Complete financial records",
icon:<FileText/>,
path:"/financial-ledger/general"
},


{
title:"Profit & Loss",
description:"Profit and loss statement",
icon:<TrendingUp/>,
path:"/financial-ledger/profit-loss"
}

];



return (

<div className="financial-page">


<div className="page-header">

<h1>
💰 Financial Ledger
</h1>

<p>
Manage hospital financial transactions
</p>

</div>



<div className="ledger-grid">


{
ledgerData.map((item,index)=>(


<div

className="ledger-card"

key={index}

onClick={()=>navigate(item.path)}

>


<div className="ledger-icon">

{item.icon}

</div>


<div>

<h3>
{item.title}
</h3>

<p>
{item.description}
</p>

</div>


</div>


))

}



</div>


</div>

);


};


export default FinancialLedger;