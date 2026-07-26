import { useState } from "react";

import {
  Bell,
  Mail,
  Smartphone,
  Calendar,
  Wallet,
  Shield,
} from "lucide-react";

import "./MyProfile.css";



const Notifications = () => {



const defaultSettings = {

email:true,

sms:false,

appointment:true,

payment:true,

security:true,

};



const [settings,setSettings] = useState(defaultSettings);



const [message,setMessage] = useState("");





const handleToggle = (key)=>{


setSettings({

...settings,

[key]:!settings[key]

});


};






const handleReset = ()=>{


setSettings(defaultSettings);


setMessage(
"Notification settings reset successfully"
);


};






const handleSave = ()=>{


console.log(settings);


setMessage(
"Notification settings saved successfully"
);


};






const options=[


{

key:"email",

title:"Email Notifications",

subtitle:"Receive updates via email",

icon:Mail

},


{

key:"sms",

title:"SMS Notifications",

subtitle:"Receive SMS alerts",

icon:Smartphone

},


{

key:"appointment",

title:"Appointment Alerts",

subtitle:"Doctor & patient notifications",

icon:Calendar

},


{

key:"payment",

title:"Payment Alerts",

subtitle:"Payroll & revenue notifications",

icon:Wallet

},


{

key:"security",

title:"Security Alerts",

subtitle:"Login & password updates",

icon:Shield

}



];






return (


<div className="notification-card">



<div className="notification-title">


<Bell size={24}/>


<h2>
Notification Settings
</h2>


</div>





<div className="notification-list">


{

options.map((item)=>{


const Icon=item.icon;


return(


<div

className="notification-item"

key={item.key}

>


<div className="notification-left">


<div className="notification-icon">

<Icon size={22}/>

</div>



<div>

<h4>
{item.title}
</h4>


<p>
{item.subtitle}
</p>


</div>


</div>






<label className="switch">


<input


type="checkbox"


checked={settings[item.key]}


onChange={()=>handleToggle(item.key)}


/>


<span className="slider"></span>



</label>



</div>


)


})


}



</div>






<div className="notification-footer">


<button


className="cancel-btn"


onClick={handleReset}


>

Reset

</button>






<button


className="save-btn"


onClick={handleSave}


>

Save Settings

</button>



</div>





{

message &&

<p className="success-message">

{message}

</p>

}





</div>


);


};


export default Notifications;