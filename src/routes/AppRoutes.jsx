import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import OwnerLayout from "../layouts/OwnerLayout";


// ==========================
// Financial Ledger
// ==========================

import FinancialLedger from "../pages/Owner/FinancialLedger/FinancialLedger";
import IncomeLedger from "../pages/Owner/FinancialLedger/IncomeLedger";
import ExpenseLedger from "../pages/Owner/FinancialLedger/ExpenseLedger";
import CashFlow from "../pages/Owner/FinancialLedger/CashFlow";
import GeneralLedger from "../pages/Owner/FinancialLedger/GeneralLedger";
import ProfitLoss from "../pages/Owner/FinancialLedger/ProfitLoss";



// ==========================
// Reports Analytics
// ==========================

import ReportsAnalytics from "../pages/Owner/ReportsAnalytics/ReportsAnalytics";

import RevenueReports from "../pages/Owner/ReportsAnalytics/RevenueReports";
import ExpenseReports from "../pages/Owner/ReportsAnalytics/ExpenseReports";
import PharmacyReports from "../pages/Owner/ReportsAnalytics/PharmacyReports";
import VendorReports from "../pages/Owner/ReportsAnalytics/VendorReports";
import ProcurementReports from "../pages/Owner/ReportsAnalytics/ProcurementReports";
import FinancialReports from "../pages/Owner/ReportsAnalytics/FinancialReports";



// ==========================
// Payroll
// ==========================

import Payroll from "../pages/Owner/Payroll/Payroll";
import EmployeeSalary from "../pages/Owner/Payroll/EmployeeSalary";
import Payslips from "../pages/Owner/Payroll/Payslips";
import Deductions from "../pages/Owner/Payroll/Deductions";
import Bonus from "../pages/Owner/Payroll/Bonus";
import SalaryReports from "../pages/Owner/Payroll/SalaryReports";




// ==========================
// Settings
// ==========================

import Settings from "../pages/Owner/Settings/Settings";

import CompanyProfile from "../pages/Owner/Settings/CompanyProfile";
import SystemSettings from "../pages/Owner/Settings/SystemSettings";
import Security from "../pages/Owner/Settings/Security";
import RolesPermissions from "../pages/Owner/Settings/RolesPermissions";
import Backup from "../pages/Owner/Settings/Backup";




// ==========================
// My Profile
// ==========================

import MyProfile from "../pages/Owner/MyProfile/MyProfile";

import ChangePassword from "../pages/Owner/MyProfile/ChangePassword";
import Notifications from "../pages/Owner/MyProfile/Notifications";





const AppRoutes = () => {


return (

<Routes>


{/* ==========================
        OWNER LAYOUT
========================== */}


<Route element={<OwnerLayout/>}>



{/* Default */}

<Route

path="/"

element={
<Navigate to="/financial-ledger" replace />
}

/>





{/* ==========================
        FINANCIAL LEDGER
========================== */}


<Route
path="/financial-ledger"
element={<FinancialLedger/>}
/>


<Route
path="/financial-ledger/income"
element={<IncomeLedger/>}
/>


<Route
path="/financial-ledger/expense"
element={<ExpenseLedger/>}
/>


<Route
path="/financial-ledger/cash-flow"
element={<CashFlow/>}
/>


<Route
path="/financial-ledger/general"
element={<GeneralLedger/>}
/>


<Route
path="/financial-ledger/profit-loss"
element={<ProfitLoss/>}
/>






{/* ==========================
        REPORTS ANALYTICS
========================== */}


<Route
path="/reports-analytics"
element={<ReportsAnalytics/>}
/>


<Route
path="/reports/revenue"
element={<RevenueReports/>}
/>


<Route
path="/reports/expense"
element={<ExpenseReports/>}
/>


<Route
path="/reports/pharmacy"
element={<PharmacyReports/>}
/>


<Route
path="/reports/vendor"
element={<VendorReports/>}
/>


<Route
path="/reports/procurement"
element={<ProcurementReports/>}
/>


<Route
path="/reports/financial"
element={<FinancialReports/>}
/>






{/* ==========================
        PAYROLL
========================== */}


<Route
path="/payroll"
element={<Payroll/>}
/>


<Route
path="/payroll/employee-salary"
element={<EmployeeSalary/>}
/>


<Route
path="/payroll/payslips"
element={<Payslips/>}
/>


<Route
path="/payroll/deductions"
element={<Deductions/>}
/>


<Route
path="/payroll/bonus"
element={<Bonus/>}
/>


<Route
path="/payroll/salary-reports"
element={<SalaryReports/>}
/>







{/* ==========================
        SETTINGS
========================== */}


<Route
path="/settings"
element={<Settings/>}
/>


<Route
path="/settings/company"
element={<CompanyProfile/>}
/>


<Route
path="/settings/system"
element={<SystemSettings/>}
/>


<Route
path="/settings/security"
element={<Security/>}
/>


<Route
path="/settings/roles"
element={<RolesPermissions/>}
/>


<Route
path="/settings/backup"
element={<Backup/>}
/>








{/* ==========================
        MY PROFILE
========================== */}


<Route
path="/my-profile"
element={<MyProfile/>}
/>


<Route
path="/my-profile/password"
element={<ChangePassword/>}
/>


<Route
path="/my-profile/notifications"
element={<Notifications/>}
/>




</Route>







{/* ==========================
        404 PAGE
========================== */}


<Route

path="*"

element={

<div className="not-found-page">


<h1>
404
</h1>


<h2>
Page Not Found
</h2>


<p>
The page you are looking for does not exist.
</p>


</div>

}

/>


</Routes>

);


};


export default AppRoutes;