import React, { useContext } from "react";
import { AppContaxt } from "../../store/store";
import { Container, Card, Row, Col, Table } from "react-bootstrap";

const Orders = () => {
  const { Orderitem, currentUser } = useContext(AppContaxt);

  // show only orders of logged in user
  const myOrders = Orderitem.filter(o => o.email === currentUser?.email);

  return (
    <Container className="py-5">
      <h1 className="text-success fw-bold mb-5 text-center">My Orders</h1>
      {myOrders.length === 0 ? (
        <p className="text-center text-muted">No orders yet.</p>
      ) : (
        <Row className="g-4">
          {myOrders.map(order => (
            <Col xs={12} key={order.id}>
              <Card className="shadow-sm p-3">
                <h5 className="fw-bold">
                  Order {order.id} – {order.date}
                </h5>
                <p className="mb-1"><strong>Name:</strong> {order.name}</p>
                <p className="mb-1"><strong>Address:</strong> {order.address}</p>
                <p className="mb-1"><strong>Phone:</strong> {order.phone}</p>
                <p className="mb-3"><strong>Total:</strong> ₹ {order.totalPrice}</p>

                <Table bordered responsive className="mb-0 text-center">
                  <thead className="table-primary">
                    <tr>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map(item => (
                      <tr key={item.id}>
                        <td>{item.Product}</td>
                        <td>{item.quantity}</td>
                        <td>₹ {item.Price * item.quantity}</td>
                      
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Orders;
