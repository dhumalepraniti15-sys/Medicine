import {
  IndianRupee,
  TrendingUp,
  TrendingDown,
  Pill,
  Truck,
  ShoppingCart,
  FileBarChart,
} from "lucide-react";

/* ==========================
   Revenue Summary Cards
========================== */

export const revenueSummary = [
  {
    id: 1,
    title: "Total Revenue",
    value: "₹24,85,000",
    icon: IndianRupee,
    color: "#16a34a",
    bg: "#ecfdf5",
  },
  {
    id: 2,
    title: "Monthly Revenue",
    value: "₹6,80,000",
    icon: TrendingUp,
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    id: 3,
    title: "Today's Revenue",
    value: "₹42,500",
    icon: TrendingUp,
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    id: 4,
    title: "Revenue Growth",
    value: "18%",
    icon: TrendingUp,
    color: "#ea580c",
    bg: "#fff7ed",
  },
];

/* ==========================
   Expense Summary Cards
========================== */

export const expenseSummary = [
  {
    id: 1,
    title: "Total Expenses",
    value: "₹12,60,000",
    icon: TrendingDown,
    color: "#dc2626",
    bg: "#fef2f2",
  },
  {
    id: 2,
    title: "Monthly Expenses",
    value: "₹3,10,000",
    icon: TrendingDown,
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    id: 3,
    title: "Utilities",
    value: "₹48,000",
    icon: TrendingDown,
    color: "#0f766e",
    bg: "#ecfeff",
  },
  {
    id: 4,
    title: "Operational Cost",
    value: "₹1,92,000",
    icon: TrendingDown,
    color: "#2563eb",
    bg: "#eff6ff",
  },
];

/* ==========================
   Pharmacy Reports
========================== */

export const pharmacyReports = [
  {
    medicine: "Paracetamol",
    sold: 420,
    stock: 180,
    revenue: "₹42,000",
  },
  {
    medicine: "Amoxicillin",
    sold: 250,
    stock: 120,
    revenue: "₹38,500",
  },
  {
    medicine: "Vitamin C",
    sold: 310,
    stock: 90,
    revenue: "₹28,600",
  },
  {
    medicine: "Insulin",
    sold: 140,
    stock: 55,
    revenue: "₹72,000",
  },
];

/* ==========================
   Vendor Reports
========================== */

export const vendorReports = [
  {
    vendor: "ABC Pharma",
    purchase: "₹3,20,000",
    pending: "₹42,000",
    status: "Active",
  },
  {
    vendor: "MedPlus Suppliers",
    purchase: "₹2,10,000",
    pending: "₹18,000",
    status: "Active",
  },
  {
    vendor: "HealthCare Pvt Ltd",
    purchase: "₹4,80,000",
    pending: "₹0",
    status: "Paid",
  },
];

/* ==========================
   Procurement Reports
========================== */

export const procurementReports = [
  {
    orderId: "PO001",
    supplier: "ABC Pharma",
    amount: "₹80,000",
    status: "Delivered",
  },
  {
    orderId: "PO002",
    supplier: "MediCare",
    amount: "₹1,25,000",
    status: "Pending",
  },
  {
    orderId: "PO003",
    supplier: "Health Supplies",
    amount: "₹95,000",
    status: "Approved",
  },
];

/* ==========================
   Financial Reports
========================== */

export const financialReports = [
  {
    title: "Profit",
    amount: "₹12,25,000",
    icon: TrendingUp,
  },
  {
    title: "Loss",
    amount: "₹1,20,000",
    icon: TrendingDown,
  },
  {
    title: "Cash Flow",
    amount: "₹8,40,000",
    icon: IndianRupee,
  },
  {
    title: "Net Assets",
    amount: "₹58,60,000",
    icon: FileBarChart,
  },
];