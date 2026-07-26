import { payrollActions } from "./payrollData";
import "./Payroll.css";

const PayrollActions = () => {
  return (
    <div className="action-card">

      <h3>Quick Payroll Actions</h3>

      <div className="action-grid">

        {payrollActions.map((item, index) => {

          const Icon = item.icon;

          return (
            <button className="action-btn" key={index}>
              <Icon size={28} />
              <span>{item.title}</span>
            </button>
          );

        })}

      </div>

    </div>
  );
};

export default PayrollActions;