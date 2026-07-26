import { Search, Download, Eye } from "lucide-react";
import { employees } from "./payrollData";
import "./Payroll.css";

const EmployeePayrollTable = () => {
  return (
    <div className="payroll-table-card">

      <div className="table-header">

        <h3>Employee Payroll Summary</h3>

        <div className="table-actions">

          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search Employee..."
            />
          </div>

          <button className="export-btn">
            <Download size={18} />
            Export
          </button>

        </div>

      </div>

      <table className="payroll-table">

        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Gross Salary</th>
            <th>Deductions</th>
            <th>Net Salary</th>
            <th>Status</th>
            <th>Payslip</th>
          </tr>
        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr key={emp.id}>

              <td>{emp.id}</td>

              <td>{emp.name}</td>

              <td>{emp.department}</td>

              <td>{emp.designation}</td>

              <td>{emp.gross}</td>

              <td>{emp.deduction}</td>

              <td>{emp.net}</td>

              <td>

                <span
                  className={
                    emp.status === "Processed"
                      ? "status processed"
                      : "status pending"
                  }
                >
                  {emp.status}
                </span>

              </td>

              <td>

                <button className="view-btn">
                  <Eye size={18} />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default EmployeePayrollTable;