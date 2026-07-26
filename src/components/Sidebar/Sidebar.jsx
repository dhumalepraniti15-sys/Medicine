import React from "react";
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  IndianRupee,
  Wallet,
  Users,
  FileText,
  Settings,
  User,
  LogOut,
  Receipt,
  CreditCard,
  BarChart3,
  Shield,
  Database
} from "lucide-react";

import "./Sidebar.css";


const Sidebar = () => {


const menu = [


/* ==========================
   Financial Ledger
========================== */

{
title:"Financial Ledger",

items:[

{
name:"Income Ledger",
path:"/financial-ledger/income",
icon:<Wallet/>
},

{
name:"Expense Ledger",
path:"/financial-ledger/expense",
icon:<Wallet/>
},


{
name:"Cash Flow",
path:"/financial-ledger/cash-flow",
icon:<BarChart3/>
},


{
name:"General Ledger",
path:"/financial-ledger/general",
icon:<FileText/>
},


{
name:"Profit & Loss",
path:"/financial-ledger/profit-loss",
icon:<CreditCard/>
}


]

},




/* ==========================
   Reports Analytics
========================== */


{
title:"Reports & Analytics",

items:[


{
name:"Revenue Reports",
path:"/reports/revenue",
icon:<FileText/>
},


{
name:"Expense Reports",
path:"/reports/expense",
icon:<FileText/>
},


{
name:"Pharmacy Reports",
path:"/reports/pharmacy",
icon:<FileText/>
},


{
name:"Vendor Reports",
path:"/reports/vendor",
icon:<FileText/>
},


{
name:"Procurement Reports",
path:"/reports/procurement",
icon:<FileText/>
},


{
name:"Financial Reports",
path:"/reports/financial",
icon:<BarChart3/>
}


]

},





/* ==========================
   Payroll
========================== */


{
title:"Payroll",

items:[


{
name:"Payroll Dashboard",
path:"/payroll",
icon:<Wallet/>
},


]

},





/* ==========================
   Settings
========================== */


{
title:"Settings",

items:[


{
name:"Company Profile",
path:"/settings/company",
icon:<Settings/>
},


{
name:"System Settings",
path:"/settings/system",
icon:<Settings/>
},


{
name:"Security",
path:"/settings/security",
icon:<Shield/>
},


{
name:"Roles & Permissions",
path:"/settings/roles",
icon:<Users/>
},


{
name:"Backup",
path:"/settings/backup",
icon:<Database/>
}


]

},





/* ==========================
   Profile
========================== */


{
title:"My Profile",

items:[


{
name:"Profile",
path:"/my-profile",
icon:<User/>
},


]

}


];





return (

<div className="sidebar">


<div className="sidebar-logo">


<h2>
🏥 MediCare ERP
</h2>


<p>
Owner Dashboard
</p>


</div>





<div className="sidebar-menu">


{

menu.map((section,index)=>(


<div 
key={index}
className="menu-section"
>


<h4 className="menu-title">

{section.title}

</h4>





{

section.items.map((item,i)=>(


<NavLink

key={i}

to={item.path}

className={({isActive})=>

isActive ? "active" : ""

}


>


<span className="menu-icon">

{item.icon}

</span>


<span>

{item.name}

</span>


</NavLink>


))


}




</div>


))


}



</div>



</div>

);


};


export default Sidebar;