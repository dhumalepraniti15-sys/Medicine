import "./Payroll.css";

const payments = [
  {
    employee: "Amit Sharma",
    department: "Pharmacy",
    amount: "₹29,800",
    date: "28 May 2025",
  },
  {
    employee: "Neha Verma",
    department: "Reception",
    amount: "₹24,200",
    date: "28 May 2025",
  },
  {
    employee: "Pooja Mehta",
    department: "Nursing",
    amount: "₹27,300",
    date: "28 May 2025",
  },
];

const UpcomingPayments = () => {
  return (
    <div className="bottom-card">

      <h3>Upcoming Payments</h3>

      <table className="mini-table">

        <thead>
          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Amount</th>
            <th>Payment Date</th>
          </tr>
        </thead>

        <tbody>

          {payments.map((item, index) => (

            <tr key={index}>
              <td>{item.employee}</td>
              <td>{item.department}</td>
              <td>{item.amount}</td>
              <td>{item.date}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default UpcomingPayments;