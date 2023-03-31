import css from "./Transactions.css";

const Fill = ({ items }) => {
  return items.map((item) => (
    <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));
};

export const TransactionHistory = ({ items }) => {
  return (
    <table class="ransaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <Fill items={items}></Fill>
    </table>
  );
};
