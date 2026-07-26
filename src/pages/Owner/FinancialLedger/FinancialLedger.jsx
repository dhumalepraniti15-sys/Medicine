import React from "react";
import { useNavigate } from "react-router-dom";
import "./FinancialLedger.css";

import {
  Wallet,
  CreditCard,
  BarChart3,
  FileText,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const FinancialLedger = () => {

  const navigate = useNavigate();

  const ledgerData = [

    {
      title: "Income Ledger",
      description: "Track all patient billing, consultation fees and hospital income.",
      icon: <Wallet size={34} />,
      color: "#16a34a",
      path: "/financial-ledger/income"
    },

    {
      title: "Expense Ledger",
      description: "Manage operational expenses, purchases and hospital costs.",
      icon: <CreditCard size={34} />,
      color: "#ef4444",
      path: "/financial-ledger/expense"
    },

    {
      title: "Cash Flow",
      description: "Monitor daily cash inflow, outflow and account balance.",
      icon: <BarChart3 size={34} />,
      color: "#2563eb",
      path: "/financial-ledger/cash-flow"
    },

    {
      title: "General Ledger",
      description: "Complete accounting records for all financial transactions.",
      icon: <FileText size={34} />,
      color: "#f59e0b",
      path: "/financial-ledger/general"
    },

    {
      title: "Profit & Loss",
      description: "Analyze hospital profit, expenses and financial performance.",
      icon: <TrendingUp size={34} />,
      color: "#7c3aed",
      path: "/financial-ledger/profit-loss"
    }

  ];

  return (

    <div className="financial-page">

      <div className="financial-header">

        <h1>💰 Financial Ledger</h1>

        <p>
          Manage hospital financial records, income, expenses and accounting reports.
        </p>

      </div>

      <div className="ledger-grid">

        {ledgerData.map((item, index) => (

          <div className="ledger-card" key={index}>

            <div
              className="ledger-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <button
              className="ledger-btn"
              onClick={() => navigate(item.path)}
            >
              Open Ledger
            </button>

          </div>

        ))}

      </div>

    </div>

  );

};

export default FinancialLedger;