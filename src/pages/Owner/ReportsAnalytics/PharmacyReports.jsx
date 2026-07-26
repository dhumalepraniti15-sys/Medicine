import "./ReportsAnalytics.css";
import { pharmacyReports } from "./reportsData";
import { Pill, Download } from "lucide-react";

const PharmacyReports = () => {
  return (
    <div className="report-card">

      <div className="report-title">

        <div className="title-left">
          <Pill size={24} />

          <div>
            <h3>Pharmacy Reports</h3>
            <p>Medicine sales and inventory summary</p>
          </div>
        </div>

        <button className="export-btn-small">
          <Download size={18} />
          Export
        </button>

      </div>

      {/* Pharmacy Summary */}

      <div className="summary-grid">

        <div className="summary-item pharmacy-card">
          <h4>Total Sales</h4>
          <h2>₹18,25,000</h2>
        </div>

        <div className="summary-item pharmacy-card">
          <h4>Medicines Sold</h4>
          <h2>1,120</h2>
        </div>

        <div className="summary-item pharmacy-card">
          <h4>Available Stock</h4>
          <h2>8,450</h2>
        </div>

        <div className="summary-item pharmacy-card">
          <h4>Low Stock Items</h4>
          <h2>12</h2>
        </div>

      </div>

      {/* Pharmacy Table */}

      <div className="table-wrapper">

        <table className="report-table">

          <thead>

            <tr>
              <th>Medicine</th>
              <th>Sold</th>
              <th>Available Stock</th>
              <th>Revenue</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {pharmacyReports.map((medicine, index) => (

              <tr key={index}>

                <td>{medicine.medicine}</td>

                <td>{medicine.sold}</td>

                <td>{medicine.stock}</td>

                <td>{medicine.revenue}</td>

                <td>

                  {medicine.stock < 100 ? (
                    <span className="status pending">
                      Low Stock
                    </span>
                  ) : (
                    <span className="status active">
                      In Stock
                    </span>
                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default PharmacyReports;