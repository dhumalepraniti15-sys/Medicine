import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import "./Payroll.css";

const pieData = [
  { name: "Salary", value: 70 },
  { name: "Bonus", value: 15 },
  { name: "Allowance", value: 10 },
  { name: "Deductions", value: 5 },
];

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

const monthlyData = [
  { month: "Jan", payroll: 580000 },
  { month: "Feb", payroll: 610000 },
  { month: "Mar", payroll: 640000 },
  { month: "Apr", payroll: 690000 },
  { month: "May", payroll: 740000 },
  { month: "Jun", payroll: 780000 },
];

const PayrollOverview = () => {
  return (
    <div className="chart-grid">

      <div className="chart-card">

        <h3>Payroll Distribution</h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>

            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

      <div className="chart-card">

        <h3>Monthly Payroll Statistics</h3>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={monthlyData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="payroll"
              fill="#2563eb"
              radius={[8,8,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default PayrollOverview;