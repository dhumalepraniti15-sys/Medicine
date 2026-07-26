import "./Settings.css";

import { backups } from "./settingsData";

import {
  Database,
  Download,
  RotateCcw,
  CloudUpload,
} from "lucide-react";


const Backup = () => {


return (

<div className="settings-card">


<div className="settings-header">


<div className="header-left">

<Database size={24}/>


<div>

<h2>
Backup Management
</h2>


<p>
Manage system backups and restore data
</p>


</div>


</div>


</div>



{/* Summary Cards */}


<div className="backup-summary">


<div className="backup-card">

<h4>
Last Backup
</h4>

<h2>
26 July 2026
</h2>

</div>



<div className="backup-card">

<h4>
Backup Size
</h4>

<h2>
1.8 GB
</h2>

</div>



<div className="backup-card">

<h4>
Status
</h4>

<h2 className="success">
Completed
</h2>

</div>



</div>





{/* Action Buttons */}


<div className="backup-actions">


<button className="primary-btn">

<CloudUpload size={18}/>

Backup Now

</button>



<button className="secondary-btn">

<RotateCcw size={18}/>

Restore Backup

</button>



<button className="secondary-btn">

<Download size={18}/>

Download Backup

</button>


</div>





{/* Backup Table */}


<div className="table-wrapper">


<table className="role-table">


<thead>

<tr>

<th>Date</th>

<th>Backup Size</th>

<th>Type</th>

<th>Status</th>


</tr>

</thead>



<tbody>


{
backups.map((backup)=>(


<tr key={backup.id}>


<td>
{backup.date}
</td>


<td>
{backup.size}
</td>


<td>
{backup.type}
</td>


<td>

<span className="status-badge active">

{backup.status}

</span>

</td>


</tr>


))

}


</tbody>


</table>


</div>



</div>


);

};


export default Backup;