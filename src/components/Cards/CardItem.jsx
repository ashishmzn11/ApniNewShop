import React from "react";
import { Button } from "react-bootstrap";

function CardItem({ Add = [], Remove }) {
  return (
    <tbody>
      {Add.map((data, index) => (
        <tr key={data.id || index} className="align-middle">
          <td className="fw-semibold">{data.Product}</td>
          <td className="text-muted">{data.Category}</td>
          <td>
            <img
              src={data.image}
              alt={data.Product || "product"}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "6px",
                border: "1px solid #dee2e6",
              }}
            />
          </td>
          <td>
            <Button
              variant="danger"
              size="sm"
              className="fw-bold"
              onClick={() => Remove(data.id)}
            >
              {data.Action || "Delete"}
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default CardItem;
