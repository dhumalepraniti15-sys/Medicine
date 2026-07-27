import "./ReportsAnalytics.css";
import { revenueSummary } from "./reportsData";
import { IndianRupee, Download } from "lucide-react";

const RevenueReports = () => {
  return (
    <div className="report-card">

      <div className="report-title">

        <div className="title-left">
          <IndianRupee size={24} />
          <div>
            <h3>Revenue Reports</h3>
            <p>Revenue overview and performance</p>
          </div>
        </div>

        <button className="export-btn-small">
          <Download size={18} />
          Export
        </button>

      </div>

      {/* Summary Cards */}

      <div className="summary-grid">

        {revenueSummary.map((item) => {

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

      {/* Revenue Table */}

      <div className="table-wrapper">

        <table className="report-table">

          <thead>

            <tr>
              <th>Department</th>
              <th>Revenue</th>
              <th>Growth</th>
              <th>Status</th>
            </tr>

          </thead>
<tbody>

  <tr>
    <td>Prescription Medicines</td>
    <td>₹8,40,000</td>
    <td>+12%</td>
    <td>
      <span className="status active">
        Excellent
      </span>
    </td>
  </tr>

  <tr>
    <td>OTC Medicines</td>
    <td>₹6,20,000</td>
    <td>+8%</td>
    <td>
      <span className="status active">
        Good
      </span>
    </td>
  </tr>

  <tr>
    <td>Health & Wellness Products</td>
    <td>₹4,80,000</td>
    <td>+15%</td>
    <td>
      <span className="status active">
        Excellent
      </span>
    </td>
  </tr>

  <tr>
    <td>Medical Devices</td>
    <td>₹3,10,000</td>
    <td>+5%</td>
    <td>
      <span className="status pending">
        Average
      </span>
    </td>
  </tr>

</tbody>

        </table>

      </div>

    </div>
  );
};

export default RevenueReports;