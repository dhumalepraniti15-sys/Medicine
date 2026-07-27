import React from "react";

const FinancialCard = ({ icon: Icon, title, value }) => {

return (

<div className="financial-card">

<div className="card-icon">
<Icon size={22} />
</div>

<div>
<h4>{title}</h4>
<h2>{value}</h2>
</div>

</div>

);

};

export default FinancialCard;