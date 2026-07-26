import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Wallet,
  FileText,
  ShoppingCart,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import "./ReportsAnalytics.css";

const ReportsAnalytics = () => {
  const navigate = useNavigate();

  const reports = [
    {
      title: "Revenue Reports",
      description: "View hospital revenue, daily collections and income trends.",
      icon: <Wallet size={34} />,
      color: "#22c55e",
      path: "/reports/revenue",
    },
    {
      title: "Expense Reports",
      description: "Track operational expenses and monthly expenditure.",
      icon: <FileText size={34} />,
      color: "#ef4444",
      path: "/reports/expense",
    },
    {
      title: "Pharmacy Reports",
      description: "Monitor medicine sales and pharmacy inventory.",
      icon: <ShoppingCart size={34} />,
      color: "#3b82f6",
      path: "/reports/pharmacy",
    },
    {
      title: "Vendor Reports",
      description: "Review vendor payments and purchase history.",
      icon: <FileText size={34} />,
      color: "#f59e0b",
      path: "/reports/vendor",
    },
    {
      title: "Procurement Reports",
      description: "Analyze procurement and stock purchasing reports.",
      icon: <ShoppingCart size={34} />,
      color: "#8b5cf6",
      path: "/reports/procurement",
    },
    {
      title: "Financial Reports",
      description: "Complete financial performance and business summary.",
      icon: <BarChart3 size={34} />,
      color: "#2563eb",
      path: "/reports/financial",
    },
  ];

  return (
    <div className="reports-page">

      <div className="reports-header">
        <h1>📊 Reports & Analytics</h1>
        <p>Access all hospital reports from one place.</p>
      </div>

      <div className="reports-grid">

        {reports.map((report, index) => (
          <div className="report-card" key={index}>

            <div
              className="report-icon"
              style={{ background: report.color }}
            >
              {report.icon}
            </div>

            <h3>{report.title}</h3>

            <p>{report.description}</p>

            <button
              className="report-btn"
              onClick={() => navigate(report.path)}
            >
              View Report
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ReportsAnalytics;