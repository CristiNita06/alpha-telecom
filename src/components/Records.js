import "./styles/Records.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default function Records({ records }) {
  return (
    <div className="recordsWrapper">
      <Table striped bordered hover size="sm" responsive="sm" variant="dark">
        <thead>
          <tr>
            <th>Number</th>
            <th>Short Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.number}>
              <td>{record.number}</td>
              <td>{record.short_description}</td>
              <td>
                <Button variant="info" size="sm">
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
