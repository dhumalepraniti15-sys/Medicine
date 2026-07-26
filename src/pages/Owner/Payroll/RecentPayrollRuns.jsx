import "./Payroll.css";

const payrollRuns = [
  {
    month: "May 2025",
    employees: 28,
    amount: "₹7,85,000",
    status: "Completed",
  },
  {
    month: "April 2025",
    employees: 28,
    amount: "₹7,62,000",
    status: "Completed",
  },
  {
    month: "March 2025",
    employees: 27,
    amount: "₹7,41,000",
    status: "Completed",
  },
];

const RecentPayrollRuns = () => {
  return (
    <div className="bottom-card">

      <h3>Recent Payroll Runs</h3>

      <table className="mini-table">

        <thead>
          <tr>
            <th>Month</th>
            <th>Employees</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {payrollRuns.map((item, index) => (

            <tr key={index}>
              <td>{item.month}</td>
              <td>{item.employees}</td>
              <td>{item.amount}</td>

              <td>
                <span className="status processed">
                  {item.status}
                </span>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default RecentPayrollRuns;