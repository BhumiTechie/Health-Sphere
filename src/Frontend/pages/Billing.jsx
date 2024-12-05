import React from 'react';

const Billing = () => {
  return (
    <div className="main-content">
      <h2>Billing</h2>
      <table>
        <thead>
          <tr>
            <th>Invoice #</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>INV001</td>
            <td>01-Dec-2024</td>
            <td>$200</td>
            <td>Paid</td>
          </tr>
          <tr>
            <td>INV002</td>
            <td>05-Dec-2024</td>
            <td>$150</td>
            <td>Due</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Billing;
