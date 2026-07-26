import "./ReportsAnalytics.css";
import { procurementReports } from "./reportsData";
import { ShoppingCart, Download } from "lucide-react";

const ProcurementReports = () => {
  return (
    <div className="report-card">

      <div className="report-title">

        <div className="title-left">
          <ShoppingCart size={24} />

          <div>
            <h3>Procurement Reports</h3>
            <p>Purchase orders and procurement summary</p>
          </div>
        </div>

        <button className="export-btn-small">
          <Download size={18} />
          Export
        </button>

      </div>

      {/* Summary Cards */}

      <div className="summary-grid">

        <div className="summary-item procurement-card">
          <h4>Total Purchase Orders</h4>
          <h2>245</h2>
        </div>

        <div className="summary-item procurement-card">
          <h4>Approved Orders</h4>
          <h2>198</h2>
        </div>

        <div className="summary-item procurement-card">
          <h4>Pending Orders</h4>
          <h2>27</h2>
        </div>

        <div className="summary-item procurement-card">
          <h4>Total Procurement Cost</h4>
          <h2>₹12,80,000</h2>
        </div>

      </div>

      {/* Procurement Table */}

      <div className="table-wrapper">

        <table className="report-table">

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Supplier</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {procurementReports.map((item) => (

              <tr key={item.orderId}>

                <td>{item.orderId}</td>

                <td>{item.supplier}</td>

                <td>{item.amount}</td>

                <td>

                  <span
                    className={`status ${
                      item.status === "Delivered"
                        ? "active"
                        : item.status === "Approved"
                        ? "paid"
                        : "pending"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ProcurementReports;