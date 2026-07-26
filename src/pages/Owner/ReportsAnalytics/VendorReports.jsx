import "./ReportsAnalytics.css";
import { vendorReports } from "./reportsData";
import { Truck, Download } from "lucide-react";

const VendorReports = () => {
  return (
    <div className="report-card">

      <div className="report-title">

        <div className="title-left">
          <Truck size={24} />

          <div>
            <h3>Vendor Reports</h3>
            <p>Vendor purchases and payment details</p>
          </div>
        </div>

        <button className="export-btn-small">
          <Download size={18} />
          Export
        </button>

      </div>

      {/* Summary Cards */}

      <div className="summary-grid">

        <div className="summary-item vendor-card">
          <h4>Total Vendors</h4>
          <h2>32</h2>
        </div>

        <div className="summary-item vendor-card">
          <h4>Total Purchases</h4>
          <h2>₹9,85,000</h2>
        </div>

        <div className="summary-item vendor-card">
          <h4>Pending Payments</h4>
          <h2>₹60,000</h2>
        </div>

        <div className="summary-item vendor-card">
          <h4>Paid Vendors</h4>
          <h2>28</h2>
        </div>

      </div>

      {/* Vendor Table */}

      <div className="table-wrapper">

        <table className="report-table">

          <thead>

            <tr>
              <th>Vendor Name</th>
              <th>Total Purchase</th>
              <th>Pending Payment</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {vendorReports.map((vendor, index) => (

              <tr key={index}>

                <td>{vendor.vendor}</td>

                <td>{vendor.purchase}</td>

                <td>{vendor.pending}</td>

                <td>

                  <span
                    className={`status ${
                      vendor.status === "Paid"
                        ? "paid"
                        : "active"
                    }`}
                  >
                    {vendor.status}
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

export default VendorReports;