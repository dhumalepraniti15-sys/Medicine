import { useNavigate } from "react-router-dom";

import {
  Users,
  Wallet,
  FileText,
  MinusCircle,
  Gift,
  BarChart3,
  IndianRupee
} from "lucide-react";

import "./Payroll.css";


const Payroll = () => {


const navigate = useNavigate();



const payrollData = [

{
title:"Total Employees",
value:"250",
icon:<Users/>
},


{
title:"Monthly Payroll",
value:"₹25,00,000",
icon:<IndianRupee/>
},


{
title:"Paid Salary",
value:"₹22,50,000",
icon:<Wallet/>
},


{
title:"Pending Salary",
value:"₹2,50,000",
icon:<FileText/>
}

];





const modules=[


{
title:"Employee Salary",
desc:"Manage employee monthly salaries",
icon:<Wallet/>,
path:"/payroll/employee-salary"
},



{
title:"Payslips",
desc:"Generate and download payslips",
icon:<FileText/>,
path:"/payroll/payslips"
},



{
title:"Deductions",
desc:"Manage salary deductions",
icon:<MinusCircle/>,
path:"/payroll/deductions"
},



{
title:"Bonus",
desc:"Manage employee incentives and bonus",
icon:<Gift/>,
path:"/payroll/bonus"
},



{
title:"Salary Reports",
desc:"View payroll analytics and reports",
icon:<BarChart3/>,
path:"/payroll/salary-reports"
}


];






return (

<div className="payroll-page">



<div className="payroll-header">

<h1>
💰 Payroll Management
</h1>


<p>
Manage employee salaries, payroll records and reports
</p>


</div>






{/* Summary Cards */}

<div className="payroll-summary">


{
payrollData.map((item,index)=>(


<div 
className="salary-card" 
key={index}
>


<div className="salary-icon">

{item.icon}

</div>



<div>

<h3>
{item.title}
</h3>


<h2>
{item.value}
</h2>


</div>


</div>


))

}


</div>







{/* Payroll Modules */}


<h2 className="section-title">
Payroll Modules
</h2>





<div className="payroll-grid">


{

modules.map((item,index)=>(


<div 
className="payroll-card" 
key={index}
>



<div className="module-icon">

{item.icon}

</div>




<h3>
{item.title}
</h3>



<p>
{item.desc}
</p>





<button
onClick={() => navigate(item.path)}
>

Open

</button>




</div>


))


}



</div>





</div>

);

};


export default Payroll;