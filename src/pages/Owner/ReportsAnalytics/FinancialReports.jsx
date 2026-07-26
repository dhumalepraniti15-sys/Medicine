import React from "react";
import "./ReportsAnalytics.css";


const FinancialReports = () => {


  return (

    <div className="reports-card">


      <h1>
        📊 Financial Reports
      </h1>


      <p>
        Complete financial summary of hospital operations.
      </p>



      <div className="report-summary">


        <div className="report-box">

          <h4>
            Total Revenue
          </h4>

          <h2>
            $850,000
          </h2>

        </div>



        <div className="report-box">

          <h4>
            Total Expenses
          </h4>

          <h2>
            $350,000
          </h2>

        </div>



        <div className="report-box">

          <h4>
            Net Profit
          </h4>

          <h2>
            $500,000
          </h2>

        </div>


      </div>





      <table className="report-table">


        <thead>

          <tr>

            <th>
              Category
            </th>

            <th>
              Amount
            </th>

            <th>
              Status
            </th>

          </tr>

        </thead>



        <tbody>


          <tr>

            <td>
              Revenue
            </td>

            <td>
              $850,000
            </td>

            <td>
              Completed
            </td>

          </tr>



          <tr>

            <td>
              Expenses
            </td>

            <td>
              $350,000
            </td>

            <td>
              Completed
            </td>

          </tr>



          <tr>

            <td>
              Profit
            </td>

            <td>
              $500,000
            </td>

            <td>
              Approved
            </td>

          </tr>


        </tbody>


      </table>


    </div>

  );

};


export default FinancialReports;