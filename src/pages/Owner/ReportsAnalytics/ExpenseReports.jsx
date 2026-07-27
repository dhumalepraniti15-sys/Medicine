import "./ReportsAnalytics.css";
import { expenseSummary } from "./reportsData";
import { TrendingDown, Download } from "lucide-react";

const ExpenseReports = () => {
  return (
    <div className="report-card">

      <div className="report-title">

        <div className="title-left">
          <TrendingDown size={24} />

          <div>
            <h3>Expense Reports</h3>
            <p>Department-wise expense analysis</p>
          </div>
        </div>

        <button className="export-btn-small">
          <Download size={18} />
          Export
        </button>

      </div>

      {/* Summary Cards */}

      <div className="summary-grid">

        {expenseSummary.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.id}
              className="summary-item"
              style={{
                background: item.bg,
              }}
            >

              <div
                className="summary-icon"
                style={{
                  background: item.color,
                }}
              >
                <Icon size={24} color="#fff" />
              </div>

              <h4>{item.title}</h4>

              <h2>{item.value}</h2>

            </div>

          );

        })}

      </div>

      {/* Expense Table */}

      <div className="table-wrapper">

        <table className="report-table">

          <thead>

            <tr>
              <th>Department</th>
              <th>Monthly Expense</th>
              <th>Budget</th>
              <th>Status</th>
            </tr>

          </thead>

         <tbody>

  <tr>
    <td>Medicine Inventory</td>
    <td>₹1,20,000</td>
    <td>₹1,50,000</td>
    <td>
      <span className="status active">
        Under Budget
      </span>
    </td>
  </tr>

  <tr>
    <td>Supplier Payments</td>
    <td>₹90,000</td>
    <td>₹1,00,000</td>
    <td>
      <span className="status active">
        Under Budget
      </span>
    </td>
  </tr>

  <tr>
    <td>Staff Salaries</td>
    <td>₹65,000</td>
    <td>₹60,000</td>
    <td>
      <span className="status pending">
        Over Budget
      </span>
    </td>
  </tr>

  <tr>
    <td>Store Maintenance</td>
    <td>₹35,000</td>
    <td>₹40,000</td>
    <td>
      <span className="status active">
        Under Budget
      </span>
    </td>
  </tr>

</tbody>
        </table>

      </div>

    </div>
  );
};

export default ExpenseReports;