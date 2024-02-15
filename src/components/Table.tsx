export default function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>PO</th>
            <th>Date</th>
            <th>Status</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Requestor</th>
          </tr>
        </thead>
        <tbody>
          <Row />
          <Row />
          <Row />
          <Row />
        </tbody>
        <tfoot>
          <tr>
            <th>PO</th>
            <th>Date</th>
            <th>Status</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Requestor</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function Row() {
  return (
    <tr>
      <td>#123</td>
      <td>12/16/2020</td>
      <td>
        <div className="badge badge-accent">Open</div>
      </td>
      <td>Quality Control Equipment</td>
      <td>1,000</td>
      <td>USD</td>
      <td>Vitaliy Potapov</td>
    </tr>
  );
}
