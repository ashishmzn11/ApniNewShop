import React from "react";
import {
  Table,
  Container,
  Card as BCard,
} from "react-bootstrap";
import CardItem from "./CardItem";
import AddCard from "./AddCard";

function HeaderCard({ Add = [], SendData, Remove }) {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100 vh-100 vw-100 bg-light py-5"
    >
      <BCard className="shadow-lg w-100" style={{ maxWidth: "1200px" }}>
        <BCard.Body className="p-4">
          <h2 className="text-center text-success fw-bold mb-4">
            🏪 Pantry Manager
          </h2>

          {/* Responsive Table */}
          <div className="table-responsive">
            <Table
              bordered
              hover
              responsive="sm"
              className="align-middle text-center mb-4"
            >
              <thead className="table-primary">
                <tr>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {/* CardItem renders tbody */}
              <CardItem Add={Add} Remove={Remove} />
            </Table>
          </div>

          {/* Add Product Form */}
          <AddCard SendData={SendData} />
        </BCard.Body>
      </BCard>
    </Container>
  );
}

export default HeaderCard;
