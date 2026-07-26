import React from "react";
import {useNavigate} from "react-router-dom";
import "./ReportsAnalytics.css";


import {
FileText,
BarChart3,
ShoppingCart,
Wallet
} from "lucide-react";



const ReportsAnalytics=()=>{


const navigate=useNavigate();



const reports=[


{
title:"Revenue Reports",
description:"Hospital revenue analysis",
icon:<Wallet/>,
path:"/reports/revenue"
},


{
title:"Expense Reports",
description:"Hospital expense tracking",
icon:<FileText/>,
path:"/reports/expense"
},


{
title:"Pharmacy Reports",
description:"Medicine sales and stock reports",
icon:<ShoppingCart/>,
path:"/reports/pharmacy"
},


{
title:"Vendor Reports",
description:"Vendor payments and history",
icon:<FileText/>,
path:"/reports/vendor"
},


{
title:"Procurement Reports",
description:"Purchase and inventory reports",
icon:<ShoppingCart/>,
path:"/reports/procurement"
},


{
title:"Financial Reports",
description:"Complete financial summary",
icon:<BarChart3/>,
path:"/reports/financial"
}


];



return(

<div className="reports-page">


<h1>
📊 Reports & Analytics
</h1>


<p>
Hospital performance and business reports
</p>



<div className="reports-grid">


{

reports.map((item,index)=>(


<div

className="report-card"

key={index}

onClick={()=>navigate(item.path)}

>


<div className="report-icon">

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

)

}



export default ReportsAnalytics;